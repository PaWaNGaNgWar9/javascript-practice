//Write a program to implement FizzBuzz (classic interview question).
function FizzBuzz(arr)
{
    for(let i of arr)
    {
        if(i%3===0 && i%5===0 )
        {
            console.log("FizzBuzz");
        }
        else if(i%5===0)
        {
            console.log("Buzz");
        }
        else if ( i%3===0)
            console.log("Fizz");
        else 
            console.log(i);
    }
}
let a=[1,2,3,4,5,15,9,10,6,20];
FizzBuzz(a)