const { DataStore } = require('notarealdb');
 
const store = new DataStore('./data');
const apples = store.collection('apples');
const oranges = store.collection('oranges');
// create a new item; returns a generated id
const id = apples.create({variety: 'Gala', weight: 133}); // => 'BJ4E9mQOG'
 
// list all items in a collection
console.log(apples.list()); // => [{id: 'BJ4E9mQOG', variety: 'Gala', weight: 133}]
 
// get a single item
console.log(apples.get(id)); // => {id: 'BJ4E9mQOG', variety: 'Gala', weight: 133}
 
// update an item
apples.update({id: id, variety: 'Braeburn', weight: 133});

// get a single item
console.log(apples.get(id)); // => {id: 'BJ4E9mQOG', variety: 'Gala', weight: 133}

// delete an item
apples.delete(id);