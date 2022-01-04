let arr = [];
let max=0;
let max2=0;
let min=1000;
let min2=1000;
for(i = 0;i < 10;i++){
    arr[i] = Math.floor(Math.random()*899+100);
    console.log(arr[i])
}
for (i=0;i<arr.length;i++){
    if(max < arr[i]){
        max2 = max;
        max = arr[i];
    }
    else if(max2<arr[i]){
         max2 = arr[i];
    }

    if(min > arr[i]){
        min2 = min;
        min = arr[i];
    }
    else if(min2>arr[i]){
         min2 = arr[i];
    }
}
console.log("Max = "+ max + " SecondMax : " +max2+ " and \nMin = " + min + "  SecondMin : " + min2)