// singleton
// Object.create


// object literals

const mySym = Symbol("key1");


const JsUser = {
name: "Suraj", //behined the scean it know as "name" "age"
"full name": "Suraj Vishwas",
[mySym]: "mykey1",
age:21,
location: "Jaipur",
email: "vishwassuraj165@gmail.com",
isLoggedIn: false,
lastLoginDays: ["Manday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); //important

JsUser.email = "vishwassuraj71@gmail.com"
// Object.freeze(JsUser);
JsUser.email = "sudhamvishwas@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`); //String Interpolation
    console.log(`Hello JS User, ${this.name}`); //String Interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


