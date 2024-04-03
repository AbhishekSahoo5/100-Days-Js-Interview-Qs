/*
-------------------------------------------------------------------------
Programming Question: Longest Word in a String
-------------------------------------------------------------------------

Q))) Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

*********Constraints***********
---> The input string may contain alphabetic characters, digit, spaces and punctuation.
---> The input string is non-empty
---> The input string may contain multiple words separated by space.

***********Notes****************
---> If the input string is empty or contains only whitespace, the function should return an false.

---> The function should ignore loading and trailing whitespace when determining the longest word.
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------
//My Approach

let string="   Hii This is Abhishek Sahoo and I am a Web Developer  ";
// let string="";
let longestWord=((string)=>{

    string=string.trim();

    //edge case
    if(string.length==0){
        return false;
    }

    const arr=string.split(" ");
    // return strArray;
    let maxLength=0;
    let maxIndex;
    for(let i=0;i<arr.length;i++)
    {
        let ele=arr[i].toString();
        if(ele.length>maxLength){
            maxLength=ele.length;
            maxIndex=i;
        }
    }
    
    return arr[maxIndex];
    
})
console.log(longestWord(string));

// -------------------------------------------------------------------------------------------------------------------------------------------------
//Approach I learnt

let str="   Hii This is Abhishek Sahoo and I am a Web Developer  ";
const findLongestWord2=(str)=>{
    str=str.trim();
    if(str.length===0){
        return false;
    }

    words=str.split(" ");
    words.sort((a,b)=>a.length-b.length); //sort according to the length
    console.log(words);
    return words.at(-1);   // after sorting largest word is at last index

}

console.log(findLongestWord2(str));


//-----------------------------------------------------------------------

//Another approach I learnt
str="   Hii This is Abhishek Sahoo and I am a Web Developer  ";
const findLongestWord3=(str)=>{
    str=str.trim();
    if(str.length===0){
        return false;
    }

    words=str.split(" ");
    return words.reduce(
        (accum,curr)=>(curr.length > accum.length ? curr : accum)," "
    );
}

console.log(findLongestWord3(str));