// const date = new Date()
// console.log(date.getMonth());
// console.log(date.getFullYear());


// ************set*************************


/*
const setdemo = new s et()
setdemo.add('a')
setdemo.add('b')
setdemo.add('c')
console.log(setdemo.size()); */


//**************Map************************ */


const myMap = new Map();
myMap.set('key1','value1');
myMap.set(2,'value2');
myMap.set({key: 'objKey'},'value3');

console.log(myMap.get('key1'));
console.log(myMap.get(2));

// Checking if a key exists in the Map
console.log(myMap.has('key1'));

// Iterating throung the Map
for(let [key,value] of myMap){
    console.log(`${key}:${value}`);
}

// console.log(myMap.size);

// myMap.clear();

