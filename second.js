//Write a program to find the sum of array element.
function sumofarray(n)
{
let  arr =[];
for( let i=1;i<=n;i++)
{
    arr.push(i);
}
let sum=arr.reduce((acc,cur)=>acc+cur,0)
console.log(sum);
}
sumofarray(50);