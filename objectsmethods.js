const person={
    "fname" : "iftikhar",
    "lname" : "hussain",
    "age" : 23
};

// The Object.entries() Method
// Object.entries() returns an array of the key/value pairs in an object.

console.log(Object.entries(person));
// Object.values() returns an array of values from an object: 
console.log(Object.values(person));

// The Object.keys() method returns an array with the keys of an object.
console.log(Object.keys(person));
//object properties


Object.defineProperty(person, "year", {
    value: "2008",
    enumerable: true
  });
console.log(person.year);
console.log(person);