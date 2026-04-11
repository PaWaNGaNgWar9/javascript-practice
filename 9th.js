//Write a program to find the largest number in an array.
let arr=[1,2,4,5,6,7,8,976,5986];
let max=0;
for(let i=0;i<arr.length;i++)
     {
        if(arr[i]>max)
        {
            max=arr[i];
        }
     }
     
     
   console.log(max);