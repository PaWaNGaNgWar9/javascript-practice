//Write a program to remove duplicates from an array.
const arr =[1,2,2,2,2,3,3,4,4,5,5,5,6,6,6,6,6]
     let unique = [...new Set(arr)];
    console.log(unique);
    // Second method
    const a=[1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4];
    let visited = Array(arr.length).fill(false);
    for(let i=0;i<a.length;i++)
    {
        if(visited[i]===true)continue;
        console.log(a[i]);
        for(let j=i;j<a.length;j++)
        {
            if(a[i]===a[j])
            {
                visited[j]=true;
            }
        }
    }