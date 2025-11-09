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

---

# 📘 **JavaScript Regular Expressions — Full Developer Documentation**

> **Regular Expressions (RegExp)** are patterns used to match character combinations in strings.
> In JavaScript, regex are also **objects**, used with methods from both `RegExp` and `String`.

---

## 🧱 **1. Creating Regular Expressions**

You can create a regular expression in **two ways:**

### **1.1 Using a Regex Literal**

```js
const re = /ab+c/;
```

* Compiled when the script is loaded.
* Best for **constant expressions** (improves performance).

### **1.2 Using the RegExp Constructor**

```js
const re = new RegExp("ab+c");
```

* Compiled at **runtime**.
* Use when:

  * The pattern **changes dynamically**, or
  * The pattern comes from **user input** or another variable.

---

## ✍️ **2. Writing a Regular Expression Pattern**

A pattern is made up of **simple** and **special** characters.

### **2.1 Simple Patterns**

Match literal characters:

```js
/abc/
```

* Matches “abc” in `"know your abc's"` ✅
* Doesn’t match `"Grab crab"` ❌

### **2.2 Special Characters**

Used for flexible or complex matching.

Example:

```js
/ab*c/
```

* `*` → zero or more occurrences
* Matches `"ac"`, `"abc"`, `"abbc"`, `"abbbc"`, etc.

---

## 🧠 **3. Categories of Special Characters**

| Category                    | Description                      | Examples                                 |
| --------------------------- | -------------------------------- | ---------------------------------------- |
| **Character Classes**       | Distinguish types of characters  | `[xyz]`, `[^xyz]`, `.`, `\d`, `\w`, `\s` |
| **Assertions**              | Define boundaries or lookarounds | `^`, `$`, `\b`, `x(?=y)`, `(?<=y)x`      |
| **Groups & Backreferences** | Capture and reuse submatches     | `(x)`, `(?:x)`, `\1`, `\k<Name>`         |
| **Quantifiers**             | Define repetition                | `x*`, `x+`, `x?`, `x{n,m}`               |

---

## ⚙️ **4. Escaping Special Characters**

If you need to match a **special character literally**, use a **backslash `\`** before it.

Example:

```js
/a\*b/
```

Matches the text `"a*b"` (not "abbb").

Alternative using a character class:

```js
/a[*]b/
```

### Escaping Slashes

To match `/example/`, escape both slashes:

```js
/\/example\/[a-z]+/i
```

### Matching a Backslash

To match `"C:\"`, use:

```js
/[A-Z]:\\/
```

> ⚠️ **Note:** In string-based regex via the constructor, escape backslashes **twice**:

```js
new RegExp("a\\*b"); // same as /a\*b/
```

---

## 🧩 **5. Using Parentheses — Grouping**

Parentheses **group parts of a pattern** and **capture** matched substrings for reuse.

Example:

```js
/(Chapter) (\d+)/
```

Captures `"Chapter"` and the number separately.

Use **non-capturing groups** to group without storing:

```js
(?:abc)
```

See *Groups and Backreferences* for more advanced usage.

---

## 🚀 **6. Using Regular Expressions in JavaScript**

Regex interacts with both `RegExp` and `String` methods.

### **6.1 RegExp Methods**

| Method   | Description       | Returns         |
| -------- | ----------------- | --------------- |
| `exec()` | Executes a search | Array or `null` |
| `test()` | Tests for a match | Boolean         |

### **6.2 String Methods**

| Method         | Description                    |
| -------------- | ------------------------------ |
| `match()`      | Returns matches (array)        |
| `matchAll()`   | Returns iterator of matches    |
| `search()`     | Returns index of first match   |
| `replace()`    | Replaces first match           |
| `replaceAll()` | Replaces all matches           |
| `split()`      | Splits a string based on regex |

---

## 🧮 **7. Choosing the Right Method**

