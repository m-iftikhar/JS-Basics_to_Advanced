// call()
// The call() method takes arguments separately. 
const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  console.log( person.fullName.call(person1, "Oslo", "Norway")); 


//   apply() 
// The apply() method takes arguments as an array. 
console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

//  bind( ) -> the bind() method, an object can borrow a method from another object.
const person4 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person4.fullName.bind(member);
  console.log(fullName());
