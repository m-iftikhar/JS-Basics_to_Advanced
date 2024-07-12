// let const var
let c=4;
let a=4;
let b=6;


let z=a+b+c;
console.log(z);

t=5;
// inside curly bracket it doesnot acess 
{
    let t=4
}
console.log(t);

//  const keyword

const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";
console.log(car);