| Goal                    | Recommended Method             |
| ----------------------- | ------------------------------ |
| Just check if it exists | `.test()` or `.search()`       |
| Get match details       | `.exec()` or `.match()`        |
| Get all matches         | `.matchAll()`                  |
| Replace text            | `.replace()` / `.replaceAll()` |
| Split text              | `.split()`                     |

---

## 🧰 **8. Example — Using `exec()`**

```js
const myRe = /d(b+)d/g;
const result = myRe.exec("cdbbdbsbz");

console.log(result);
// ['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']
```

### Result Properties

| Property         | Description                  | Example       |
| ---------------- | ---------------------------- | ------------- |
| `[0]`            | Full match                   | `'dbbd'`      |
| `[1+]`           | Captured groups              | `'bb'`        |
| `index`          | Position of match            | `1`           |
| `input`          | Original string              | `'cdbbdbsbz'` |
| `myRe.lastIndex` | Next search index (for `/g`) | `5`           |
| `myRe.source`    | Pattern text                 | `'d(b+)d'`    |

---

## 🧩 **9. Important Note: Regex Object Reuse**

Each regex literal creates a **new RegExp object**.

```js
const re1 = /d(b+)d/g;
const re2 = /d(b+)d/g;

re1 === re2; // false
```

If you need to reuse properties like `lastIndex`, assign it to a variable.

---

## 🏳️ **10. Advanced Searching — Regex Flags**

Flags control **how** regex behaves.

| Flag | Description                       | RegExp Property |
| ---- | --------------------------------- | --------------- |
| `d`  | Capture indices of matches        | `hasIndices`    |
| `g`  | Global search                     | `global`        |
| `i`  | Case-insensitive                  | `ignoreCase`    |
| `m`  | Multiline mode                    | `multiline`     |
| `s`  | Dot matches newlines              | `dotAll`        |
| `u`  | Unicode mode                      | `unicode`       |
| `v`  | Enhanced Unicode (ES2024+)        | `unicodeSets`   |
| `y`  | Sticky match (from current index) | `sticky`        |

### Example

```js
const re = /\w+\s/g;
const str = "fee fi fo fum";
console.log(str.match(re)); // ["fee ", "fi ", "fo "]
```

Equivalent constructor form:

```js
new RegExp("\\w+\\s", "g");
```

---

## 🧮 **11. Global Search with `exec()`**

When using `/g`, `exec()` returns matches **iteratively**:

```js
const re = /\w+\s/g;
const str = "fee fi fo fum";

console.log(re.exec(str)); // fee 
console.log(re.exec(str)); // fi 
console.log(re.exec(str)); // fo 
console.log(re.exec(str)); // null
```

While `match()` returns all matches at once:

```js
str.match(re); // ["fee ", "fi ", "fo "]
```

---

## 🌍 **12. Unicode Regular Expressions**

Use the `u` flag for Unicode-safe matching.

```js
/\p{L}*/u; // Matches any sequence of Unicode letters
```

Unicode mode enables property escapes (`\p{...}`).

---

## 📱 **13. Example — Input Validation (Phone Number)**

Validates U.S.-style phone numbers like `###-###-####`.

