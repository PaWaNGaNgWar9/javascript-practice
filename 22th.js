//Write a function to get the longest word in a sentence.
function longestword(sentence)
{
  let words=sentence.split(" ");
   console.log(words)
  let longest= "";
  for(let word of words)
  { 
    if(word.length>longest.length)
        longest = word;
  }

  return longest;
  
}
console.log(longestword("Hello My Name is Viratgangwar"));