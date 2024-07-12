const person={
    lname : "iftikhar",
    age : 23,
    professsion : "developer"
    
};
console.log(person);
// add oject property
person.fname="muhamaad";
console.log(person);

// acesss property in twio ways
 console.log(person.lname);
 console.log(person["fname"]);

//  In JavaScript, almost "everything" is an object.

// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects
// All JavaScript values, except primitives, are objects.

// nested objects

let myObj = {
    name: "John",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
};
let x = myObj; 

console.log(myObj); 
console.log(myObj.myCars);
console.log(myObj.myCars.car1);
console.log(myObj.myCars["car2"]);
// console.log(myObj[myCars]["car2"]); // Incorrect, myCars is not a defined variable
// console.log([x][myCars]["car2"]); // Incorrect, myCars is not a defined variable
console.log(myObj.myCars["car2"]); // Corrected access

// If you want to use `x` instead of `myObj`, ensure `x` is assigned correctly
console.log(x.myCars);
console.log(x.myCars.car1);
console.log(x.myCars["car2"]);

//  method in objects
const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  person2.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };
  console.log(person2.fullName());
//    msut be noted name function you addhoud have bracket after name

  console.log(person2.name());

//   constructor function object
// sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.

// It is considered good practice to name constructor functions with an upper-case first letter.
 function Person3(name,age,height){
    this.firstname=name,
    this.myage=age,
    this.myheight=height
 }
 const p1= new Person3("iftikhar",23,5.9);
 const p2= new Person3("asad",22,5.5);
 console.log(p1);
 console.log(p2);
 console.log(p2.myage);
 console.log(p1.myheight);
 