```js
const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

const input = document.querySelector("#phone");
const output = document.querySelector("#output");

function checkNumber() {
  const ok = re.exec(input.value);
  output.textContent = ok
    ? `Thanks, your phone number is ${ok[0]}`
    : `${input.value} isn't valid!`;
}
```

---

## 🧭 **14. Helpful Online Tools**

| Tool                                                               | Description                  |
| ------------------------------------------------------------------ | ---------------------------- |
| [RegExr](https://regexr.com)                                       | Learn, test, and debug regex |
| [Regex101](https://regex101.com)                                   | Explains each token          |
| [Regex Tester](https://extendsclass.com/regex-tester.html)         | Fast web regex testing       |
| [Regex Visualizer](https://extendsclass.com/regex-visualizer.html) | Graphical regex explorer     |

---

## 📘 **15. Summary Reference Table**

| Category              | Constructs                               | Description                      |
| --------------------- | ---------------------------------------- | -------------------------------- |
| **Character Classes** | `[xyz]`, `[^xyz]`, `.`, `\d`, `\w`, `\s` | Match specific character types   |
| **Assertions**        | `^`, `$`, `\b`, `x(?=y)`, `(?<=y)x`      | Anchors and lookarounds          |
| **Groups & Backrefs** | `(x)`, `(?:x)`, `\1`, `\k<Name>`         | Capture, name, and reuse matches |
| **Quantifiers**       | `x*`, `x+`, `x?`, `x{n,m}`               | Control repetition               |
| **Escaping**          | `\`, `[ ]`                               | Match literal special characters |
| **Flags**             | `g`, `i`, `m`, `s`, `u`, `y`, `v`        | Modify match behavior            |

---

## ✅ **16. Key Takeaways**

* Regex are **powerful tools** for pattern matching and text processing.
* Use **literals** for static patterns, **constructors** for dynamic ones.
* Learn the **4 core categories:** Character Classes, Assertions, Groups, and Quantifiers.
* Use **tools** (like RegExr) to practice visually.
* Remember to **escape** special characters carefully.

---
---

## 🧠 What Is a `WeakMap`?

A **`WeakMap`** is like a `Map`, but with a special rule:

> Its **keys must be objects (or non-registered symbols)**, and it holds them *weakly* — meaning if nothing else references that object, it’s automatically removed from memory.

So the “weak” part means:

* The key doesn’t *prevent garbage collection*.
* You can’t loop over it or check its size.
* You can only `set`, `get`, `has`, and `delete`.

---

## 🧩 Basic Example

```js
let user = { name: "Alice" };
const userData = new WeakMap();

userData.set(user, { balance: 500 });

console.log(userData.get(user)); // { balance: 500 }

user = null; // remove reference to the object
// After garbage collection, the key and value are gone too!
```

✅ If you used a `Map`, that `{ name: "Alice" }` key would stay in memory **forever** — even if the object was deleted elsewhere.
✅ `WeakMap` avoids that → no memory leaks!

---

## ⚙️ WeakMap API (same as Map, but limited)

| Method             | Description         |
| ------------------ | ------------------- |
| `.set(key, value)` | Add an entry        |
| `.get(key)`        | Retrieve value      |
| `.has(key)`        | Check if key exists |
| `.delete(key)`     | Remove an entry     |

❌ No `.size`, `.keys()`, `.values()`, or iteration methods — because if the garbage collector suddenly removes an object, you can’t guarantee stable results.

---

## 🧩 Example: Private Data for Objects

This is one of the main *real-world* uses of `WeakMap`:
→ Storing **private data** inside modules or classes that can’t be accessed from the outside.

```js
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
```

Here:

* `_privates` is a `WeakMap` that stores private info.
* Nobody outside can access `_privates` because it’s not exported.
* When `alice` is deleted, her data in `_privates` also disappears.
* No manual cleanup required → automatic memory management!

---

## 💡 Why WeakMap Exists (in simple terms)

| Problem                                                      | Solution                      |
| ------------------------------------------------------------ | ----------------------------- |
| You attach extra data to objects but risk memory leaks       | WeakMap holds objects weakly  |
| You want “private fields” (before `#private` syntax existed) | WeakMap hides data perfectly  |
| You don’t want to expose internal state in your API          | WeakMap keeps it inaccessible |

---

## ⚠️ WeakMap Limitations

* Keys **must** be objects (or non-registered symbols)
* No iteration, no `.size`
* No way to clear all entries
* It’s mostly used internally or in framework-level code (like React, libraries, or DOM caches)

---

## 🧩 Quick Visualization

```
Memory Heap
 ├─ user = { name: "Alice" } ─────────────┐
 │                                        │
 │  WeakMap                              ▼
 │  ┌──────────────────────────────┐
 │  │ { user } → { balance: 500 } │
 │  └──────────────────────────────┘
 │
 └─ user = null   ← reference gone → GC cleans up entry
```

