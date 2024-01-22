//synchronous callback function
/* function parentFunction(name,callback){
    callback();
    console.log(`hey ${name}`);

}

function randomfunction(){
    console.log("hey I am callbackfunction");
}
parentFunction("Random String",randomfunction) */


//*********************Asynchronus Callback***************************** */
/* function parentFunction(name,callback){
    setTimeout(callback,1000)
    console.log('hey');

}
function randomfunction(){
    console.log("hey i am callbackfunction");
}
parentFunction("random string",randomfunction) */


/* function parentFunction(name,callback){
    setTimeout(callback,0);
    console.log('hey\n' + name);
}

parentFunction("random string",function(){
    console.log("hey i am a callback function");
}) */


function parentFunction(name,callback){
    setTimeout(callback,0);
    console.log('hey\n' + name);
}

parentFunction("random string",()=>{
    console.log("hey i am a callback function");
})

