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

