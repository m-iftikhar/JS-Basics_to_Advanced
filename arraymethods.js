// The JavaScript method toString() converts an array to a string of (comma separated) array values.
const bikes=["honda","roadprince","kawasaki",125];
console.log(bikes.toString());
// The at() method returns an indexed element from an array.
console.log(bikes.at(2));
console.log(bikes.at(-1));
// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:
console.log(bikes.join(" *"));
// The pop() method removes the last element from an array:
console.log(bikes.pop());
// The shift() method removes the first element of an array (and "shifts" the other elements to the left):
console.log(bikes.shift());
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
bikes.unshift("pakhero");
console.log(bikes);
// The concat() method creates a new array by merging (concatenating) existing arrays:
const cars=["lambergini","civic","corolla"];
console.log(bikes.concat(cars));
// conact (merge) three arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

// The slice() method slices out a piece of an array into a new array:
// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.
console.log(bikes.slice(4));
// splice () -> you can use splice() to remove elements without leaving "holes" in the array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 console.log(fruits.splice(0, 1));