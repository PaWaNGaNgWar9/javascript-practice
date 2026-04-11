function intersection()
{
 let a=[1,3,1,4,5,6]
 let b=[4,5,6,7,8,9,10]
 let c=[]
 for(let i=0;i<a.length;i++)
 {
    for(let j=0;j<b.length;j++)
    {
        if(a[i]===b[j])
        {
            c.push(b[j]);
        }
    }
 }
 console.log(c);

}
intersection();