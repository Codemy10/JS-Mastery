## Block statement 

The most basic statement is a block statement, which is used to group statements. The block is delimited by a pair of curly braces

```js 
{
  statement1;
  statement2;
  // …
  statementN;
}
```


# 🌀 JavaScript Loops



## 🔁 JavaScript `for` Loop

## 🔍 Purpose

The **`for` loop** runs a block of code **repeatedly** until a specified **condition** becomes `false`.

---

## 🧱 Syntax

```js
for (initialization; condition; afterthought) {
  // code to execute
}
```

### Parts:

* **Initialization:** Runs once before the loop starts (e.g. `let i = 0;`)
* **Condition:** Checked before each iteration (loop continues while true)
* **Afterthought:** Runs after each iteration (e.g. `i++`)

---

## ⚙️ Example

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

**Output:**

```
0
1
2
```

---

## ⚡ Notes

* All three parts are optional:

  ```js
  for (;;) { break; } // infinite loop if not stopped
  ```
* Use `{ }` to group multiple statements.
* Loop stops when the condition becomes `false`.

---

## 🧠 Summary

| Part           | Description                   |
| -------------- | ----------------------------- |
| Initialization | Runs once before loop starts  |
| Condition      | Checked before each iteration |
| Afterthought   | Runs after each iteration     |
| Body `{ }`     | Code that executes each time  |

---

Would you like me to make the **`do...while`** version in this same concise style next?


## `while` Loop

## 🔍 What It Does

A **`while` loop** in JavaScript runs a block of code **as long as** a specified **condition** is `true`.

When the condition becomes `false`, the loop **stops** automatically.

---

## 🧱 Syntax

```js
while (condition) {
  // code to run repeatedly
}
```

### Step-by-step:

1. The **condition** is checked first.
2. If it’s `true`, the code inside `{ }` runs.
3. After the code runs, the condition is checked again.
4. If still `true`, the loop repeats.
5. When the condition becomes `false`, the loop stops.

---

## ⚙️ Example

```js
let n = 0;
let x = 0;

while (n < 3) {
  n++;       // increase n by 1
  x += n;    // add n to x
}
```

### Execution Flow:

| Iteration | `n` before | `n` after `n++` | `x` after `x += n` | Condition (`n < 3`) |
| --------- | ---------- | --------------- | ------------------ | ------------------- |
| 1st       | 0          | 1               | 1                  | true                |
| 2nd       | 1          | 2               | 3                  | true                |
| 3rd       | 2          | 3               | 6                  | false → loop stops  |

---

## 🧩 Final Values

After the loop ends:

```js
n = 3;
x = 6;
```

---

## ⚠️ Note

* If the **condition never becomes false**, the loop will run **forever** — that’s called an **infinite loop**.
* To run **multiple statements**, always wrap them inside `{ }`.

---

## 🧠 Quick Summary

| Keyword     | Description                                         |
| ----------- | --------------------------------------------------- |
| `while`     | Repeats a block of code while the condition is true |
| `condition` | Expression checked before each iteration            |
| `{ }`       | Group multiple statements together                  |

---

## ✅ Example Output

```text
n = 1, x = 1
n = 2, x = 3
n = 3, x = 6
Loop stopped
```
Perfect — here’s a **concise, well-structured markdown documentation** for both `for...in` and `for...of` loops 👇

---

## 🔹 `for...in` Statement

### **Description**

The `for...in` loop iterates **over the keys (property names)** of an object or array.

### **Syntax**

```js
for (variable in object)
  statement
```

### **How It Works**

* Iterates through **enumerable properties** (keys) of an object.
* Useful for looping through object properties, **not ideal** for arrays.

### **Example**

```js
const person = { name: "Rahman", age: 20 };

for (const key in person) {
  console.log(key, person[key]);
}
```

**Output:**

```
name Rahman
age 20
```

### ⚠️ Note

