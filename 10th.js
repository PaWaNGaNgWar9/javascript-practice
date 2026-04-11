//Write a program to find the second largest number in an array.
let arr=[20,40,60,90,50,10];
let tem;
arr.sort((a,b)=>a-b);
// for(let i=0;i<arr.length;i++)
// console.log(arr[i]);
let second_large = arr[arr.length - 2];
console.log(second_large);