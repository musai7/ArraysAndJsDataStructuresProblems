let arr =[];
for(i = 0;i < 10;i++){
    arr[i] = Math.floor(Math.random()*899+100);
    console.log(arr[i])
}
console.log("\n");
arr.sort();
for(i=0;i < arr.length;i++){
    console.log(arr[i]);
}
console.log("second max : " + arr[arr.length-2] + " and Second Min : " + arr[1])