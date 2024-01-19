/* const emp = {
    name : "harshit",
    age: 99,
    salary : 1000,
    address : {
        city: "basti",
        country  : "India"
    }
} */

// List of all the keys in the given object
// console.log(Object.keys(emp));

// list of all the keys in the given object
// console.log(Object.values(emp));

// list of all key and value pairs
// console.log(Object.entries(emp));

// assing
// emp_new = Object.assign({},emp,{role : "developer"})
// console.log(emp_new);


const emp = {
    name : "harshit",
    age: 99,
    salary : 1000,
    address : {
        city: "basti",
        country  : "India"
    }
}

Object.freeze(emp)  //object is now freezed and it can't be changed
delete emp.age;
// console.log(emp);
// console.log(Object.isFrozen(emp));

//seal  => no addition , no deletion , but updating of object is fields is possible
/* 
const person = {
    name : "Vishwa",
    age: 19,

}
console.log(person);
Object.seal(person)
person.name = "hars\hit",
console.log(person);

person.hobby = " footboll"
console.log(person);
delete person.name;
console.log(person);
 */

// is object key is persont or not
const person = {
    name : "Vishwa",
    age: 19,
    salary : {
        value : 6000,
        enumerable : false
    }

}

for(k in person){
    console.log(k);
}
// console.log(Object.hasOwn(person,"name"));
// console.log(Object.hasOwn(person,"city"));


console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertyDescriptor(person));
person.freeze
console.log(person);
// console.log(Object.getOwnPropertyDescriptor());