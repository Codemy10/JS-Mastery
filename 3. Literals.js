const arr = ["tolu", "david", "john"]; //array literals

console.log(arr);

// Extra commas in array literals

const arr2 = ["tolu", "david", /*empty this is a good practice */, "john"]; //array literals with extra commas

console.log(arr2);
console.log(arr2.length); // output: 4
console.log(arr2[2]); // output: undefined


//object literals

const obj = { 
    name: "tolu",
     age: 23
}; 

// Enhanced object literals

// const obj2 = { 
//     // __proto__: theprototypeObject, // setting the prototype
//     handler, // shorthand for handler: handler
//     toString() { // method definition shorthand
//         // super calls
//         return "This is " + super.toString();
//     }
// };


// String Literals

const str = "hello world";

console.log(str);

let str2 = "this text will go to a new line \n see?"; // escape sequence for new line

console.log(str2);


// Template literals

let fullname = "tolu";
let age = 23;
let greeting = `Hello, my name is ${fullname} and i am ${age} years`

console.log(greeting)



const num = 42; //number literals

console.log(num);

const bool = true; //boolean literals

console.log(bool);

const n = null; //null literal

console.log(n);

const undef = undefined; //undefined literal   

console.log(undef);

const regex = /ab+c/; //regular expression literal

console.log(typeof(regex) ); // output: object

const func = function() { //function literal
    return "This is a function";
};

console.log(func());

const bigInt = 9007199254741991n; //bigint literal

console.log(bigInt);

const sym = Symbol("sym"); //symbol literal    
console.log(sym)