var operation=prompt("Enter operation")
var num1=prompt("Enter  number1")
var num2=prompt("Enter number2")
var result=0;

switch (operation) {
  case add:
    result=num1+num2
    
    break;

    case sub:
    result=num1-num2
    break;

    case multiply:
    result=num1*num2
    break;

    case divide:
    result=num1/num2
    break;

    case modulus:
    result=num1%num2
    break;

  default:
    console.log("invalid operation");
    
    break;
}

console.log(result);

