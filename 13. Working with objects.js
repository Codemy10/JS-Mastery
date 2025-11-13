// Object literals

const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};

console.log(myHonda.engine.cylinders); // 4


// 
const prop = "price";

const crypto = {[prop]: 7500};
console.log(crypto.price)


// Constructor functions

function Car(make,model,year, owner){
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}

function Person(name, age, sex){
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const tolu = new Person("Tolulope", 20, "F")
const haji = new Person("Azeez", 32, "M")


const car1 = new Car("Eagle", "Ski", "1990", tolu)
const car2 = new Car("Ford", "Sruce", "2009", haji)

console.log(car1.owner.name)
console.log(car2.owner.name)

car1.color = "Red";
car2.color = "Blue"

console.log()

//  Es6 class synthas

class Book{
  constructor(author, pages, ISBN, rating){
    this.author = author;
    this.pages = pages;
    this.ISBN = ISBN;
    this.rating = rating;

  }
}


const book1 = new Book("Sholape", 234, 45245n,"5-star")

console.log(book1.author)

// Using the Object.create() method.

const Animal = {
  type: "Invertebrates",
  displaytype() {
    console.log(this.type)
  },
};

const animal = Object.create(Animal);

animal.displaytype()

const fishes = Object.create(Animal);

fishes.type = "fishes";
fishes.displaytype()

// Enumerating Properties



function showProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    // Object.hasOwn() is used to exclude properties from the object's
    // prototype chain and only show "own properties"
    if (Object.hasOwn(obj, i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}

// Deleting Properties

delete book1.author;

// To ddefine a properties /method to all objects of a type created probably using constructor

Car.prototype.color = "red";

console.log(car1.color)

// Defining Methods

const myObj = {
  myMethod: function (){

  },
  myOtherMethod(){

  } 
}

const Manager = {
  name: "Karina",
  age: 27,
  job: "Software Engineer",
};
const Intern = {
  name: "Tyrone",
  age: 21,
  job: "Software Engineer Intern",
};

function sayHi() {
  console.log(`Hello, my name is ${this.name}`);
}

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // Hello, my name is Karina
Intern.sayHi(); // Hello, my name is Tyrone


// Getters and Setters
const person = {
  firstName: "Ada",
  lastName: "Lovelace",
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const person = {
  firstName: "Ada",
  lastName: "Lovelace",

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};
