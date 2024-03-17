let person1 = {
    name: "suraj",
    age: 21,
    nationality: "indian",
    language: "Bengali",
}

let person2 = {
    name: "Shubham",
    age: 23,
    nationality: "indian",
    language: "Bihari",
}

let person3 = {
    name: "Gaurav",
    age: 22,
    nationality: "indian",
    language: "hindi",
}


let person = [person1, person2, person3];

for(let i=0; i<person.length; i++){
    let currentPerson = person[i];
    console.log(currentPerson.name);
    console.log(currentPerson.age);
    console.log(currentPerson.language);
    console.log("-----------------");
}