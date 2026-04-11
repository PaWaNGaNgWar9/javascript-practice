function nonrepeating(str)
{
for(let char of str)
{
    if(str.indexOf(char)===str.lastIndexOf(char))
        return char;
}
}
console.log(nonrepeating("aaaaaabbbbcfddde"));