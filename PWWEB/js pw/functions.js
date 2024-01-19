// important for interview

// assimed to a varable 
// can be pass as a argument
// for can be return from a function
function factorial(n){
    if(n==0){
        return 1;
    }
    return n * factorial(n-1);
}
// console.log(factorial(29));


// if function is not return any thing then undefined

// ex=>
/* const hello_func = function hello(){
    console.log("hello harshit bahi kaise ho ap")


}
 */
// if you assing the function to any varable then function name is optional
// those function is not has name is called as 
// Anonymous functions
const hello_func = function (){
    console.log("hello harshit bahi kaise ho ap")


}


// hello()
// hello_func()
// console.log(hello_func());



// function passed as argement to a function
function operation(a,b,fn){
    console.log(fn(a,b));

}

function sum2(a,b){
    return a + b;

}

// operation(5,6,sum2);

function return_greet_fn(){
    // console.log("hello papa");
    return function(){
        console.log("hello hari");
    }
}

// console.log(return_greet_fn())
// console.log(return_greet_fn()())

// return_greet_fn()

// return_greet_fn()()


// importan for interview
// number of arrgument not give me a error 
function sum(a,b){
    return a + b;
}
// console.log(sum(5,6,77,7));



//in function of js any number of arggument pass without any parameter
function sum(){
    console.log(arguments)

    let sum = 0;
    for(i=0;i<arguments.length;i++){
        sum = sum + arguments[i]
    }
    return sum
}
console.log(sum(5,6));
console.log(sum(5,6,7,8));







