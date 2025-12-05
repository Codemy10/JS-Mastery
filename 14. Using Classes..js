class Products{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    importer = "J and K ltd"; // Instance Field

    displayProduct(){ //Instance methods
        console.log(`Name : ${this.name}`)
        console.log(`Price : $${this.price.toFixed(2)} 
        imported by ${this.importer}`)
    }

    priceAfterTax(vat){
        return this.price + (this.price * vat)
    }

    #RedeemCoupon = "BlackFriday" //Private field cannot be accessed outside the class.
}

const vat = 0.05;

const product1 = new Products("Sweatshirt", 35);
const product2 = new Products("Pants", 15.50);

product2.displayProduct()



console.log(product2.priceAfterTax(vat))


// @instance method 

// class can have names as well

const Colors = class {
    constructor(r,g,b){
        this.value = [r,g,b]
    }
}

const blue = new Colors(255,0,0);

console.log(blue)



class MyClass {
    constructor(){
        this.field = "Okay";
        return {};
    }
}

const Afield = new MyClass().field

console.log(Afield)


// Private fields 

class Color {
  // Declare: every Color instance has a private field called #values.
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    this.#values[0] = value;
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255

// Accessor fields

class Crypto{
    #quantityHeld
    constructor(name,price,quantity){
        this.name = name;
        this.price = price;
        this.#quantityHeld = quantity;
    }

    get crypto(){
        return `${this.name} is currently at ${this.price}`
    }

    set crypts(newPrice){
        this.price = newPrice;
    }

}

const crypto1 = new Crypto("btc", 100000, 10)

crypto1.crypto = 120000
console.log(crypto1.crypto)


// Public Fields 

class newClass {
    luckyNumber = Math.random();
}

console.log(new newClass().luckyNumber.toFixed(2));
console.log(new newClass().luckyNumber.toFixed(3));


// Equivalent to using  a constructor

class anotherNewClass {
    constructor(){
        this.luckyNumber = Math.random();
    }
}

console.log(new anotherNewClass().luckyNumber)


// Static properties

class newColor {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
  static {
    newColor.myStaticProperty = "foo";
  }
}

console.log(newColor.isValid(255, 0, 0)) // true
newColor.isValid(1000, 0, 0); // false

// Static properties are similar to instances except that 
// they are prefixed with static and they are not accessible from instances 

console.log(new newColor().isValid)   // THis will be undefined 



// Extend and Inheritance 


class parentClass {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    static {
        parentClass.value = "fyp";
    }

    static isVoid(){

    }
    simpleMethod(){
        return `${this.a}`
    }
}


class childClass extends parentClass{
    constructor(a,b,c,d){
        super(a,b,c);
        this.d = d;
    }

    simpleMethod(){
        return `${super.simpleMethod().toUpperCase()}`
    }

}

const tester = new childClass("Ola","","","Bola")

console.log(tester.simpleMethod())