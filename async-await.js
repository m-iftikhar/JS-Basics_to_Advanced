// async/Await = Async = makes a function return a promise 
//                            Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

async function walkdog() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("dog is walking");
        resolve("dog is walking");
      }, 1500);
    });
  }
  
  async function cleankitchen() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("you clean kitchen");
        resolve("you clean kitchen");
      }, 2000);
    });
  }
  
  async function takeouttrash() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("you take out trash");
        resolve("you take out trash");
      }, 500);
    });
  }
  
  async function display() {
    try {
      const dog = await walkdog();
      console.log(dog);
      const kitchen = await cleankitchen();
      console.log(kitchen);
      const trash = await takeouttrash();
      console.log(trash);
    } catch (error) {
      console.error(error);
    }
  }
  
  display();
  