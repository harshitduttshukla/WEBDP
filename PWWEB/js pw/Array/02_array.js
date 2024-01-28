/* const nums = [1,2,3,4,5,6];
nums.forEach((num,index,arr) => {
    console.log(num,arr[index]);
}) */



// in map return for important
/* const nums = [1,2,3,4,5];

const newNums = nums.map((num,index,arr) => num * 2)
console.log(newNums);
 */

/* 
const nums = [1,2,3,4,5];

const newNums = nums.filter((num,index,arr) => num % 2 !== 0)
console.log(newNums);
*/
// break is not working in foreach loop

// reduce 13 : 10

/* const nums = [1,2,3,4,5];
const total = nums.reduce((sum, num, index,arr) =>{
    return sum + num;
},0)

console.log(total); */



/* const nums = [1,2,3,4,5];
const total = nums.reduce((sum, num, index,arr) =>{
    console.log(`sum = ${sum}  & num = ${num}`);
    return sum + num;
},0)

console.log(total); */


const nums = [1,2,3,4,5];
const total = nums.reduce((sum, num, index,arr) =>{
    console.log(`sum = ${sum}  & num = ${num}`);
    return sum + num;
},)//then inical value is not given

console.log(total);