* `for...in` loops include **inherited properties** from prototypes.
* Should be used **mainly for objects**, not arrays.

---

## 🔹 `for...of` Statement

### **Description**

The `for...of` loop iterates **over the values** of an iterable object (like arrays, strings, maps, or sets).

### **Syntax**

```js
for (variable of iterable)
  statement
```

### **How It Works**

* Retrieves each **value** in the iterable one by one.
* Ideal for arrays, strings, or anything iterable.

### **Example**

```js
const numbers = [10, 20, 30];

for (const num of numbers) {
  console.log(num);
}
```

**Output:**

```
10
20
30
```

### **Example with Destructuring**

```js
const obj = { a: 1, b: 2 };

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
```

**Output:**

```
a 1
b 2
```

---

## 🔸 **Difference Between `for...in` and `for...of`**

| Feature        | `for...in`                        | `for...of`                               |
| -------------- | --------------------------------- | ---------------------------------------- |
| Iterates Over  | **Keys / Property Names**         | **Values**                               |
| Works On       | Objects, Arrays                   | Arrays, Strings, Maps, Sets              |
| Ideal Use      | Looping through object properties | Looping through array or iterable values |
| Example Output | `"0", "1", "foo"`                 | `3, 5, 7`                                |

---

### ✅ **Quick Summary**

* Use **`for...in`** → when you need **keys** or **property names**.
* Use **`for...of`** → when you need **values**.

# Functions in Javascript

## 📝 JavaScript Function Parameters: Pass-by-Value

JavaScript uses **Pass-by-Value** for all function arguments. This means that when an argument is passed to a function, the function parameter receives a **copy** of that argument's value.

The distinction lies in *what* kind of value is being copied: the actual data (for primitives) or the reference/memory address (for objects).

### 1\. Primitives (Number, String, Boolean, etc.)

When a primitive is passed, the actual **value** is copied. Any reassignment inside the function only changes the copy, leaving the original variable untouched.

| Action | Code Example | Result |
| :--- | :--- | :--- |
| **Reassignment** | `num = 100;` | Original variable **is NOT changed.** |

```javascript
let count = 5;

function modifyPrimitive(num) {
  // 'num' is a COPY of 5
  num = 10; // Reassigns the COPY
}

modifyPrimitive(count);
// count is still 5
```

### 2\. Objects and Arrays (References are Copied)

When an object or array is passed, the **reference** (the memory address pointing to the object) is copied. Both the original variable and the function parameter now hold a reference to the **same object in memory**.

This leads to two crucial scenarios:

#### A. Mutation (Modifying the Object) $\rightarrow$ **Original IS Changed**

If you change a property or element *of the object* using the copied reference, you are modifying the one and only object in memory.

| Action | Code Example | Result |
| :--- | :--- | :--- |
| **Mutation** | `obj.key = 'new value';` | Original object **IS changed.** |

```javascript
let person = { name: "Alice" };

function mutateObject(obj) {
  // Both 'person' and 'obj' point to the same object
  obj.name = "Bob"; // Mutates the object in memory
}

mutateObject(person);
// person is now { name: "Bob" }
```

#### B. Reassignment (Assigning a New Object) $\rightarrow$ **Original is NOT Changed**

If you reassign the parameter to a *completely new object*, you are only changing which object the parameter's copied reference points to. The original variable still points to the old object.

| Action | Code Example | Result |
| :--- | :--- | :--- |
| **Reassignment** | `obj = { key: 'new' };` | Original variable **is NOT changed.** |

```javascript
let data = { id: 1 };

function reassignObject(obj) {
  // 'obj' now points to a completely NEW object
  obj = { id: 2 }; 
}

reassignObject(data);
// data is still { id: 1 } 
```

### Summary Rule

The MDN quote applies specifically to **reassignment**:

> **Assigning a new value to a parameter never affects the variable outside the function.**

