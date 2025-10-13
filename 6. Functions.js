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



const factorial = function fac(n){
    return n < 2 ? 1 : n * fac(n - 1)
}

console.log(factorial(5))