/*
Sort an Array

Write a function to sort an array of numbers in an ascending order.

--The function should take an array of numbers as input.
--It should return a new array with the numbers sorted in ascending order.
--The original array should remain unchanged.
--You are not allowed to use the built-in sort() method.

*/
let arr=[5,3,10,8];

const sortAscending_=(arr)=>{
    return arr.sort();
}
console.log(sortAscending_(arr)); 
//-->Output:-[10,3,5,8]


const sortAscending=(arr)=>{
    return arr.sort((a,b)=>a-b);
}

console.log(sortAscending(arr));
//-->Output:-[1,3,5,8]
