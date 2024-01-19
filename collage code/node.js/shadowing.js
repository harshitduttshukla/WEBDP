// shadowing

var shadowedvar = " i am global"
function ef(){
    var shadowedvar = "i am a local var";
    console.log(shadowedvar);  //i am local
}

ef();
console.log(shadowedvar);  //i am global


// JS is dynamically typed 