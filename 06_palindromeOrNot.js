/*
Write a function to determine wheather a given string is a palindrome ot not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization/

eg.
---->"A man, a plan, a canal, panama"--> true
---->"racecar"---> true
----> "hello"---> false


****Constraints
---> The input string may contain letters, digits, spaces, punctuation and special chatracters

---> The function should be case-sensitive, meaning "Racecar" and "racecar" should be considered the same.

---> Ignore spaces, punctuation, and special characters when determining if a string is palindrome.

--> The function should return true if the input string is a palindrome and false otherwise.


*/

let str="A man, a plan, a canal, panama";
// let str="hello";
const isPalindrome=(str)=>{
    str=str.trim();
    str=str.toLowerCase().replace(/\W/g,"");
    let rev_str=str.split("").reverse().join("");
    console.log(rev_str);
    return str===rev_str?true:false;
}

console.log(isPalindrome(str));