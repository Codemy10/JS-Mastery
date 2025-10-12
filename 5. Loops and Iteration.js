// LOOPS AND ITERATION

// FOR LOOP

{for (let x = 0;x < 5 ;x++ ){ // whenever the conditions is omitted it becomes an infinite loop
    console.log(x)
}}

//Do..WHILE LOOP

{let i = 0;
labelofkj:do {
  i += 1;
  console.log(i);
} while (i < 5);
}

// label break and continue statement 

{
  let a = [1,2,3,4,5,6,7]

find5:for(let x = 0; x < a.length ; x++ ){
  if(a[x] === 5){
    console.log(a[x])
    break find5;
  }
}

}

let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

// For...In Statement 

const car ={
  make: "ford",
  model: "K15",
  year: 2024
}

for (const i in car){
  console.log(`${i}:${car[i]}`)
}


// For .... of Statement

const arr = [1,2,3,4,5,6,7]

for (const i of arr ){
  console.log(i)
}

//Looping through objects with destructuring

const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2