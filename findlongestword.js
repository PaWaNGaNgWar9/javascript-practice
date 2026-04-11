function findlongestword(str)
{
    let words=str.split(" ");
    console.log(words);
    let longest=""
    for(let word of words)
    {
        if(word.length>longest.length)
            longest=word;
    }
    console.log(longest);
}
findlongestword("My Name is Viratgangwar");