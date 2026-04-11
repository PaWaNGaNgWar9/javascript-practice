//Write a program to find the intersection of two arrays.
function intersection(arr,arr1)
{
 let set1 = new Set(arr1);
 return arr.filter((item)=> set1.has(item))
}
let a=[1,2,3,4,5,6]
let b=[4,5,6,7,8,8,9,1];
console.log(intersection(a,b));