const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

// window.indexedDB
let db;
const dbRequest = indexedDB.open('StorageDummy', 1); // version 1 - create or open

dbRequest.onsuccess = function (event) {
  // on sucess -> whenever reruns
  db = event.target.result;
};

dbRequest.onupgradeneeded = function (event) {
  // on upgrade -> created / vers change
  db = event.target.result;

  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  objStore.transaction.oncomplete = function (event) {
    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products'); // readonly
    productStore.add({
      id: 'p1',
      title: 'A First Product',
      price: 12.99,
      tags: ['Expensive', 'luxury'],
    });
  };
};

dbRequest.onerror = function (event) {
  console.log('ERROR!');
};
storeBtn.addEventListener('click', () => {
  console.log('clicked');

  if (!db) {
    return;
  }
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products'); // readonly
  productStore.add({
    id: 'p2',
    title: 'A Second Product',
    price: 15.99,
    tags: ['Expensive', 'luxury'],
  });
});

retrBtn.addEventListener('click', () => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');

  const request = productStore.get('p1');
  request.onsuccess = function () {
    console.log(request.result);
  };
});
