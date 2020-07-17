//feetToMile
function feetToMile(feet){
   let mile=feet/5280;
   return mile;
}
let result=feetToMile(5280);
console.log(result);


//woodCalculator
function woodCalculator(chair,table,bed){
    let chairCount=chair*1;
    let tableCount=table*3;
    let bedCount=bed*5;
    let total=chairCount+tableCount+bedCount;
    return total;
}


//brickCalculator
function brickCalculator(numOfFloors){
    if(numOfFloors<=0){
        console.log("Number of floors can't be 0 or less")
        return;
    }

    else if(numOfFloors<=10)
        return numOfFloors*15*1000;

    else if(numOfFloors<=20)
        return 150000 + ((numOfFloors-10)*1000*12);

    else
        return 270000 + ((numOfFloors-20)*1000*10);
}


//tinyFriend
function tinyFriend(names){
    let shortest = names[0];
    for(let i=1; i<names.length; i++){
        if(names[i].length<shortest.length)
            shortest = names[i];
    }
    return shortest;
}