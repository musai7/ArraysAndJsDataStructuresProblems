const ps = require("prompt-sync");
const prompt = ps();
let num = prompt("enter a number : ");
let primeFactArr =[];
let factors;
let index=0;
for(i=1;i<=num/2;i++){ 
    let count =0; 
    if(num%i == 0){
        for(j=1;j<=i;j++){
            if(i % j == 0){
                count++;
            }
        }
        if (count <=2 ){
            primeFactArr[index] =i;
            index++;
        }
    }
}
console.log("prime factors of : "+num+" is : ")
for(i = 0;i < primeFactArr.length;i++){
    console.log(primeFactArr[i])
}
