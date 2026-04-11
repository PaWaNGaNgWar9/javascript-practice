function countwords(sentence)
{
 let words=sentence.split(" ");
   let count=0;
    for(let i=0;i<words.length;i++)
    {
        count++
    }
    return count;
}
console.log(countwords("my name is virat gangwar and i am learnig javascript"));