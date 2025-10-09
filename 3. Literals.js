const arr = ["tolu", "david", "john"]; //array literals

console.log(arr);

const obj = { 
    name: "tolu",
     age: 23
}; //object literals

console.log(obj);

const str = "hello world"; //string literals

console.log(str);

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