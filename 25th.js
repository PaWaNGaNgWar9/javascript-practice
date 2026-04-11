//Write a function to generate the Fibonacci series.
function Fibonacci(n)
{
 let a=0;
 let b=1;
console.log(a+"\n"+b);
for(let i=1;i<=n;i++)
{
       let next = a+b;
       console.log(next);
       a=b;
       b=next;
}
}
Fibonacci(10);