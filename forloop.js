const cars=["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for(let i=0; i < cars.length; i++){
    console.log(cars);

}
// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }
//   Expression 1 is executed (one time) before the execution of the code block.
  
//   Expression 2 defines the condition for executing the code block.
  
//   Expression 3 is executed (every time) after the code block has been executed.

// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// JavaScript For In Loop
// The for in statement loops through the properties of an object:
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
console.log(txt);
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x  + "<br>";
}
console.log(text);