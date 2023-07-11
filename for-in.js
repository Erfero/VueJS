"use strict"
const students = [
    "Oswald",
    "Erféro",
    "Warris",
    "Odéric",
    "Sam-Rod",
    "Regis",
    "Nicole",
    "Emile",
    "Euloge",
    "martin",
    "Faris",
    "Leroux",
]

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);;

}

students.forEach(student => {
    console.log(student);
});

// for ...in : permet de parcourir les propriétés / indices d'un objet/tableau

for (let student in students) {
    console.log(student);
}

// Parcour les élements du tableau "student"

for (let student in students) {
    console.log(students[student]);
}

//parcour les valeurs du tableau "students"

for (let student of students) {
    console.log(student);
}


let objet = {
    fn: "Erfero",
    ln: "KEOULA",
    age: 23
}

for (let name in objet) {
    // console.log(objet.fn);
    // console.log(objet.ln);
    // console.log(objet.age);
    console.log(objet[name]);
}



function findLongestWordLength(str) {
    str = str.split(" ");
    
    let LongestWord = str[0].length;
    for (i = 0; i < str.length; i++) {
      if (LongestWord < str[i].length) {
        LongestWord = str[i].length;
      }
    }
    return LongestWord;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

