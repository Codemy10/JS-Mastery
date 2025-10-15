//Parameters are passed by value for primitive data types such as num and str

let myAge = 30; // Original variable

function increaseAge(age) {
  // 'age' here is a COPY of 'myAge' (it holds the value 30)
  
  age = 31; // **Assignment:** We are changing the copy, 'age', to 31.
            // This has NO effect on 'myAge' outside the function.
  
  console.log("Inside function, age is:", age); // Output: 31
}

increaseAge(myAge); // We pass the VALUE 30

console.log("Outside function, myAge is:", myAge); // Output: 30
// 'myAge' is UNCHANGED.



// 
function changingObj(myObj) {
    myObj.model = "TOkunbo"

    console.log("This is inside obj",myObj.model)
}

const car = {
    carname: "Lexus",
    model: "Oshara",
    year: 2030
}

console.log(car.model)

changingObj(car)

console.log(car.model)

// 
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30




// Function Expression
//  Anonymous funtion

const square = function (number){
    return number * number;
}

console.log(square(4))

// A recursive function

const factorial = function fac(n){
    return n < 2 ? 1 : n * fac(n - 1)
}

console.log(factorial(5))


// Functions scope

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"


// Closures

const outer = function (name){

  const inner = function (){

    return name;
  }

  return inner();
}

console.log(outer("Smadav"))


//  


function parentScope() {
  let scope1 = 0;
  
  function childScope() {
    scope1++;
    console.log(scope1)
  }

  return childScope;
}

const storeParentScope = parentScope();

storeParentScope()
storeParentScope()



//Argument Object

function arg(just){

  return just + arguments.length

}

console.log(arg("Me", "Another", "More", 2, 3))


function myConcat(seperator) {
  let result = "";

  for(let i = 1; i < arguments.length; i++ ){
    result += seperator + arguments[i]  ;
  }

  return result;
}

console.log(myConcat("|", 2 ,3,4,5,6,7,8,9,10))


// Function Parameters

// Function parameters can be defalt or rest parameterr

// Defaault parameter

// f no value is provided for b, its value would be undefined when evaluating a*b, and a call to multiply would normally have returned NaN. However, this is prevented by the second line in this example
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5

// With default parameters, a manual check in the function body is no longer necessary

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5

