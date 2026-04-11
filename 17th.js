// Write a program to check if two strings are anagrams.
function anagrams(str,str1)
{
    str1=str1.toUpperCase();
    console.log(str1);
     str=str.toUpperCase();
     console.log(str);
 if(str.split("").sort().join("")==str1.split("").sort().join(""))
 {
    console.log("anagram");
 }
 else 
 {
    console.log("Not Anagram");
 }
  
}
let a="Listen";
let b="silEnt";
anagrams(a,b);