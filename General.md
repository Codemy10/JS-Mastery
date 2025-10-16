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
