/*
Hash Tag Generator

You are required to implement a function generate Hash that generates a hash tag from a given input string.

The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

If the length of the input string is greater tha 280 characters or if the input string is empty or contains only whitespace, the function should return false

otherwise, the function should return the generated hash tag prefixed with #.
*/


//My Approach

function capitalize(str){
    let cap=str.charAt(0).toUpperCase();
    cap=cap.concat(str.slice(1));
    return cap;
}


let hashTag=((str)=>{

    str=str.trim();

    if(str.length===0 || str.length>280){
        return false;
    }
    

    const arr=str.split(" ");
    let word="";
    for(let i of arr)
    {
        i=capitalize(i);
        word=word.concat(i);
    }
    return `#${word}`;
})

console.log(hashTag("my name is thapa technical"));
// console.log(hashTag(""));

//--------------------------------------------------------------------------------------------------------------------------------------------------

//Approach I learnt

const generateHash=(str)=>{
    if(str.length>280 || str.trim().length===0)
    {
        return false;
    }
    str=str.split(" ");
    str=str.map((curr)=>
        curr.replace(curr[0],curr[0].toUpperCase())
    )
    str=str.join("");
    return `#${str}`;
}
console.log(generateHash("my name is thapa technical"));

//-------------------------------------------------------------------------

//Another Approach I learnt

const generateHash2=(str)=>{
    if(str.length>280 || str.trim().length===0)
    {
        return false;
    }
    str=str.split(" ");
    str=str.map((curr)=>
        curr.charAt(0).toUpperCase() + curr.slice(1)
    )
    str=str.join("");
    return `#${str}`;
}
console.log(generateHash2("my name is thapa technical"));