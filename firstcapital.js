function firstCapital(sentence)
{
    return sentence.split(" ").map(word=>
    {
      if(word===0)
        return word;
     return word.charAt(0).toUpperCase()+word.slice(1)
    }).join(" ")
}
console.log(firstCapital("my name is virat gangwar and i am learnig javascript"));