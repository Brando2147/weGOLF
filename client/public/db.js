let db;
// create a new db request for a "wegolf" database.
const request = indexedDB.open("wegolf", 1);

// Create Schema
request.onupgradeneeded = function (event) {
  const db = event.target.result;

  // Creating an object store with a listID that can be used to query
  const pendingStore = db.createObjectStore(
    "pending",
    { ketPath: "listID" },
    { autoIncrement: true }
  );

  // Creating status index to be able to query from
  pendingStore.createIndex("statusIndex", "status");
};

// Opening a transaction to access pendingStore and Status Index
request.onsuccess = function (event) {
  const db = event.target.result;
  const transaction = db.transaction(["pending"], "readwrite");
  const pendingStore = transaction.objectStore("pending");
  const statusIndex = pendingStore.index("statusIndex");

  // Adding data to our pendingStore
  //   pendingStore.add({});
  //   pendingStore.add({});
  //   pendingStore.add({});
  //   pendingStore.add({});
  //   pendingStore.add({});
  //   pendingStore.add({});

  //Return an item by Keypath
  const getRequest = pendingStore.get("1");
  getRequest.onsuccess = () => {
    console.log(getRequest.result);
  };

  //Return an item by index
  //   const getRequestIdx = statusIndex.getAll(" ");
  //   getRequestIdx.onsuccess = () => {
  //     console.log(getRequestIdx.result);
  //   };

  // check if app is online before reading from db
  if (navigator.onLine) {
    checkDatabase();
  }
};

// Errors out
request.onerror = function (event) {
  console.log("Woops! " + event.target.errorCode);
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["pending"], "readwrite");

  // access your pending object store
  const store = transaction.objectStore("pending");

  // add record to your store with add method.
  store.add(record);
}

function checkDatabase() {
  // open a transaction on your pending db
  const transaction = db.transaction(["pending"], "readwrite");
  // access your pending object store
  const store = transaction.objectStore("pending");
  // get all records from store and set to a variable
  const getAll = store.getAll();

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          const transaction = db.transaction(["pending"], "readwrite");

          // access your pending object store
          const store = transaction.objectStore("pending");

          // clear all items in your store
          store.clear();
        });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);
