//Write a function to check if a number is prime.
function Primenumber(n){
   if(n<=1)
   {
    return false;
   }
   for (let i=2;i<=Math.sqrt(n);i++)
    {
    if(n%i===0)
    return false
           }
    return true; 
}
console.log(Primenumber(11));