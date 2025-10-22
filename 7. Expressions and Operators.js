// The precedence of operators determines the order they are applied when evaluating an expression

const a = 1 + 2 * 3;
const b = 1 * 2 + 3;

console.log(`x is ${a}`,`y is ${b}`)


// Assignment operators

// Used to assing values to an operand 

/**x = 5;
x += 2;   // x = x + 2
x -= 1;   // x = x - 1
x *= 3;   // x = x * 3
x /= 2;   // x = x / 2
x %= 4;   // x = x % 4
x **= 2;  // x = x ** 2
x <<= 1;  // left shift
x >>= 1;  // sign-propagating right shift
x >>>= 1; // unsigned right shift
x &= y; x ^= y; x |= y; // bitwise compound
x &&= v; x ||= v; x ??= v; // logical compound
**/


const obj = {};

obj.x = "NAla"

console.log(obj)

// 


function f() {
    return "WOW";
}

let x;

const y = x = f();

console.log(y)


// Comparison Operator
==  // loose equality (coerces)
=== // strict equality (no coercion)
!=  // loose inequality
!== // strict inequality
> >= < <= // numeric/string comparisons


// Arithmetic Operators

+ - * / % **   // exponentiation **
++x  // prefix increment (returns new value)
x++  // postfix increment (returns old value)
--x, x--
+x   // unary plus converts to number
-x   // unary negation


// Unary operators

delete obj.x;
console.log(obj)

typeof(obj) // Object

