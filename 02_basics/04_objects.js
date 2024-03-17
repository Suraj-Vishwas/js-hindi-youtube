// const tinderUser = new Object(); //this is singleton object
const tinderUser = {}; //this is non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Suraj"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regularUser = {
    email: "vishwassuraj71@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Suraj",
            lastname: "Vishwas"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj4 = { obj1, obj2};


// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj5 = {...obj1, ...obj2, ...obj3};
// console.log(obj5);

const users = [
    {
        id: 1,
        email: "vishwassuraj71@gmail.com"
    },
    {
        id: 1,
        email: "vishwassuraj71@gmail.com"
    },
    {
        id: 1,
        email: "vishwassuraj71@gmail.com"
    }
]

users[1].email
console.log(tinderUser)


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))