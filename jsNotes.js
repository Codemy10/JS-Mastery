// Declaring a variable and assigning variables
  var name ;

// Assigning a variable 
  name = "Rahmon";

// Declaring and assigning a variable
  var age = 12;

// other ways (const)
// const can only be used once its immutable (it doesnt change )
  const sunName = "Beyioku"

// other ways (let)
// let can only be used within the scope of your program
  let name = "samson"

// Data types {Strings , Booleans , integers , objects ,array , }
  var strings = "this is a string"
  var Booleans = true // true or false

  const car = {
	'name' : 'Benz',
	'make' : 'mercedese',
	'year' : 2023
  }
   // to access object values objectName.propertyName
  // and so on ...........!!

// javascript is cammel case 
// increment and decreament with the (--)operator or (++) operator
	var num = 13;
	var numInc = ++num
	var numDec = --num

// shortcuts   
	var a;
	a = 10;
	a = a + 10	//Can now be ;
	a += 10		//still the same

// excaping literal strings in js
/****
 code output
\'     single quotes
\""    Double quotes
\\     bacslash
\n     newline
\r     carriage return
\t     tab
\b     backspace
\f     form feed
 */
	// var address = "i am a "double quoted string" wala"; //there will be an error so instead
	var address = "i am a \"double quoted nigga\" wala" //or just use single quotes

//constructng strings with variables
	var name = "Rahmon"
	var whtIsUrNme = "my name is " + name;

// finding length of string
	var myStr;
	myStr = "five"
	var myStrLenght = myStr.length

// Bracket notations to find first chracter in string
	var letter = "Love"
	var firstLetterOfletter = letter[0]

	var name = "tola"

	name[0] = "B" //now var name = Bola

// js uses a 0 based indexing ie starts counting from 0
// finding last letter
	var letter = "Love";
	var lastLetterOfletter = letter[letter.length -1]

// word |Blanks
	function test(noun , adgective, verb, adverb){
	    var result ="";
	    result += "the "+ adgective+" " + noun +" "+ verb +" "+ adverb;
	    return result;
	}
	// document.write(test("dog", "big" , "ran", "here"));

// Arrays 
	var array = ["frenzy",12,]
// Nested Array
	var myArray =[["tola", 12, "panumo"], [["child", 2, ["ade",1]] ,"Bola", 12, "chuku" ]];

// Accessing array data with indexes
	console.log(array[0])


//Ading an element to the end of an array with the .push()

myArray.push("lola")

// Removing last item in an array
myArray.pop()

// Removing the first element in the array
myArray.shift()

// Ading an element to the beginning of an array with the .unshift()
myArray.unshift()

// Queue

function myFunction(arr , item) {
    arr.push(item)
    return arr.shift();
}

let myArray = [1,2,3,4,5];
console.log(JSON.stringify(myArray))

console.log(myFunction(myArray , 6))
console.log(JSON.stringify(myArray))

// Boolean




// the == operator
function myFunction(val) {
    if (val == 12){
        return "Yes val is equal 12";
    }
    else if (val == 11){
        return "Val is equal 11" ;
    }
    else {
        return "Ooops wrong guess, val is equal " + val;
    }
}
console.log(myFunction(1))

// the === operator
function myFunction(val) {
    if (val === 7){
        return "Equals"
    }
    else {
        return "False"
    }
}
console.log(myFunction("7"))

//  == === != !== < > && || =< >= 
function myFunction(val){
    if(val <= 50 && val >= 25){
        return 'value within the range of 25 and 50'
    }
    else if (val < 25 && val >= 1) {
        return 'within the range of 1 and 24'
    } 
    else if (val > 50 ){
        return 'value is within the range of 50 and infinity'
    }
    else if (val < 0 && val >= -1000000000 ){
        return 'value is negative'
    }
    else if (val == 0)   {
        return "value is zer0"
     }
    return "Oooppps , out of range bruhhh"
}
console.log(myFunction())

//  !!
function myFunction(val){
    if (val < 10 || val > 20){
        return "Outside"
    }
    else {
        return "Within"
    }
}
console.log(myFunction(0))
// else
function myFunction(num) {
    if (num < 5 ){
        return "tiny"
    }
    else if (num < 10){
        return "small"
    }
    else if (num < 15){
        return "medium"
    }
    else if (num < 20){
        return "Large"
    }
    else if (num >= 20){
        return "Huge"
    }
    else{
        return "Error"
    }
}
console.log(myFunction(null))

// The switch
function myFunction(val) {
    var answer ;
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer ="gamma";
            break;
        default:
            return "out of input";
            break;
    }
    return answer;
}
console.log(myFunction(2))

// using the switch for or logical operation;

function myFunction(val) {
    var respond ="";
    switch(val){
        case 1:
        case 2:
        case 3:
            respond += "Low";
            break;
        case 4:
        case 5:
        case 6:
            respond += "Medium";
            break;  
        case 7:
        case 8:
        case 9:
            respond += "High";
            break;  
        default:
            respond += "out ot range"
    }
    return respond;
}


// returning early pattern from function 
function myFunction(a,b){
	if ( a < 0 || b <0 ){
		return undefined;
	}

	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b) , 2))
}

//objects
var tecnoPhone = {
    "name" : "Tecno Spark",
    "brand" : ["camon","spark"],
    "model" : "Tecno K15K",
    "version" : 10
};

// Adding properties to object
tecnoPhone.carlcare = " Within 2 years";
// or
tecnoPhone["carlcare"] = " Within 2 years";

// Using objects in place of swicth and of statement 
let val = "trueAlpha";

