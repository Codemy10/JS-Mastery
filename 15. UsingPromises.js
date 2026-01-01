// Getting started with promises

// Chaining

function doTask(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Did Task")

            resolve("https://google.com/")
        },200)
    });
};

console.log(doTask())


doSomething()
    .then(function(result){
        return doSomethingElse(result);
    })
    .then(function (newResult){
        return doAnotherThing(newResult)
    }).catch();

    function tryingCallbacks(param, callback) {
        
    }

// Expressed in arrow functions 

doSomething()
    .then((result)=>doSomethingElse(result))
    .then((newResult)=> doAnotherThing(newResult))
    .then()




// Callback Function

// function createQuote(quote , callback){
//     let myQuote = `Like i always say: ${quote}`

//     return callback(myQuote);
// }

// function callQuote(quote){
//     return quote;
// }

// console.log(createQuote("Nothing is as good and nothing is as bad",callQuote));

