function debounce(fn,delay){
    let timer;
    return function(...args)
    {
       clearTimeout(timer);
       timer=setTimeout(()=>{
           fn.apply(this, args);
       },2000);
    }
}
function greet(name){
    let Hour=new Date().getHours();
    if(Hour<12)
    console.log(`Good Morning ${name}`);
    else if (Hour<18)
    console.log(`Good After Noon ${name}`);
    else 
    console.log(`Good Evening ${name}`);
}
   const debounceGreet=debounce(greet,2000);
   debounceGreet("Virat");