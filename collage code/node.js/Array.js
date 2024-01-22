// working on arrays
let fruits = ["apple","banan","orginning","orang"]
fruits.push("kiwi");
// console.log(fruits)
// fruits.unshift("mango");
// console.log(fruits);

// removing the last element 
fruits.pop()
// console.log(fruits);

//  removing the first element
fruits.shift();
// console.log(fruits);

// finging index of an element

console.log(fruits.indexOf("orange"));

let citrus = fruits.slice(1,3);
console.log(citrus);

let removed = fruits.splice(1,2,"pear","melon")



