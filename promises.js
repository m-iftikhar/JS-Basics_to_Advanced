//  promise = An Object that manages asynchronous operations.
//                    Wrap a Promise Object around {asynchronous code}
//                    "I promise to return a value"

function walkdog(){
    return new Promise ((resolve,reject) =>{
    setTimeout(() => {
        resolve("dog is walking");
    
    }, 1500);
});
}

function cleankitchen(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("you clean kitchen")
            
    
        }, 2000);
    });
}
function takeouttrash(){
   
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("you take out trash")
        
            
        }, 500);
    })
}
walkdog(()=>{
       cleankitchen(()=>{
                  takeouttrash(()=>{
                    console.log("all task finished");
                  })
       })
})
walkdog().then(value=>{console.log(value) });
cleankitchen().then(value=>console.log(value));
takeouttrash().then(value=>console.log(value));