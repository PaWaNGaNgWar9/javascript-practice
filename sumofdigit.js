let n=1234555555;
let  str=n.toString();
let sum=0;
for(let digit of str)
{
  sum+=Number(digit);
}
console.log(sum);