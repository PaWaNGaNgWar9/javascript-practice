//frequency of an array..........
const arr=[1,2,2,2,2,3,3,3,3];
let visited =Array(arr.length).fill(false);
for(let i=0;i<arr.length;i++)
{ 
    let count=0;
    if(visited[i]===true)continue;
    for(let j=i;j<arr.length;j++)
    {
         if(arr[i]===arr[j])
          {  count++;
            visited[j]=true;}
    
    }
    console.log(`fequency of ${arr[i]} =${count}`);
}