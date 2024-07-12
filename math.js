// JavaScript provides 8 mathematical constants that can be accessed as Math properties
console.log(Math.PI); 
console.log(Math.E);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG2E);

// Number to Integer
// There are 4 common methods to round a number to an integer:

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)


// math.round
console.log(Math.round(3.45));

// math.ceil
console.log(Math.ceil(4.7));
 console.log(Math.ceil(-4.2));

//  math.flooor
console.log("math.floor");
console.log(Math.floor(7.9));
console.log(Math.floor(7.3));
console.log(Math.floor(7.1));

// math.trunc
console.log("math.trunc");
console.log(Math.trunc(7.1));
console.log(Math.trunc(7.234));
console.log(Math.trunc(7.23));
//   Math.pow(x,y) returns the value of x to the power of y:
console.log(Math.pow(7,6));
// math.sqrt
console.log(Math.sqrt(6));



// Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-34));



// others are max ,min , sin , cos  , log  


// Math.random   Math.random() returns a random number between 0 and 1:
// Math.random() always returns a number lower than 1.
console.log(Math.random());

// Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included)
 console.log(Math.floor(Math.random() * 10));
// Math.floor(Math.random() * 10) returns a random integer between 0 and 10(both included)

 console.log(Math.floor(Math.random() * 11));
