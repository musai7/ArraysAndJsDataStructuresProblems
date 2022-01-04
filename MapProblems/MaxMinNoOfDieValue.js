let diceMap = new Map();
let value =0;
let exit = true;
 while(exit){
    let dieKey = Math.floor(Math.random()*6+1);
    if(diceMap.get(dieKey) != null){
        value = diceMap.get(dieKey);
    }
    diceMap.set(dieKey,value+1);
    for(let [keys,values] of diceMap){
        if(diceMap.get(keys) == 10){
            exit =false;
            console.log("maximum times getting die number : \n"+"key : "+keys + " value : " + values);
        }
    }
 }
 console.log("\n");
 let min=11;
 let key;
 let valTwo =0;
 for(let [keys,values] of diceMap){
    valOne = diceMap.get(keys)
    if(min>valOne){
        min = valOne;
        key = keys;
    }
    console.log("key : "+keys + " value : " + values);
}
console.log("\n");
value = min;
console.log("minimum times getting die number : \n"+ "key : " + key + " value : " + min);