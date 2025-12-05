class Products{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    importer = "J and K ltd"; // Instance Field

    displayProduct(){ //Instance methods
        console.log(`Name : ${this.name}`)
        console.log(`Price : $${this.price.toFixed(2)} imported by ${this.importer}`)
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
        return `${this.name} is currntly at ${this.price}`
    }

    set crypto(newprice){
        this.price = newprice;
    }

}

const crypto1 = new Crypto("btc", 100000, 10)

crypto1.crypto = 120000
console.log(crypto1.crypto)

