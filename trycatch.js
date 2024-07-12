// The try statement allows you to define a block of code to be tested for errors while it is being executed.

// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
try {
    let result = someFunction(); // This may throw an error if someFunction is not defined
    console.log(result);
  } catch (error) {
    console.log("An error occurred:", error.message);
  }
// use finally 
try {
    let result = divide(10, 2);
    console.log("Result:", result);
  } catch (error) {
    console.log("An error occurred:", error.message);
  } finally {
    console.log("This code runs no matter what.");
  }
  