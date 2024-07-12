let text= (`hello world`);
console.log(text);

// escape sequences
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator


// length 
console.log(text.length);
let mytext="hello world";
console.log(mytext.charAt(7));  //charAt it return the character index of string
console.log(mytext.charCodeAt(3));  //The charCodeAt() method returns the unicode of the character at a given position in a string:
console.log(mytext.at(3));   //The at() method returns the character at a specified index (position) in a string.

//There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

console.log(mytext.slice(3,6));
console.log(mytext.slice(-3,-6));
console.log(mytext.substr(6)); // The substr() method extract a part of a string and returns the extracted parts in a new string:
console.log(mytext.toUpperCase());
console.log(mytext.concat(text));

 // replece method
let text2 = "Please visit   Microsoft and Microsoft!   ";
let newText = text2.replace("Microsoft", "W3Schools");
console.log(newText);
console.log(text2.trim());  //The trim() method removes whitespace from both sides of a string:
console.log(newText.length);

//string search
// return index whwere if=t start
let text3= "Please locate where 'locate' occurs!";
let index = text3.indexOf("locate");
console.log(index)

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let lastindex=text3.lastIndexOf("where");
console.log(lastindex);
// The includes() method returns true if a string contains a specified value
console.log(text3.includes("please"));

// he startsWith() method returns true if a string begins with a specified value.
// he endsWith() method returns true if a string ends with a specified value.

// Otherwise it returns false:
