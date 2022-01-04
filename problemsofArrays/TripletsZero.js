const ps = require("prompt-sync");
const prompt = ps();
let size = parseInt(prompt("enter a number to check repeated two digit in range : "));
let arr = [];

for(i = 0;i < size;i++){
    arr[i] = parseInt(prompt("enter a number at index " + i + ": "));
}
console.log("triplets are :");
for(i=0;i<arr.length-2;i++){
    for(j = i + 1;j < arr.length-1;j++){
        for (k=j+1; k < arr.length;k++){
            if(arr[i]+arr[j]+arr[k] == 0){
                console.log(arr[i] + " " + arr[j] + " " + arr[k] )
            }
        }
    }
}
