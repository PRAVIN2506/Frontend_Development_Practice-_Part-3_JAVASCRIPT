// 1.function declaration

function function_name(){
  console.log("congrats..")
}

function_name();
function_name();
function_name();
function_name();


// 2.function expression (storing function inside a variable name is knowwn as funtion expression)

var sayhi= function f_name(parameters){
  console.log("hii..")
}

sayhi();


              function add(a,b){  //  a & b are parameters
                return a+b;
              }
              
              var sum=add(10,20); //  10,20 are the actual values and known as arguments
              console.log(sum);


              var e_name="pravin"; 

              function hello(e_name) {
                console.log(`hello ${e_name}`); 
                console.log('hello ename');
                
              }

              hello(e_name);
              console.log(hello); // when we give the function name inside it will print the whole function
              
              
              //example for hoisting-->>
              
              console.log(add(10,30));  //due to hoisting it is possible
              // console.log(sub(10,30));  //it is not possible bcoz hoisting for function expression 
              
              
              function add(a,b){
                return a+b;
              }
              
              var sub=function s(a,b){
                return a-b;
              }


// 3.anonymous function (function without function name is known as anonymous function)

var sum= function(){
  console.log("anonymous function")
  
}

sum();


// 4.first class function (or) first citizen function (the function stored inside the varbiale is known as first class function)

var sum= function add(a,b) {
  return a+b;
}

console.log(sum(10,10));

// 5.IIFE(Imemdiate Invoking Function Expression)
//    *it can use only one time in the source

// 1st way to create IIFE 
var div=(function divide(a,b){
  return a/b;
})(10,2)

console.log(div);

// 2nd way to create IIFE 
var div=(function divide(a,b){
  return a/b;
}(15,2))

console.log(div);

// 6.Higher Order Function (the function which having another function as an argument is known as HOF)

// 7.callback function (the function which is passed as an argument for an HOF is known as callback function)

function add(a,b){
  return a+b;
}

function operation(c,d,callback){
  return callback(c,d);
}

console.log(operation(10,5,add));

