// toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
// toFixed()	Returns a number written with a number of decimals
// toPrecision()	Returns a number written with a specified length
// valueOf()	Returns a number as a number


//  tostring()
let x=123;
 console.log(x.toString());
 console.log((125).toString());
 console.log((100+24).toString());
 console.log(typeof(x));


//  toFixed() returns a string, with the number written with a specified number of decimals:
let y=3.45;
console.log(y.toFixed());
console.log(y.toFixed(2));
console.log(y.toFixed(3));
console.log(y.toFixed(4));

// toExponential() returns a string, with a number rounded and written using exponential notation.

// A parameter defines the number of characters behind the decimal point:
let z = 9.656;
console.log(z.toExponential());
console.log(z.toExponential(2));
console.log(z.toExponential(4));
console.log(z.toExponential(6));
// he toPrecision() method returns a string, with a number written with a specified length:
let a=3.1;
console.log(a.toPrecision());
console.log(a.toPrecision(4));
console.log(a.toPrecision(6));

// The valueOf() method returns a number as a number:
let b=2.54;
console.log(b.valueOf());


// parseInt()
// The global JavaScript function parseInt() converts strings to numbers:
// f the number cannot be converted, NaN (Not a Number) is returned
console.log(parseInt("10"));
console.log(parseInt("-10"));
console.log(parseInt("10.32"));
console.log(parseInt("10.7"));
console.log(parseInt("10 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years30"));

// The parseFloat() method converts strings to numbers:
console.log(parseFloat("-20"));
console.log(parseFloat("-20.54"));
console.log(parseFloat("-20.88999"));
console.log(parseFloat("-20.21"));
console.log(parseFloat("-20.0"));

