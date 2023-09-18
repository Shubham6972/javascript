// Primitive (call by value)
// String ,number ,boolean ,null ,undefined,Symbol,BigInt

const score = 100;
const score3 = 100.3;
const isLoggedIn = false;
let userEmail;
console.log(userEmail);

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

/* Non Primitive (Reference)
   Array,Objects,Functions
*/

const heroes = ["Shaktiman" , "Nagraj" , "Doga"];
let myobj={
    name:"Shubham",
    age:20
}

const myfunction = function(){
    console.log("Hello World");

}

console.log(typeof score); //number 
console.log(typeof myfunction); //function
console.log(typeof myobj);//object

// Javascript is dynamically typed

// *************************************************************************

// memory

//Stack Memory(Primitive),Heap Memory(non-Primitive)

let myYoutubeName = "shubham";
let anotherName = myYoutubeName;
anotherName = "Sonkusare";
console.log(myYoutubeName);

console.log(anotherName);

//heap
let userOne = {
    email:"user@gmail.com",
    upiId:"user@xyz",
}

let userTwo = userOne;
userTwo.email = "shubham@google.com";
console.log(userOne.email);
console.log(userTwo.email);