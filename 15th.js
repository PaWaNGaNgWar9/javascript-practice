//Write a program to merge two arrays and remove duplicates.
let a=[1,2,2,2,3,3,4,5,5,6,6,6]
let b=[9,9,9,9,9,8,8,8,8,8,7,7]
let c= [...a, ...b];
console.log(c);
// let unique = [...new Set(c)];
// console.log(unique);
let visited=Array(c.length).fill(false);
for(let i=0; i<c.length;i++)
{
    if(visited[i]===true)continue;
    console.log(c[i]);
    for(let j=i; j<c.length;j++)
    {
        if(c[i]===c[j])
        {
            visited[j]=true;
        }
    }
}