var obj = {
    "trueAlpha" : "Scott Mccall",
    "alpha" : ["Peter Hale","Derek Hale"],
    "demonWolf" : "Deucalion"
}
let result = obj[val];
console.log(result)



//  Testing object for properties with hasOwnProperty()

 var obj = {
    car : "Mercedes Benz",
    jeep : "G-wagon",
    tricycle: "Bajaj"
 }

var resulta = obj.hasOwnProperty("cars")

console.log(resulta)

// Instance usage
 var obj = {
    car : "Mercedes Benz",
    jeep : "G-wagon",
    tricycle: "Bajaj"
 }

function myFunction(val){
    if (obj.hasOwnProperty(val)){
        return  "Nice Job Boss " + obj[val]
    }else{
        return "Ooops boss"
    }
}
console.log(myFunction("jeep"))


// Manipulating Complex object 
var obj = [
   {
      artist : "Wizzy Baba",
      title : "woman",
      year : 2004,
      format : ["cd" , "dvd" , "mp3"],
      gold : true
   },
   {
      artist : "Burna Boy",
      title : "Gbona",
      year : 2004,
      format : ["cd" , "dvd" , "mp3"],
      gold : true
   }
]

// 
var collections = {
   "2345" : {
      "album" : "Armed and Dangerous",
      "artist" : "Juice Wrld",
      "tracks" : [
         "Bandits",
         "Legends"
      ],
   },
   "2346" : {
      "album" : "23",
      "artist" : "Burna boy",
      "tracks" : [
         "Dangote",
         "Shoko"
      ],
   },
   "2347" : {
      "artist" : "2Baba",
      "tracks" : [],
   },
   "2348" : {
      "album" : "999",
   },
}

var collectionsCopy = JSON.parse(JSON.stringify(collections))

function updateRecord(id ,prop ,value) {
   if (value === ""){
      delete collections[id][prop]
   }
   else if(prop === "tracks"){
      collections[id][prop] = collections[id][prop] || [];
      collections[id][prop].unshift(value);
   }
   else {
      collections[id][prop] = value;
   }
   return collections
}

console.log(updateRecord("2348","samsung","calo"));




// Iterate with while loops
var array = []
var i = 0;

while (i < 5) {
   array.push(i)
   i++
}
console.log(array);

// Iterate with for loops
var array = []
for (let i = 0; i < 6; i++) {
   array.push(i)
}
console.log(array);

var myArray = [1,2,3,4,5];
var total = 0;

for (var i = 0 ; i < myArray.length ; i++){
   total += myArray[i] 
}

console.log(total );


// do while
var arr = [];
var i = 10;

do {
   i++
   arr.push(i);
   
}while (i < 5)
console.log(arr);

// Practical 1
var userData = {
   0o01 : {
      "username" : "Horlamidey",
      "firstname" : "Rahman",
      "lastname" : "Beyioku",
      "tel no" : "09066825204",
      "qualifications" : ["Bsc","Hnd","Prfs","Chrtd acc"]
   },
   0o02 : {
      "username" : "HKamal",
      "firstname" : "Kamal",
      "lastname" : "Saheed",
      "tel no" : "08166825204",
      "qualifications" : ["Bsc","Prfs","Chrtd acc"]
   },
   0o03 : {
      "username" : "zeezah",
      "firstname" : "Azeezat",
      "lastname" : "",
      "tel no" : "0705525204",
      "qualifications" : ["Bsc","Hnd"]
   },
   0o04 : {
      "username" : "Horlamidey",
      "firstname" : "Rahman",
      "lastname" : "Beyioku",
      "qualifications" : []
   }
}

function updateRecord(id,prop,value) {
   if (prop == "qualification") {
      userData[id][prop] = userData[id][prop] || [];
      userData[id][prop].push(value)
   }
   else if( id === "" ){
      return "This id is either empty or unknowm"
   }
    else if(value == ""){
      delete userData[id][prop];
   }
   else{
      userData[id][prop] = value
   }
   return userData;
}
console.log(updateRecord( 1,"qualifications",""));



// practical 2
var userData = [
  {
      "username" : "Horlamidey",
      "firstname" : "Rahman",
      "lastname" : "Beyioku",
      "tel no" : "09066825204",
      "qualifications" : ["Bsc","Hnd","Prfs","Chrtd acc"]
   },
  {
      "username" : "HKamal",
      "firstname" : "Kamal",
      "lastname" : "Saheed",
      "tel no" : "08166825204",
      "qualifications" : ["Bsc","Prfs","Chrtd acc"]
   },
  {
      "username" : "zeezah",
      "firstname" : "Azeezat",
      "lastname" : "",
      "tel no" : "0705525204",
      "qualifications" : ["Bsc","Hnd"]
   },
   {
      "username" : "Horlamidey",
      "firstname" : "Habeeb",
      "lastname" : "Beyioku",
      "qualifications" : []
   }
]

function acessUserdata(name , prop) {
   for (var i = 0; i < userData.length ; i++){
      if (userData[i].firstname === name){
         return userData[i][prop] || "No such prop";
      }
   }
   return "No such Contact"
}
var data = acessUserdata("Rahman","last");
// console.log(data);

function updateUserData(id ,prop,value) {
   for (var i = 0 ; i < userData.length ; i++){
      if(userData[i].firstname === id ){
         userData[i][prop] = value;

      }
       else if (userData[i].firstname === id && prop === "qualifications" ){
         userData[i][prop] = userData[i][prop] || [];
         userData[i][prop].push(value)
      }
      
   }
   return userData;
}
var updateRecord = updateUserData("Rahman","qualifications" , "ww")
console.log(updateRecord)

// functions
Math.floor() //to round down numbers
Math.random() //random number below 0

// trenary operator