//Write a program to count the number of vowels in a string.
function countvowel(str)
{
    let vowel="aieouAIEOU";
     let count=0;
      for(char of str){
        if(vowel.includes(char))
            count++;
      }
     console.log(`Total number of vowels = ${count}`)
}
countvowel("VirAt Gangwar");