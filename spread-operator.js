// L'opérateur spread (...) en JavaScript permet de copier rapidement tout ou une partir d'un tableau/objet dans un autre tableau/objet.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];
const arr5 = [1, 2, 3, ...arr2]; // [1, 2, 3, 4, 5, 6];
const arr6 = [...arr5, 7, 8, 9]; // [4, 5, 6, 7, 8, 9];

console.log({arr3, arr4});
console.log(...arr1);
console.log(...arr2);

let arr10 = [[1, 2, 3], 4, 5, 6];
console.log({..."Bonjour"});


let arr20 = [...arr10[0]]; // [1, 2, 3]


// let objet = {
//     a: a,
//     b: b
// };
// console.log(objet);

// let objet2 = {a, b};
// console.log(objet2);


function add(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}

add (2, 3, 4, 5, 6, 7);
