// Shared helpers for building and refreshing compendium packs.

export async function unlockPack(pack) {
  if (!pack) return;
  if (pack.locked === false) return;

  if (typeof pack.configure === "function") {
    await pack.configure({ locked: false });
  }

  // Foundry V13 can apply compendium configuration asynchronously. Give the
  // collection a tick to refresh before the importer creates folders or items.
  await new Promise((resolve) => setTimeout(resolve, 0));

  if (pack.locked === true) {
    try {
      pack.locked = false;
    } catch (error) {
      // Some Foundry builds expose locked as a getter-only value.
    }
  }

  if (pack.locked === true) {
    throw new Error(`The compendium "${pack.collection}" is still locked after the importer tried to unlock it.`);
  }
}

export async function lockPack(pack) {
  if (!pack) return;
  if (pack.locked === true) return;

  if (typeof pack.configure === "function") {
    await pack.configure({ locked: true });
  }

  await new Promise((resolve) => setTimeout(resolve, 0));

  if (pack.locked === false) {
    try {
      pack.locked = true;
    } catch (error) {
      // Some Foundry builds expose locked as a getter-only value.
    }
  }
}

export async function deletePackFolders(pack) {
  await unlockPack(pack);

  const folders = pack.folders?.contents ?? [];
  if (!folders.length) return;

  try {
    await Folder.deleteDocuments(folders.map((folder) => folder.id), { pack: pack.collection });
  } catch (error) {
    console.warn(`Conan | Could not remove folders from ${pack.collection}. Continuing import.`, error);
  }
}

export async function ensurePackFolders(pack, folderNames, folderType = pack?.documentName ?? pack?.metadata?.type ?? "Item") {
  await unlockPack(pack);

  const names = [...new Set(folderNames.filter(Boolean))].sort();
  const folders = pack.folders?.contents ?? [];
  const folderMap = new Map(
    folders
      .filter((folder) => folder.type === folderType && names.includes(folder.name))
      .map((folder) => [folder.name, folder])
  );
  const missingFolders = names
    .filter((name) => !folderMap.has(name))
    .map((name) => ({ name, type: folderType }));

  if (missingFolders.length) {
    try {
      const createdFolders = await Folder.createDocuments(missingFolders, { pack: pack.collection });
      for (const folder of createdFolders) folderMap.set(folder.name, folder);
    } catch (error) {
      console.warn(`Conan | Could not create folders in ${pack.collection}. Entries will be imported without new folders.`, error);
    }
  }

  return folderMap;
}

export function getFolderId(folder) {
  return folder?.id ?? folder ?? null;
}

export async function createPackItems(itemData, pack) {
  if (!itemData.length) return [];
  await unlockPack(pack);

  try {
    return await Item.createDocuments(itemData, { pack: pack.collection });
  } catch (error) {
    console.warn(`Conan | Batch import failed for ${pack.collection}. Trying entries one at a time.`, error);
  }

  const created = [];
  for (const item of itemData) {
    try {
      const [document] = await Item.createDocuments([item], { pack: pack.collection });
      if (document) created.push(document);
    } catch (error) {
      console.error(`Conan | Could not import "${item.name}" into ${pack.collection}.`, error);
    }
  }

  return created;
}

export async function createPackJournalEntries(entryData, pack) {
  if (!entryData.length) return [];
  await unlockPack(pack);

  try {
    return await JournalEntry.createDocuments(entryData, { pack: pack.collection });
  } catch (error) {
    console.warn(`Conan | Batch journal import failed for ${pack.collection}. Trying entries one at a time.`, error);
  }

  const created = [];
  for (const entry of entryData) {
    try {
      const [document] = await JournalEntry.createDocuments([entry], { pack: pack.collection });
      if (document) created.push(document);
    } catch (error) {
      console.error(`Conan | Could not import journal "${entry.name}" into ${pack.collection}.`, error);
    }
  }

  return created;
}
