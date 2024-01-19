// comtiuves memory location
let arr_nums = [1,2,3,34,4]
// console.log(arr_nums);
// console.log(arr_nums[47]);
// console.log(arr_nums.length);


// 2nd way of creating array
arr = Array(1,2,3,4,5)
// console.log(arr);

// 3rd way of creating arrays Constructor Way
fruits = new Array("Apple","Mango","Banana")
// console.log(fruits)
;

// Deleting the element from the array

arr = [1,23,4,5,5]
// console.log(arr);

// delete arr[2]
// console.log(arr);

// for each loop for itreat the array
/* for(num of arr){
    console.log(num);
} */

arr.pop();
// console.log(arr);
arr.push(11)
// console.log(arr);

// remove from the first postions
arr1 = [1,23,4,5,56,6]
x = arr1.shift()
// console.log(x);
// console.log(arr1);
// incert at 0 index first postions
arr1.unshift(32)
// console.log(arr1.unshift(32))
// console.log(arr1);

// concat
arr2 = [3,4,5,6]
arr3 = [7,8,9,6]
arrr  = arr2.concat(arr2)
// console.log(arr);
// if you are add to array then create a new string
arr_nums = arr2+arr3
// console.log(typeof arr_nums);
let result = fruits.join()
// console.log(result)
// console.log(typeof result);

let result2 = fruits.join("-")
// console.log(result2);

// slicing

temp = [4,5,6,77,8,9,0]
// not efficet of original array
sliced_arr = temp.slice(2,5)
// console.log(sliced_arr);

// if no argument then no action entire array will be returned
// console.log(temp.slice());

// take out the array starting from 2nd index
// -ve for only in slicing
// console.log(temp.slice(2));
// console.log(temp.slice(-1));
// console.log(temp.slice(-4,-1));

// Splice are used to add or remove elements at any index
temp.splice(4,1)/* 
console.log(temp);
temp.splice(4,3)
console.log(temp); */

// .for add the element

temp.splice(4,1,55) 

// console.log(temp);

arr1a = [2,3,4,7,5,6]
arr1a.reverse()

// console.log(arr1a);


arr1a.sort()
// console.log(arr1a);
// important
arr.sort((a,b) => b-a)

// console.log(arr);

str = arr.toString()
// console.log(str);
// console.log(typeof str);


A = [2,34,4,[5,6,7]]
flat_array = arr.flat()//flat(2) paramerter in side the level you are going in side in array
console.log(flat_array);  //
console.log(A);



