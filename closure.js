function closure(){
    let count=0;
    return function ()
    {
        return count++;
    }
}
const close=closure();
console.log(close());
console.log(close());
console.log(close());
console.log(close());
console.log(close());
