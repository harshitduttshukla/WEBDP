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
function name({fn, ln}){
    console.log(`${fn} ${ln}`);
}

name({
    ln: 'deo',
    fn:'John'
})


// Aliasing