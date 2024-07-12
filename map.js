const fruits= new Map([
    ["bananna",200],
    ["apple",200],
    ["mango",200]
]);
console.log(fruits);

// set method to add 
fruits.set(["orange",300]);
fruits.set(["pineapple",300]);
console.log(fruits);
// The set() method can also be used to change existing Map values: 
fruits.set("mango",700);
console.log(fruits);
// get method 
 console.log(fruits.get("apple"));

//  maps are objects
console.log(typeof(fruits));
// size 
console.log(fruits.size);
// delte
console.log(fruits.delete("apple"));
console.log(fruits)
// clear() -> clear all the elements 
console.log(fruits.clear());
console.log(fruits.size);

// The has() method returns true if a key exists in a map:
// other are values keys entries etc 