// In JavaScript, an iterable is an object that can be iterated over, meaning you can use a for...of loop to cycle through its elements. An object is considered iterable if it implements the iterable protocol, which means it must have a Symbol.iterator method that returns an iterator.
// arrays
let array=[1,2,3];
for(let items of array){
    console.log(items);
}
// string
let string = "hello";
for (let char of string) {
  console.log(char); // h, e, l, l, o
}
// sets
let set = new Set([1, 2, 3]);
for (let item of set) {
  console.log(item); // 1, 2, 3
}
// maps 
let map = new Map([["a", 1], ["b", 2]]);
for (let [key, value] of map) {
  console.log(key, value); // a 1, b 2
}
