/*
Interview Question: Count Occurences of Character
---------------------------------------------------
Write a function called coutChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

Constraints***************
--The function should be case-sensitive
--The function should handle both lowercase and uppercase characters.
--The character parameter can be any parintable ASCII character ASCII character
*/

//my Approach
const countChar=((str,char)=>{
    str=str.trim();
    str=str.toLowerCase();
    char=char.toLowerCase();

    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]===char){
            count++;
        }
    }
    return count;

})
console.log(countChar("MissIssippi","I"));


//-----------------------------------------------------

//Approch I learnt

const countCharacter=(word,char)=>{
    word=word.toLowerCase();
    char=char.toLowerCase();

    wordArr=word.split("");
    totalCount=wordArr.reduce((accum,curr)=>{
        if(curr===char)
        {
            accum++;
        }
        return accum;
    },0);
    return totalCount;

}

console.log(countCharacter("MissIssippi","I"));
