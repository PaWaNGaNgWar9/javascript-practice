
 function findtarget(){
    let target=9;
    let arr=[1,2,3,7,5,10];
    let map=new Map()
    for(let i=0;i<arr.length;i++)
    {
        let need=target-arr[i];
        if(map.has(need))
        {
            console.log( [map.get(need),i]);}

         map.set(arr[i],i);
    }
       
    }
    findtarget();
