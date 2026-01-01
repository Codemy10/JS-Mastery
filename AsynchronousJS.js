//  Synchronous code
function fun1(){
    console.log("Started task 1....")

    let start = Date.now();
    let delay = 5000;
    let end = start + delay;

    while (Date.now() <= end){

    };

    console.log("completed doing this task")
}

function fun2(){
    console.log("Started task 2....")

    let start = Date.now();
    let delay = 1000;
    let end = start + delay;

    while (Date.now() <= end){

    };

    console.log("completed doing task 2")
}

function fun3(){
    console.log("Started task 3....")

    let start = Date.now();
    let delay = 3000;
    let end = start + delay;

    while (Date.now() <= end){

    };

    console.log("completed doing task 3")
}

function fun4(){
    console.log("Started task 4....")

    let start = Date.now();
    let delay = 1000;
    let end = start + delay;

    while (Date.now() <= end){

    };

    console.log("completed doing task 4")
}


// fun1();
// fun2();
// fun3();
// fun4();



// Asynchronous code

function func1(){
    console.log("Started task 1....")

    let start = Date.now();
    let delay = 5000;
    let end = start + delay;

    while (Date.now() <= end){

    };

    console.log("completed doing this task")
}

function func2(){
    console.log("Started task 2....")

    let start = Date.now();
    let delay = 1000;
    let end = start + delay;

    while (Date.now() <= end){

    };

    console.log("completed doing task 2")
}

function func3(){
    console.log("Started task 3....")

    let start = Date.now();
    let delay = 3000;
    let end = start + delay;

    while (Date.now() <= end){

    };

    console.log("completed doing task 3")
}

function func4(){
    console.log("Started task 4....")

    let start = Date.now();
    let delay = 1000;
    let end = start + delay;

    while (Date.now() <= end){

    };

    console.log("completed doing task 4")
}


// SetTimeOut

// setTimeout(func1,3000);
// func2();
// setTimeout(func3,2000);
// func4();


// SetInterval

function fetcher() {
    console.log("fetching.........")
}

const fetchID = setInterval(fetcher, 2000);

setTimeout(()=> clearInterval(fetchID), 11000);


// Promises

let prm = new Promise((resolve, reject)=>{

    console.log("Did task")

    reject("This was a success")
});

prm.then((result )=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})