//Write a program to find the factorial of a number.
function factorial(n)
{
    let fact=1;
    for(let i=1;i<=n;i++)
    {
          fact=fact*i;
    }
    console.log(fact);
}
factorial(5);