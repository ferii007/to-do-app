// Simpan 500 data notes ke dalam IndexedDB
export function addBulkData() {
    const dataCount = 100;
    const dbName = 'noteDatabase';
    const storeName = 'notes';

    const request = indexedDB.open(dbName, 1);
    request.onupgradeneeded = function(event) {
        const db = event.target.result;
    
        if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        }
    };

    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction([storeName], 'readwrite');
        const store = transaction.objectStore(storeName);

        for (let i = 0; i < dataCount; i++) {
            const note = {
                title: `Note Title ${i}`,
                notes: `Note Content ${i}`,
                date: new Date().getTime()
            };

            store.add(note);
        }

        transaction.oncomplete = function() {
            console.log(`${dataCount} data notes added.`);
        };
    };

    request.onerror = function() {
        console.error('Failed to open IndexedDB.');
    };
}