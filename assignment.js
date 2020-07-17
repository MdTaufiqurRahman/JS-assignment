//feetToMile
function feetToMile(feet){
    if(feet<0){
        console.log("Value can't be negative");
        return;
    }
    return feet/5280;
}


//woodCalculator
function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed<0){
        console.log("Value can't be negative");
        return;
    }
    return chair + (table*3) + (bed*5);
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