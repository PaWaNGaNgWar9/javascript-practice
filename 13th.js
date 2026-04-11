//Write a program to find the missing number in an array from 1 to N.
function missingnumber(a,n)
{
    let sum=0;
    sum=(n*(n+1))/2;
    let asum=0;
   for(let i=0;i<a.length;i++)
   {
     asum+=a[i];
   }
   let miss=sum-asum;
   console.log(miss);
}
const arr=[1,3,4,6,5,7,8,9,10]
missingnumber(arr,10);