//Write a program to count the occurrences of each character in a string.
function occurrencesofcharacter(str){
    str=str.toUpperCase();
 let visited =Array(str.length).fill(false)
 for(let i=0;i<str.length;i++)
 { 
 if(visited[i]===true)
        continue;
    let count=0;
    for(let j=0;j<str.length;j++)
    {
        if(str[i]=== str[j])
        {   count++;
            visited[j]=true;
        }
    }
    console.log(`occurence of ${str[i]} = ${count}`);
 }
}
occurrencesofcharacter("EEEeeeeeeeTTTttttttYYyyyyyyUUuuuuuu");