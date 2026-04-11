//Write a program to check if a string is a palindrome.
function palindrome(str){
      let reversed=str.split("").reverse().join("");
      if(reversed===str)
      {
        console.log("yes");
      }
      else 
      {
        console.log("Not palindrome");
      }
}
palindrome("MAAM");