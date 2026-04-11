function countwords(sentence)
{
  return sentence.replace(/[^a-zA-Z0-9]+/g, ' ').trim().split(" ").map((word ,index)=>{
    word.toLowerCase();
    if(index===0)
        return word;
    return word.charAt(0).toUpperCase()+word.slice(1);
  }).join("");
}
console.log(countwords("my name is virat gangwar and i am learnig javascript"));