---


## 🧠 What Is a `Set`?

A **`Set`** is a built-in object in JavaScript that lets you store **unique values** — no duplicates allowed.

Think of it as a **mathematical set** (like in algebra):

> `{1, 2, 3}` means you can’t have two 2’s.

---

## 🧩 Key Features

| Feature                       | Description                                                  |
| ----------------------------- | ------------------------------------------------------------ |
| **Stores unique values**      | No duplicates — even if you try to add the same item twice.  |
| **Any value type**            | You can store strings, numbers, objects, or even other sets. |
| **Insertion order preserved** | Values appear in the order they were added.                  |
| **Iterable**                  | You can loop through it using `for...of` or `forEach`.       |

---

## ⚙️ Creating and Using a Set

### 🧩 Example:

```js
const coins = new Set();

coins.add('BTC');
coins.add('ETH');
coins.add('SOL');
coins.add('BTC'); // duplicate - ignored

console.log(coins);        // Set(3) { 'BTC', 'ETH', 'SOL' }
console.log(coins.size);   // 3
console.log(coins.has('ETH')); // true

coins.delete('SOL');
console.log(coins);        // Set(2) { 'BTC', 'ETH' }

coins.clear();             // removes all items
console.log(coins.size);   // 0
```

---

## 🧩 Iterating Over a Set

You can loop through a Set in several ways:

```js
const markets = new Set(['Binance', 'Coinbase', 'Kraken']);

for (const exchange of markets) {
  console.log(exchange);
}

markets.forEach(exchange => console.log(exchange));
```

✅ Note: the iteration order is the **insertion order** — just like a `Map`.

---

## 💡 Common Use Cases

### 1️⃣ **Removing Duplicates from Arrays**

```js
const prices = [100, 200, 100, 300, 200];
const uniquePrices = [...new Set(prices)];

console.log(uniquePrices); // [100, 200, 300]
```

### 2️⃣ **Checking Membership**

You can quickly check if an item exists — it’s faster than using `indexOf()` for large lists.

```js
const watchedCoins = new Set(['BTC', 'ETH']);
console.log(watchedCoins.has('ETH')); // true
```

### 3️⃣ **Set Operations**

We can use Sets for union, intersection, and difference — like in math.

#### Union

```js
const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);
const union = new Set([...a, ...b]);
console.log(union); // Set(5) {1, 2, 3, 4, 5}
```

#### Intersection

```js
const intersection = new Set([...a].filter(x => b.has(x)));
console.log(intersection); // Set(1) {3}
```

#### Difference

```js
const difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference); // Set(2) {1, 2}
```

---

## 📈 Analogy (Finance / Real-World)

Imagine you’re tracking **unique stock tickers** that a trader has viewed.

Without a Set:

```js
const tickers = ['AAPL', 'TSLA', 'AAPL', 'GOOG'];
```

You’d have duplicates — messy.

With a Set:

```js
const uniqueTickers = new Set(['AAPL', 'TSLA', 'AAPL', 'GOOG']);
console.log(uniqueTickers); // Set(3) { 'AAPL', 'TSLA', 'GOOG' }
```

✅ Cleaner, faster, unique.

---

## 🧠 Quick Summary

| Method           | Description         |
| ---------------- | ------------------- |
| `.add(value)`    | Add a value         |
| `.delete(value)` | Remove a value      |
| `.has(value)`    | Check if exists     |
| `.clear()`       | Remove all values   |
| `.size`          | Number of items     |
| `.forEach()`     | Loop through values |

---

## ⚡ Pro Tip

Because Sets only store **unique** values, they’re perfect when you care about **existence**, not frequency.

If you need to count or map relationships (key → value), use a **Map**.
If you only care about unique existence (is this coin tracked? is this stock watched?), use a **Set**.

---
---