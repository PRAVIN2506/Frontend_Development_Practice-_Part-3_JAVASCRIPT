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
              console.log(sub(10,30));  //it is not possible bcoz hoisting for function expression 
              
              
              function add(a,b){
                return a+b;
              }
              
              var sub=function s(a,b){
                return a-b;
              }