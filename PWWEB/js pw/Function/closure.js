// .closure => outer function is ended but outer function arggrment is woring for inner return 

/* function outer(num1){
    var num2 = 20;
    return function () {
        return num1 + num2;
    }
}

const closure = outer(10);

console.log(closure()); */


// Lexical scope

function outer(){
    let count = 0;
    return function(){
        console.log(count++);
    }
}

const coter =  outer();

coter()
coter()
coter()
coter()
coter()
