// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished
function myDisplayer(some) {
    return some;
  }
  
  function myFirst() {
    return myDisplayer("Hello");
  }
  
  function mySecond() {
    return myDisplayer("Goodbye");
  }
  
  console.log(myFirst()); // Output: Hello
  console.log(mySecond()); // Output: Goodbye
  