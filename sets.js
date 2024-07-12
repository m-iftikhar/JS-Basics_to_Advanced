// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// The values can be of any type, primitive values or objects.
const letters=new Set(["a","b",1]);
letters.add("c");
letters.add("2");
console.log(letters);
// SETS are objects
console.log(typeof(letters));

                            //   sets methods
//  has method 
console.log(letters.has("d"));
// The values() method returns an Iterator object with the values in a Set:      
          //    
          const letter2 = new Set(["a","b","c"]);

          // Create an Iterator
          const myIterator = letter2.values();
          
          // List all Elements
          let text = "";
          for (const x of myIterator) {
            text += x + "<br>";
          }
  console.log(text);
        //   The keys() method returns an Iterator object with the values in a Set:
//         A Set has no keys, so keys() returns the same as values().

// This makes Sets compatible with Maps.

// The entries() Method
// The entries() method returns an Iterator with [value,value] pairs from a Set:
const letters3 = new Set(["a","b","c"]);

// Get all Entries
const iterator = letters3.entries();

// List all Entries
let text2 = "";
for (const entry of iterator) {
  text2 += entry + "<br>";
}
console.log(text2);