//Array in JavaScript is heterogeneous(we can store mixed values of different data types)

var mixed=[1,"anime",1.20,null]

// for (var i = 0; i < mixed.length; i++) {
//   const element=mixed[i];
//   console.log(element); 
// }

// Array creation

// 1.literal way of Array creation

var friends=["bheem","raju","chutki","jagu"];

// console.log(friends);
  console.log(friends[2]);


for (var i = 0; i < friends.length; i++) {
  console.log(friends[i]); 
}


// 2.Array Constructor

var character=new Array("luffy","zoro",true,100);
character[1]="sanji";   //updating value in array

console.log(character);   //printing array



//  inbuild methods

//to calculate length of the array
console.log(character.length);


//reverse the array
// console.log(character.reverse());

//to add a new element to the array we are using push()
character.push("nami");  //return type :new array with added element
console.log(character);


//to remove the  last element we use pop() method
console.log(character.pop(100)); //return type : deleted element


//adds new element to the starting of the array
console.log(character.unshift("Ace","sabo")); //return type : new array with added value length


//delete the starting element of the array
console.log(character.shift()); //return type : deleted element
