// The semicolon is used to separate statements

let a = 5; let b = 6; let c = 7;
// console.log(a + b + c); // 18

// A block statement is delimited by curly braces {}
// while(x > 10){
//     // x++;
// }

// Conditional Statements

let y = 7;
let x = 7;

if (y == x){
    // console.log("Equal")
} else{
    // console.log("not equal");
}

// Switch Statement 

switch (x == y){
    case true:
        console.log("This is true");
    break;
    case false:
        console.log("This isnt true therefore false");
    break;
    default:
        console.log("Hmm");
}

// Try...catch statement
/*
throw "Error2"; // String type
// throw 42; // Number type
throw true; // Boolean type
throw {
  toString() {
    return "I'm an object!";
  },
};
*/

try{
    let age = -5;

    if(age < 0){
        throw new Error("Age cannot be negative")
    }else{

        console.log("Age is valid");
    }
    
}
catch (error){
    console.log(error.name) // Will just say Error (As string)
    console.log("Caught an error", error.message)
}
finally{
    console.log("Everything is just fine"); //Runs whether error occured or not
}



// Another way

try{
    throw "This is an error";

}

catch(err){
    // console.error(err)
}


function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    // `f` exits here
    console.log(4); // not reachable
  }
  console.log(5); // not reachable
}
// console.log(f()); // 0, 1, 3, false

