//Write a program to reverse a string.
function reversestring(str)
{
    let reversed = str.split("").reverse().join("");
    console.log(reversed);
}
reversestring("Virat");