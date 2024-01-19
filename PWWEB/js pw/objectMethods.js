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
console.log(emp);
console.log(Object.isFrozen(emp));

//  => no addition , no deletion , but updating of object is fields is possible