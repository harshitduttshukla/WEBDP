// if you are pass function as a arggement is HOF
/* const sqr = (num) => num * num
const dbl = (num) => num * 2;

const compose = (func1,func2) => value => func1(func2(value))

const sqrthendbl = compose(sqr, dbl)

console.log(sqrthendbl(4)); */


//****************************************************** */

/* const findinsex = (callback,nums) => {
    let index = -1;
    for(let i = 0;i<nums.length;i++){
        if(callback(nums[i])){
            index = i;
            break;
        }
    }
    return index;
}

const arr = [1,2,4,0,6,6];
const condition = (num) => num >10;

console.log(findinsex(condition,arr)); */




/* const forEach = (cb , arr) => {
    for(let item of arr){
        cb(item)
    }

} 

const callback = (item) => {
    console.log(item);
}
forEach(callback,[1,2,3]) */


/* 
function hifunctrion(name,callback){
    console.log(` Hi ${name} i am the actual function`);
    callback()

}
function examplefunction(){
    console.log("i come the callback function");
}

hifunctrion('folks', examplefunction) */


//calllback hell => function in side function in side function ..........



/* function multiplyBy7(){
    return function (x) {
        return x * 7;
    }
}
const changedValue = multiplyBy7()
console.log(changedValue(25));

 */


// setinterval
/* let count = 1
setInterval(() => {
    console.log(count++);
},1000)

 */

/* let count = 10;
const countDown = () => {
    console.log(count--);
    if(count === 0){
        clearInterval(timer)
    }
}
const timer = setInterval(countDown,1000) */


/* setTimeout (
    () => {
        console.log("harshit")
    },3000
) */


/* const timeoutId = setTimeout (
    () => {
        console.log("harshit")
    },3000
)

clearTimeout(timeoutId);
console.log("timeout has been cleared"); */

// first asynchronous and synchronous
/* 
for(var i = 0; i< 5;i++){
    setTimeout(() => {
        console.log(i)
    },1000)
} */


// also in this 
/* for(var i = 0; i< 5;i++){
    setTimeout(() => {
        console.log(i)
    },0)
} */

// correct
/* for(let i = 0; i< 5;i++){
    setTimeout(() => {
        console.log(i)
    },0)
}
 */
/* 
for(var i = 0; i< 5; i++){
    setTimeout((
        (i_local) => {
            console.log(i_local);
        })(i),0)
}
 */

/* for(var i = 1; i <= 16; i = i*2){
    (function(num){
        setTimeout(
            () => {
                console.log(num);
            },3000
        )
    })(i)
} */


let count = 0;
function printCount(){
    console.log("Interval count: ",count);
    count++
}
console.log("start");

const IntervalId = setInterval(printCount,500)

setTimeout(function(){
    clearInterval(IntervalId);
    console.log("interval stopped");
},2000
)
console.log("end");