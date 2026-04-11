function removefalsy()
{
let arr=[1,2,3,NaN,false,undefined,4,""]
let newarr=arr.filter(Boolean);
console.log(newarr);
}
removefalsy();