//functions

// function func(a,b){
//      var c=a+b;
//      console.log(c);
// }
// func(4,5);

// function greet(name){
//     console.log(`hello,my name is  ${name},and i'm revesiving the js concepts`);
// }
// greet("princi");

//anonymous function

// let func=function(a,b){
//    console.log(a+b);
// }
// func(3,4);

//IIFE

// var result=(function (a,b){
//     console.log(a+b);
//     return a+b;
// })(3,5);
// console.log(result);

// fat-arrow function

// .if the function body consist of single expression than the {} and the return keyword is omitted.
// if there is only single parameter ,the parenthesis around the parameter can be omitted.

let sum = (a, b) => console.log(a + b);
sum(10, 67);

const square = (a) => console.log(`the square of a ${a * a}`);
square(4);

//calculator

const calculator = (a, b, operator) => {
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      return result;
      break;
    case "-":
      result = a - b;
      return result;
      break;
    case "*":
      result = a * b;
      return result;
      break;
    case "%":
      result = a % b;
      return result;
      break;
    case "/":
      if ((a, b === 0)) {
        console.log("0 is not allowed");
      } else {
        result = a / b;
        return result;
        break;
      }
  }
};

// calculator(2,4,"+");

// calculator(2,4,"-");
// console.log(calculator(10,0,"/"));
console.log(calculator(10, 10, "%"));


//reverse the string without using the inbuilt reverse method

let reverse=(str)=>{
    let number="";
          for(let i=str.length-1;i>=0;i--)  {
           number= number + str[i];
          
          }
          return number;
}


console.log(reverse("princi sharma"));


//check the given string is palindrome or not 

let ispalindrome=(str)=>{
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse=reverse+str[i];
    }
   
    if(reverse===str){
        return true;
    }
    else{
        return false;
    }
}
console.log(ispalindrome("pihu"));
