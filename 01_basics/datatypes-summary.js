// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);  //false

const bigNumber = 35463463434134134n


// Reference (Non primitive)
// Array ,Objects, Functions

const heros = ["shaktimam", "naagraj", "doga"];
let myObj = {
    name : "suraj",
    age : 21,
}

const myFunction = function(){
    console.log("Hello my name is Suraj");
}

console.log(typeof myFunction);

/* for study
https://262.ecma-international.org/5.1/#sec-11.4.3
*/