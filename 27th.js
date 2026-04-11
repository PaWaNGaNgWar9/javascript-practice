//Write a program to remove all falsy values from an array.
//Example falsy values: false, 0, "", null, undefined, NaN
function removefalsy(arr)
{
    return arr.filter(Boolean);
}
console.log(removefalsy([1,2,false,0,"",3,4,5,6,7,null,undefined,NaN]));