// An array is not a primitive data type in JavaScript — it’s a special kind of object.

let y = 5
let x = 5

console.log(y === x)

// const arr1 = new Array(element0, element1, /* …, */ elementN);
// const arr2 = Array(element0, element1, /* …, */ elementN);
// const arr3 = [element0, element1, /* …, */ elementN];


//To create an array with non-zero length, but without any items, either of the following can be used:

const arrtest = new Array(5)
const arrtest2 = Array(5)
const arrtest3 = []

arrtest3.length = 7

arrtest3.push("ejeeej")

console.log(arrtest3.length)

// Can also be in an object

const obj = {prop : [1,2,3,4,5], fullname: "Tolulope Oginni"}

// Referring to array element 

const myArray = [3,1]

console.log(myArray[0])
console.log(myArray["length"])

// Populating an array

const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";

// Note: If you supply a non-integer value to the array operator in the code above, a property will be created in the object representing the array, instead of an array element.


const arr = [];
arr[3.4] = "Oranges";
console.log(arr.length); // 0
console.log(Object.hasOwn(arr, 3.4)); // true

// length
// Writing a value that is shorter than the number of stored items truncates the array. Writing 0 empties it entirely:

const cat = ["missy", "Bobby", "Tracy"]

console.log(cat.length)

cat.length = 2

console.log(cat.length, cat)

console.log(cat[0]) //missy

cat.length =  0

console.log(cat) //Empty as beign truncated

cat.length = 6

console.log(cat) // Notice how those 3 items are no longer thdre and its just the 6 empty items because array are stored by reference not values

// Iterating Over Arrays
let color = ["red", "blue", "Green", , "gold"]

for (let i = 0; i < color.length; i++ ){
    const element = color[i];
    console.log(element)
}

console.log(color.length)

// for each iteration method

// color.forEach((x) => console.log(x)) //Skips the unassigned value

// color.forEach(x => console.log(x)) //In Quotes or not works good


// for .. of and for in to iterate
for (const i in color){
    console.log(color[i])
}


for (const i of color){
    console.log(i )
}


// Array Methods


color = color.concat("green", "indigo", "Purple") //adds multiple arrays together

console.log(color)

const list = color.join("-") // joins all the items as a string in the array using what is inside as a spacer and if nothing is inside it uses a comma by default

console.log(list)

color.push("white","Blue") //Add item into an array object

console.log(color)

console.log(color.pop()) //removes the last element of the array and returns the element

console.log(color.shift()) //remobes the first

console.log(color.unshift(4,5,9)) //The unshift() method adds one or more elements to the front of an array and returns the new length of the array.

let colorpick = color.slice(3,7) //The slice() method extracts a section of an array and returns a new array.

console.log(colorpick)

console.log(color)
console.log(color.at(2))
console.log(color.at(-2))  // Returns an element at the specified index in the array

console.log(color.splice(1,3, "Ash","Lilac"))
//The splice() method removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.
console.log(color.reverse())


//You can have an array inside an array

let newArray = [1,2,3,4,[5,6]]

console.log(newArray)

// the flat method joins everything and makes it a single array

newArray = newArray.flat();

console.log(newArray)

console.log(newArray[newArray.length -1])

console.log(newArray.indexOf(2))

console.log(newArray.lastIndexOf(2))

// Map

// const a1 = ["a", "b", "d"]

// const a2 = a1.map((result)=> result.toUpperCase())

// console.log(a2)

// Array Transformation

const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];

const resuit = Object.groupBy((inventory),({type}) => type )

console.log(resuit)

// Sparse Array
// Array constructor:
const a = Array(5); // [ <5 empty items> ]

// Consecutive commas in array literal:
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

// Directly setting a slot with index greater than array.length:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// Elongating an array by directly setting .length:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]

// Deleting an element:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]