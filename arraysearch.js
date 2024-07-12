//The indexOf() method searches an array for an element value and returns its position.
// Array.indexOf() returns -1 if the item is not found.

// If the item is present more than once, it returns the position of the first occurrence.
const fruits = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruits.indexOf("Apple")+2);

// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
console.log(fruits.lastIndexOf("Apple"));
// Array.includes() to arrays. This allows us to check if an element is present in an array 
console.log(fruits.includes("mango"));
console.log(fruits);

// The find() method returns the value of the first array element that passes a test function.

// This example finds (returns the value of) the first element that is larger than 18:
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);


// The reverse() method reverses the elements in an array:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
 console.log(fruits2.reverse());