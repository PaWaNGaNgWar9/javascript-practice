function getuser()
{
    return  new Promise((resolve)=>{
        setTimeout(()=>
       { 
           resolve({id:1, name:"Virat"});
           },1000 );
    });
}
function Postdata(userID)
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            resolve(["post1", "post2"]);
        },1000);
    
    });
}
async function fetchdata()
{
    let user=await getuser();
    console.log("User",user)
    
    let post=await Postdata();
    console.log("post", post);
}
fetchdata();