| Data Type | Action | Original Variable Effect |
| :--- | :--- | :--- |
| **Primitive** | Reassignment | **No Change** |
| **Object** | Reassignment | **No Change** |
| **Object** | Mutation | **Change** |
---

# 🧠 JavaScript Functions 

Functions are reusable blocks of code designed to perform a single task.

---

## 🏗️ Function Declaration

```js
function square(number) {
  return number * number;
}
```

* Uses the `function` keyword.
* Has a **name**, **parameters**, and **body**.
* **Hoisted** — can be called before it’s defined.

### Example:

```js
console.log(square(5)); // 25
```

---

## 🧩 Function Expression

```js
const square = function (number) {
  return number * number;
};
```

* Function stored in a variable.
* **Not hoisted** — must be defined before use.
* Can be **anonymous** or **named**.

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
```

---

## ⚙️ Calling Functions

* Execute with parentheses `()`.
* Pass arguments matching the parameters.
* Functions can return a value using `return`.

```js
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Rahman"));
```

---

## ♻️ Function Hoisting

✅ Works:

```js
console.log(square(2));
function square(n) { return n * n; }
```

❌ Doesn’t work:

```js
console.log(square(2)); // ReferenceError
const square = function(n) { return n * n; };
```

---

## 🔁 Recursion

A function that calls itself.

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

---

## ⚡ Immediately Invoked Function Expression (IIFE)

Executes immediately after being defined.

```js
(function () {
  console.log("Runs instantly!");
})();
```

✅ Creates its own scope (avoids variable pollution).

---

## 🧱 Scope & Closures

* Functions create a **new scope**.
* Inner functions can access variables from outer scopes.
* A **closure** is when a function “remembers” variables from its outer scope even after that scope ends.

```js
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

---

