// Quadratic equation
function quadraticFunction(a,b,c) {
   let step_1 = (-b);
   let step_2 = (b * b) - (4 * a *c) ;
   let step_3 = Math.sqrt(step_2);
   let step_4 = 2 * a ;
   let ans1 = (step_1 + step_3)/step_4;
   let ans2 = (step_1 - step_3)/step_4;

   if(a == 0 && b == 0 && c == 0 ){
      return "Please insert correct input !"
   }
   else if(step_2 < 0){
      step_2 *= -1;
      let step_3 = Math.sqrt(step_2);
      let ans1 = (step_1 + -step_3)/step_4;
      let ans2 = (step_1 - -step_3)/step_4;

      return "The roots are " + ans1 + ", " + ans2;
   }
   else if( a === "" || b === "" || c ===""){
      return "Oops! Please make sure you inputed all the figures"
   }
   else{
      return "The roots are " + ans1 + ", " + ans2;
   }  
}
console.log(quadraticFunction(888,2,""))


function myFunction(num){
    return parseInt(num)
}
console.log("100111");

