/*
Write a function findMax that takes an array of numbers as input and returns the maximum number in the array
*/

let arr=[1,5,3,9,2];
// let arr=[-10,-5,-3,-9,-2];
// let arr=[6];

// My approach
const max=(arr)=>{
    let maxi=arr[0];
    for(let i of arr)
    {
        if(i>maxi){
            maxi=i;
        }
    }
    return maxi;
}
console.log(max(arr));


//----------------------------------------------------------------------------------------------------------
//Approach I learnt
const findMax2=(arr)=>{
    return Math.max(...arr);
}
console.log(findMax2(arr))



// ----------------------------------------------------------------------------------------------------------
//Another approach I learnt
 const findMax3=()=>{

 }
