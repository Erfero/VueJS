// syntax ES5
// const notes = [17, 14, 12, 13];
// const nicole = notes[0];
// const erfero = notes[1];
// const oderic = notes[2];
// const martin = notes[3];

// syntax ES6
const notes = [17, 14, 13, 12];
const [nicole, erfero, oderic, martin] = [17, 14, 13, 12];
console.log(nicole); //17
console.log(erfero); //14
console.log(martin); //12


const person = {
    firstName: "John",
    lastName: "Doe",
    age:24
}

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

const {firstName, lastName, age} = person; //{lastname "...", age: "..."}
console.log(age);
console.log(lastName); 