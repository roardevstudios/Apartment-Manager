const DATABASE = 'bytovy-prehlad-files';
const STORE = 'attachments';

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) {
      reject(new Error('Tento prehliadač nepodporuje uloženie príloh. Doklad skúste otvoriť v novšom prehliadači.'));
      return;
    }
    const request = indexedDB.open(DATABASE, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE)) request.result.createObjectStore(STORE, { keyPath: 'id' });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(new Error('Úložisko príloh sa nepodarilo otvoriť.'));
  });
}

export async function saveAttachment(id, file) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE, 'readwrite');
    transaction.objectStore(STORE).put({ id, file, name: file.name, type: file.type, size: file.size });
    transaction.oncomplete = () => { db.close(); resolve(id); };
    transaction.onerror = () => { db.close(); reject(new Error('Prílohu sa nepodarilo uložiť. Skontrolujte voľné miesto v zariadení.')); };
    transaction.onabort = () => { db.close(); reject(new Error('Prílohu sa nepodarilo uložiť. Skontrolujte voľné miesto v zariadení.')); };
  });
}

export async function openAttachment(id) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE, 'readonly');
    const request = transaction.objectStore(STORE).get(id);
    request.onsuccess = () => { db.close(); resolve(request.result || null); };
    request.onerror = () => { db.close(); reject(new Error('Prílohu sa nepodarilo načítať.')); };
  });
}

export async function removeAttachment(id) {
  if (!id || !('indexedDB' in window)) return;
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE, 'readwrite');
    transaction.objectStore(STORE).delete(id);
    transaction.oncomplete = () => { db.close(); resolve(); };
    transaction.onerror = () => { db.close(); reject(new Error('Prílohu sa nepodarilo odstrániť.')); };
  });
}
