// let x = 5
// let y = 10
// let age = 12;
// let grade = 2;

// const isValidNumber = x < y && 10 > 2

// // console.log(isValidNumber);


// if (age >= 18 || grade >= 3){
//     // console.log("Proceed to get your alchol");
// }
// else{
//     // console.log("Sorry you cant get alcohol")
// }


// //Implicit and Explicit conversion

// // console.log(2 - "2"); //Javascript automatically converts the string into a number 

// // console.log(5 - true) // value of true is 1 | False is 0
// // console.log(5 - true) // 5 | False is 0
// // console.log(5 - null) // 5 | null is 0
// const color = "Red"

// switch(color){
//     case 'Blue':
//         console.log("color is Blue");
//         break
//     case "Purple":
//         // console.log("Color is Purple"); 
//         break
//     default:
//         // console.log("Invalid color");
// }


//Loops drill 1

// let num = 1
// while (num <= 100) {
//     if(num % 2 !== 0){
//         console.log(num);
//     }
//     num++;
// }
// Optimized Loop drill 1

// let num = 2;
// while (num <= 100) {
//     console.log(num);
//     num += 2;
// }



// function greet(firstname, lastname, userName){
//    return ("Hello " + lastname + " " + firstname + "\n"+
//     "Your Username is " + userName
//    )
// }

// function user(){
    // const usernames = {
    //     userName : "Horlamidey",
    //     firstName : "Abdulrahman",
    //     lastName : "Beyioku"
    // }
//     return greet(usernames.firstName,usernames.lastName,usernames.userName);
// }



function user() {
    const usernames = {
        userName : "Horlamidey",
        firstName : "Abdulrahman",
        lastName : "Beyioku",
        allnames : function(){
            return this.userName;
        }
    }

    function greetUser(firstname, lastname, userName) {
        let testscope = "Omo"
        usernames.lastName = "Salau"

        console.log(usernames.lastName);
        
        return ("Hello " + lastname + " " + firstname + "\n"+ "Your Username is " + userName)
    }

    return greetUser(usernames.firstName,usernames["lastName"],usernames.userName);
a}

console.log(user())


function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}gjh