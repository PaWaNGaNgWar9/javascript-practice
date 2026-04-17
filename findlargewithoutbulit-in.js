function findmax() {
    let arr=[6,8,3,30,5,9,10];
    let srt=arr.sort((a,b)=>a-b);
     console.log(srt);
    for(let i=0;i<arr.length;i++)
    { let temp=0;
    for(let j=i;j<arr.length;j++)
        {if(arr[i]>arr[i+1])
           { temp=arr[i+1];
             arr[i+1]=arr[i];
             arr[i]=temp;}}
             return arr[arr.length-1]
    }
    console.log(arr);
    console.log(arr.length)
}
console.log(findmax());