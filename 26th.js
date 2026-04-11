//Write a function to find the sum of digits of a number.
//Example: 1234 → 10
function sumofnumber(n)
{  
    let sum=0;
    while(n>0)
    {
       rem =n%10//1
       sum=sum+rem;
       n=Math.floor(n/10);
       //console.log(n);
       
    }
    return sum;
}
console.log(sumofnumber(111));
function secondmathed(n)
{
   let a = n.toString();
    let str = a.split("");
    let sum =0;
    for(let digit of str)
    {
        sum += Number(digit);
    }
    return sum;
}
console.log(sumofnumber(3333));
