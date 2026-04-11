//Write a program to return the first non-repeating character in a string.
function non_repeatingchar(str)
{
    for(char of str)
    {
        if(str.indexOf(char)===str.lastIndexOf(char))
            return char;
    }
}
console.log(non_repeatingchar("aacccccdedf"));