## 🔒 Nested Functions (Scope Chaining)

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // 6
```

Inner functions can access all parent scopes.

---

## ⚔️ Name Conflicts (Precedence)

Inner scope variables override outer ones.

```js
function outer() {
  const x = 5;
  function inner(x) {
    return x * 2;
  }
  return inner(10); // 20
}
```

---

## 🧮 The `arguments` Object

Array-like object holding all passed arguments.

```js
function myConcat(separator) {
  let result = "";
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

console.log(myConcat(", ", "red", "blue")); // red, blue,
```

---

## 🎯 Function Parameters

### Default Parameters

```js
function multiply(a, b = 1) {
  return a * b;
}
multiply(5); // 5
```

### Rest Parameters

```js
function multiply(multiplier, ...numbers) {
  return numbers.map(n => n * multiplier);
}
console.log(multiply(2, 1, 2, 3)); // [2,4,6]
```

---

## ⚡ Arrow Functions

Shorter syntax and no own `this` binding.

```js
const add = (a, b) => a + b;
```

### Example:

```js
function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++; // refers to Person instance
  }, 1000);
}
```

---

## 📘 Summary Table

| Concept              | Keyword                | Hoisted | Has `this` | Typical Use                |
| -------------------- | ---------------------- | ------- | ---------- | -------------------------- |
| Function Declaration | `function name()`      | ✅       | ✅          | General purpose            |
| Function Expression  | `const f = function()` | ❌       | ✅          | Dynamic or callbacks       |
| Arrow Function       | `() => {}`             | ❌       | ❌          | Short functions, callbacks |
| IIFE                 | `(function(){})()`     | ❌       | Depends    | Init logic, privacy        |
| Closure              | N/A                    | ✅       | ✅          | Encapsulation, memory      |


---
# ⚙️ JavaScript Operators — Concise, Complete Reference

> For each operator: **what it does**, **short example**, and **important notes/gotchas**.

---

## 1) Assignment Operators

Assign values to variables or properties.

```js
x = 5;
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
```

**Notes**

* `x &&= v` → if `x` truthy then `x = v`.
* `x ||= v` → if `x` falsy then `x = v`.
* `x ??= v` → if `x` is `null` or `undefined` then `x = v`.
* Assignment expressions return the assigned value — you can chain: `a = b = 2` (right-associative). **Avoid complex chains** (surprising side-effects, scope issues with `const/let`).

---

## 2) Property Assignment

Assigning to object properties:

```js
const obj = {};
obj.x = 3;
obj['y'] = 5;
```

**Notes**

* If the base is a primitive (`0`, `null`, `undefined`) assigning to `.prop` does nothing (or throws in strict mode for `null/undefined`).
* Cannot assign to non-writable properties; will throw in strict mode.

---

## 3) Destructuring Assignment

Extract values from arrays/objects concisely.

```js
const [a, b] = [1, 2];
const {name, age} = {name: 'A', age: 20};
const [first, ...rest] = [1,2,3];
```

**Notes**

* Useful default values: `function f(a=1) {}` or `{x = 0}` in destructuring.
* Can be nested and combined.

---

## 4) Comparison Operators

Compare values.

```js
==  // loose equality (coerces)
=== // strict equality (no coercion)
!=  // loose inequality
!== // strict inequality
> >= < <= // numeric/string comparisons
```

**Examples**

```js
3 == '3'   // true
3 === '3'  // false
'2' < 12   // true (coerced to number)
```

**Notes**

* Prefer `===` / `!==` to avoid coercion surprises.
* For object sameness, `Object.is()` has special semantics (NaN, -0).

---

## 5) Arithmetic Operators

Basic math and increments.

```js
+ - * / % **   // exponentiation **
++x  // prefix increment (returns new value)
x++  // postfix increment (returns old value)
--x, x--
+x   // unary plus converts to number
-x   // unary negation
```

**Notes**

* `x++` returns the original value then increments. Use consciously.
* Division by zero → `Infinity` (for Number).

---

## 6) Bitwise Operators

Operate on 32-bit integer bit patterns.

```js
&  |  ^  ~   // AND, OR, XOR, NOT
<< >> >>>    // shifts: left, sign-right, zero-fill-right
```

**Example**

```js
9 & 15 // 9
15 ^ 9 // 6
~9     // -10 (two's complement)
```

**Notes**

* JavaScript converts operands to 32-bit signed integers for bitwise ops.
* `>>>` not available for `BigInt`.

---

## 7) Bitwise Assignment

Compound forms like `x &= y`, `x |= y`, etc. (behave like assignment using the operator then assign back).

---

## 8) Logical Operators (Value selection + short-circuit)

Not just booleans — often used to select values.

```js
&&   // returns left if falsy, else right
||   // returns left if truthy, else right
!    // logical NOT -> boolean
??   // nullish coalescing: returns left if not null/undefined, else right
```

**Examples**

```js
0 && 'a'   // 0
'Cat' && 'Dog' // 'Dog'
false || 'hi' // 'hi'
null ?? 'default' // 'default'
0 ?? 5 // 0  (unlike || which would return 5)
```

**Notes**

* Short-circuit: right-hand is not evaluated if left-hand decides result.
* Use `??` when `0` or `''` are valid values and you want to treat only `null/undefined` as missing.

---

## 9) Unary Operators (delete, typeof, void)

Single operand utilities.

```js
delete obj.prop;         // removes property; returns true/false
typeof x;                // returns type as string: 'number', 'string', 'object', 'function', 'undefined'
void expression;         // evaluates expression, returns undefined
```

**Notes**

* `delete` on non-configurable property -> returns false (or throws in strict scenarios).
* `typeof null` returns `'object'` (historical quirk).
* `void 0` is a classic way to get `undefined`.

---

## 10) Relational Operators (in, instanceof)

Test properties / inheritance.

```js
'length' in []    // true
0 in ['a']        // true (index exists)
obj instanceof Array // true if obj created by Array or inherits from it
```

**Notes**

* `in` checks property presence (including prototype chain).
* `instanceof` checks prototype chain against constructor.prototype.

---

## 11) String Operators

Concatenation with `+` and `+=`:

```js
'hello' + ' ' + 'you'  // 'hello you'
let s = 'a'; s += 'b'  // 'ab'
```

**Notes**

* `+` with numbers and strings coerces (watch `'2' + 3`).

---

## 12) Conditional / Ternary Operator

Short if/else as expression:

```js
condition ? val1 : val2
const status = age >= 18 ? 'adult' : 'minor';
```

---

## 13) Comma Operator

Evaluate expressions left-to-right, return last value. Rarely used.

```js
let x = (1, 2, 3); // x = 3
for (let i=0, j=10; i<j; i++, j--) {}
```

**Notes**

* Use only when you really need multiple expressions in contexts that accept one expression (like `for`).

---

## 14) Short-circuit Evaluation (behavior)

Logical expressions evaluate left→right and stop as soon as result determined:

* `falsy && anything` → returns falsy (right not evaluated)
* `truthy || anything` → returns truthy (right not evaluated)
* `nonNullish ?? anything` → returns left (right not evaluated)

**Use**: conditional execution without `if`, default value selection, guarded property access.

---

## 15) BigInt Operators (special cases)

BigInt supports most arithmetic and bitwise ops, but:

* No mixing with Number (`1n + 2` → TypeError). Convert explicitly.
* No unsigned right shift (`>>>`) for BigInt.
* Use `BigInt()` or `Number()` to convert.

```js
1n + 2n  // 3n
1n / 2n  // 0n
```

---

## 16) Optional Chaining

Safe access for nested props that may be `null/undefined`.

```js
const v = obj?.prop;
const fnResult = maybeFn?.();
const deep = obj?.a?.b?.c;
```

**Notes**

* Stops early and returns `undefined` if any link is `null/undefined`. Prevents `TypeError`.

---

## 17) Grouping Operator

Parentheses control precedence:

```js
(a + b) * c
```

**Notes**

* Use to make evaluation order explicit.

---

## 18) Property Accessors

Two forms:

```js
obj.prop
obj['prop']
```

**Notes**

* Bracket form allows dynamic keys or keys with special characters.

---

## 19) `this`, `super`, `new`

* `this` refers to the calling context (varies with call type; arrow functions inherit from outer scope).
* `super` used in classes to call parent constructors/methods.
* `new` creates instances from constructors: `new C()`.

---

## 20) Pitfalls & Best Practices (must-know)

* Prefer `===` / `!==` over `==` / `!=`.
* Avoid complex assignment chains — they’re hard to read and can create globals if used with `var` incorrectly.
* Beware `typeof null === 'object'` — special case.
* Prefer `??` for safe defaulting when `0`/`''` are valid values.
* Use optional chaining (`?.`) to safely access deep properties.
* Use arrow functions when you want lexical `this`.
* Don’t mix `BigInt` and `Number` without explicit conversion.
* Be careful with `delete` on arrays — it leaves holes (use `splice` to remove entries properly).
* `for...in` iterates keys (incl. prototype); `for...of` iterates values (for iterables).

---

## 21) Quick Reference Examples (copy-paste)

```js
// assignment & destructuring
let a = 1;
a += 2;           // 3
const [x,y] = [1,2];

// comparison
3 === '3' // false

// logical
const v = null ?? 'def'; // 'def'
const left = 0 || 'fallback'; // 'fallback'

// ternary
const ok = true ? 'yes' : 'no'; // 'yes'

// optional chaining
const val = obj?.deep?.value;

// typeof
typeof 42;     // 'number'
typeof null;   // 'object' (quirk)

// delete
const o = {a:1}; delete o.a; // true

// BigInt
const big = 1000000000000n + 2n;

// comma in for
for (let i=0, j=3; i<j; i++, j--) { /* ... */ }
```


