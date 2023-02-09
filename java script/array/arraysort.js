

// // last name

// const arr1 = ["arthi", "priya", "akalya", "manas", "anu", "divya", "athees" ];

// for (let index = 0; index < arr1.length; index++) {
//     let a=arr1[index].slice(arr1[index].length-1)
//   if(a=='s')
//     console.log(arr1[index]);

// }


// // array add
// const numbers = [10, 20, 30, 40, 50];
// let sum = numbers.reduce(myFunction);

// document.getElementById("demo").innerHTML = "The sum is " + sum;

// function myFunction(total, value) {
//   return total + value;
// }

// first and last name


// const arr1=["divya" , "deena", "manasa", "deepa", "karni", "deepika" ];


// for (let index = 0; index < arr1.length; index++) {
//   let a=arr1[index].slice(arr1[index].length-1)
//   if (arr1[index].indexOf ('d')== 0 && a=='a') {

//     console.log(arr1[index]);
//   }
//   }





// var names = ["divya", "deena", "manasa", "deepa", "karni", "deepika"];


// function countLetterInString(arr, letter) {
//   let charCount = 0;


//   for (let i = 0; i < arr.length; i++) {

//     for (let j = 0; j < arr[i].length; j++) {

//       if (arr[i][j] === letter) {
//         charCount++;
//       }
//     }
//   }

//   return charCount;
// }

// console.log(countLetterInString(names, "d"));




// ascending order

// let arr =["divya", "reena", "manasa", "deepa", "karni", "natchatra"];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;

//     }
//   }
// }
// console.log( arr);


// const people = [
//   { name: 'manasa', age: 20 },
//   { name: 'divya', age: 12 },
//   { name: 'madhu', age: 18 },
// ];


// const addFourToAge = person => {
//   if (person.age > 15) {
//     person.age += 4;
//   }
//   return person;
// };

// const updatedPeople = people.map(addFourToAge);
//  console.log(people)

// const people = [
//   { name: 'manasa', age: 20 },
//   { name: 'divya', age: 12 },
//   { name: 'madhu', age: 11 },
// ];
//   console.log(people);

// const addFourToAge = person => {
//   if (person.age < 15) {
//     // return {...person, age: person.age + 4};
//     return Object.assign({}, person, { age: person.age + 4 });
//   }
//   return person;
// };

// const updatedPeople = people.map(addFourToAge);
// console.log(updatedPeople)



// students detail


const students = [
  { name: 'manasa', dob: '01-01-2001', age: 22, gender: 'female' },
  { name: 'madhu', dob: '02-02-1989', age: 34, gender: 'female'},
  { name: 'dhanam', dob: '03-03-1991', age: 32, gender: 'female'},
  { name: 'natchatra', dob: '04-04-1994', age: 29, gender: 'female' },
  { name: 'mekala', dob: '05-05-2013', age: 16, gender: 'female' },
  { name: 'visu', dob: '06-06-1993', age: 30,gender: 'male' },
  { name: 'mahend', dob: '07-07-1998', age: 25,gender: 'male' },
  { name: 'Matthew', dob: '08-08-2010', age: 13,gender: 'male' },
  { name: 'Olivia', dob: '09-09-2010', age: 18,gender: 'female' },
  { name: 'Daniel', dob: '10-10-2003', age: 20,gender: 'male'}
];

const bornAfter = students.filter(student => {
  const dob = new Date(student.dob);
  const year = dob.getFullYear();
  return year > 1991;
});
   
console.log(bornAfter);
const deepCopy = students.map(student => ({...student}));


const ageBetween13to18 = deepCopy.filter(student => student.age >= 13 && student.age <= 18);

console.log(ageBetween13to18);
const deepCopy1 = students.map(student => ({...student}));

const gender = deepCopy1.filter(student => student.gender === 'male');

console.log(gender);

