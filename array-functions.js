const arr = [1, 2, 3, 4, 5, 6, 7];

// forEach: iterate
let forEach = arr.forEach(e => console.log(e * 2));
console.log(forEach);

// map: transform each array elements
let map = arr.map(e => e * 2);
console.log(map);

// reduce: reduce array to single value
let reduce = arr.reduce((e1, e2) => e1 + e2);
console.log(reduce);

// filter: filter array elements by condition
let filter = arr.filter(e => e >= 5);
console.log(filter);

// some: exisit some element in array?
let some = arr.some(e => e === 7);
console.log(some);

// find: find an element in array
let find = arr.find(e => e === 2);
console.log(find);
