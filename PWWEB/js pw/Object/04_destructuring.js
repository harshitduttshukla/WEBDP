// destructuring  in object
/* const obj = {
    firstname : 'john',
    lastName : 'skhukla'
};


const {firstname,lastName} = obj;
console.log(firstname,lastName); */


/* const obj = {
    firstname : 'john',
    lastName : 'skhukla'
};


const {firstname,middlename = 'none',lastName} = obj;
console.log(firstname,middlename,lastName);*/



/* const firstname = 'aABC'
const obj = { 
    firstname : 'john',
    lastName : 'skhukla'
};


const {firstname : fn,lastName} = obj;
console.log(fn,lastName);
 */

// 16:00


/* let options = {
    size:{
        width:100,
        height : 200
    },
    items: ["cake", "donut"],
    extra: true
};

const {
    size : {width: w},
    items: [,items2],
} = options;

console.log(w, items2); */


// avode the ordering constet
/* function name({fn, ln}){
    console.log(`${fn} ${ln}`);
}

name({
    ln: 'deo',
    fn:'John'
})
 */

// Aliasing

/* const person = {
    name: 'John',
    address: {
        city: 'new york',
        country: 'usa'
    }
};

const getNestedInfo = ({name,address: {city,country}}) =>{
    return `${name} live in ${city}, ${country}`
}

console.log(getNestedInfo(person)); */



/* 
const company = {
    name : 'TeachCo',
    CEO:{
        name : 'John CEO',
        age : 45,
        address: {
            city : 'silicon valley',
            country : 'USA'
        }
    },
}

const getCEOInfo = ({CEO} ) => {
    const {name, age , address:{city}} = CEO;
    return {name, age, city}
}

const cepInfo = getCEOInfo(company);

console.log(cepInfo.name);
console.log(cepInfo.age);
console.log(cepInfo.city); */


const person = {
    name: 'John',
    age: 30,
    address:{
        city: 'New York',
        country: 'USA'
    }
};

const modifyPerson = (person) => {
    const {name, age, address:{city,country}} = person
    return {
        fullName: name,
        age: age*2,
        currentCity : city

    }
}

const modifiedPerson = modifyPerson(person);
console.log(modifiedPerson.fullName);
console.log(modifiedPerson.age);
console.log(modifiedPerson.currentCity);
console.log(person.name);
console.log(person.age);
console.log(person.address.city);