//Write a function to flatten a nested array.
//Example: [1, [2, [3]], 4] → [1, 2, 3, 4]
function flaten(arr)
{
    console.log(arr.flat().flat().flat());
}
let a =[1, [2,[ [3]], 4]];
flaten(a);