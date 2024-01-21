// key is also 1 change in string atomately

// 1 way of creating object 
/* const person = {
    name : "harshit shukla",
    age : 20,
    greet : () => {
        console.log("hello harshit");

    }
} */

// console.log(person["greet"]);


/*2 way using object constructr
const obj = new Object()

console.log(obj); */


// we can creaate object using functions 
function emp(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary
}
// this refers to the object that will be created

const emp_obj = new emp (1,"Vishwa",7000)
// console.log(emp_obj);




//i would like to insert the new fields


const person = {}

person.name = "harshit"
person.hobby = "footboll"
person["country"] = " India"

// console.log(person)

person.name = "shukla"  //Update the field of the object

//Delte cretain fields
delete person["name"]

console.log(person);

delete person;
console.log(person);