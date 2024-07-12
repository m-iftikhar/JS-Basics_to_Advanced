const bikes=["honda","roadprince","kawasaki",125];
// acess propeties
console.log(bikes[0]);
console.log(bikes[3]);
console.log(bikes[2]);
bikes[4]="united";
console.log(bikes[4]);

console.log(bikes.length);
console.log(bikes.sort());
// acess last element 
console.log(bikes[bikes.length-1]);
// push method to add elemet in array
bikes.push("yamah");
console.log(bikes);
// you can also add elemt using lentgh property
bikes[bikes.length]="honda70";
console.log(bikes);
// type of
console.log(typeof[bikes]);
