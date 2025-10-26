let num1 = 0o66  // Octal number 
let num2 = 0x88_4443_532  //xDecimal number notice the number seperator
let num3 = 0b10000000000000000000000000000000 // 2147483648  Binary
let num5 = 123456 // decimal number
let num4 = "\x45"


console.log(num1,num2,num3,num4)


//  the built in number object
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;


console.log(biggestNum)
console.log(smallestNum)
console.log(infiniteNum)
console.log(negInfiniteNum)
console.log(notANum)

// Mathc Objects - The built-in Math object has properties and methods for mathematical constants and functions
// Math functions
console.log(Math.PI)

console.log(Math.sin(1.56))

console.log(Math.round(biggestNum))


// Due the encdding of JS using the IEEE the cant represent numbers larger them biggestnum
// So it offers another datatype known as BigInt

// A BigInt can be defined as an integer literal suffixed by n

const bigint1 = 123n

// can be arbitrarily large
const bigint2 = -1234567235667223567234566n

console.log(bigint1)
console.log(bigint2)

// can be constructed from number values using thr BigInt contructor

const b1 = BigInt(123);
// Using a string prevents loss of precision, since long number
// literals don't represent what they seem like.
const b2 = BigInt("-1234567890987654321");

// use case

const bigintmult = 12n ** 34n

console.log(bigintmult)


// String

// You can declare string in ether single qoutes or double quotes

let str1 = 'boo'
let str2 = "foo"

// escape sequences

const copyright = "\xA9" // xdecimal
const copyright2 = "\u00A9" //Unicode

console.log(copyright)

// String Objects

console.log("Hello".toUpperCase())


// Template literals
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"



const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
