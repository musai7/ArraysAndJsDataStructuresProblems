const ps = require("prompt-sync");
const prompt = ps();
let num = parseInt(prompt("enter a number to check repeated two digit in range : "));
let arr =[];
let index=0;
for(i=11;i<num;i++){
    let temp =i;
    let res = 0;
    while(i != 0){
        let rem = i%10;
        res = res*10+rem;
        i = Math.floor(i / 10);
    }
    if(res == temp){
        arr[index] = res;
        index++;
    }
    i=temp;
}
for(i = 0;i < arr.length;i++){
    console.log(arr[i]);
}