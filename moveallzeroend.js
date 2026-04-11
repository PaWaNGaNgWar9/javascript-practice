function movezerointheend()
{
  let arr=[1,2,0,9,0,8,6,0,0,6,0,0,0,0,7];
  let a= arr.filter(item=>item!=0).concat(arr.filter(item=>item===0));
  console.log(a)

}
movezerointheend();