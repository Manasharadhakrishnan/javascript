//  Array Map()
const arr=[2, 4, 6, 8, 10]
const Mapped=arr.map(element=> element+10)
console.log(Mapped)

// Array.filter()

const arr1=[1,2, 3, 4, 5, 6, 7, 9]
const filtered= arr.filter(element=> element ===2||  element ===6)
console.log(filtered)

// Array.sort()
const points=[12, 100, 20, 50, 1]
 const sort=points.sort(function(a, b){return a - b});
console.log(sort)

// Array.concat()
const x=[1, 2, 3, 4];
const y=[5, 6, 7,8];
console.log(x.concat(y));

// Array.join()

const fru = ["Banana", "Orange", "Apple", "Mango"];
let text = fru.join(" and ");
console.log(text);

// Array.every()
const z=[10,5, 30, 40, 50,66];
const every = (currentValue) => currentValue < 40;
console.log(z.every(every));

// Array.find()

const find1=[29,30, 40, 10, 35, 8];

const found = find1.find(element => element > 20);
console.log(found);

// Array.findindex()
const index = [5, 12, 8, 130, 44];

const num = (element) => element > 13;

console.log(index.findIndex(num));

// Array.lastindex()


const ind1=[3, 4, 56, 66, 23, 44, 65];

const num1=(element) => element > 50;

console.log(ind1.lastIndexOf(num1));

// Array.foreach()

const fruits=["apple", "orange", "mango", "papaya"];
fruits.forEach(element => 
    console.log(element));

     
// Array.slice()
const arr2=["divya" , "deena", "manasa", "deepa", "karni", "deepika" ];

console.log(arr2.slice(2));


// Array.splice()

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

console.log(months);

// Array.shift()
const names=["divya" , "deena", "manasa", "deepa", "karni", "deepika" ];

 const a = names.shift();
console.log(names);

// Array.unshift();
const days = [ "mon", "tues", "wed", "thurs", "fri", "sat"];
 const b = days.unshift("sun");
 console.log(days);


//  Array.localstring();
const d = new Date();
let c = d.toLocaleString();

console.log(d);