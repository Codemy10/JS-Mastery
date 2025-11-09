const price = new Map();

price.set("BTC", 73009);
price.set("ETH", 1000);
price.set("Pume", "Dumped")

for (const [key,value] of price){
    console.log(`the price of ${key} today is ${value}`);
}

// price.clear() // clears out all the items of the map
console.log(price.size)

console.log(price.get("BTC")) ;
console.log(price.get("DOge"))  //Doge hasnt beign set

console.log(price.has("DOge")); // See the way we dont have dOges as we havemt set it yet

price.delete("Pume")

console.log(price.keys())
for (const [key,value] of price){
    console.log(`the price of ${key} today is ${value}`);
}

const obj = {
    "TOla": 23,
    "Goseph": 34,
    "lola":10
}

for (const [key,value] in obj){
    console.log(`${key} and ${value}`)
}

//  WEAKMAPS 

const user = {name : "TOlu"};

const tempdata = new WeakMap();

tempdata.set(user, "Other data")

console.log(tempdata.get(user))

// user = null;

console.log(tempdata.get(user))


// 
const _privates = new WeakMap();

export default class Trader {
  constructor(name, balance) {
    _privates.set(this, { name, balance });
  }

  deposit(amount) {
    const data = _privates.get(this);
    data.balance += amount;
    console.log(`${data.name} deposited $${amount}. New balance: $${data.balance}`);
  }
}

const alice = new Trader("Alice", 1000);
alice.deposit(200); // Alice deposited $200. New balance: $1200
alice.deposit(3900)


// Set Object 

const coins = new Set();

coins.add("PLUME")
coins.add("ETH")
coins.add("BTC")
coins.add("BRB")

coins.has(2); //False

// All other similar API to that of maps can be used

// Iterating Iver a set


for (const item of coins){
    console.log(`${item}`)
}


// COnverting between arr and set

// Array.from(coins);
// // [...tabprice];

// tabprice = new Set([1,2]);

// // console.log(tabprice)


// Removing duplicates from array
const prices = [100, 200, 100, 300, 200];
const uniquePrices = [...new Set(prices)];

console.log(uniquePrices); // [100, 200, 300]
