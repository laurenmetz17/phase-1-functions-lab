const headquarters = 42;
const blockFeet = 264;

function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - headquarters); 
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * blockFeet;
}

function distanceTravelledInFeet(startBlock,endBlock) {
    return Math.abs(startBlock - endBlock) * blockFeet;
}

function calculatesFarePrice(startBlock,endBlock) {
    let distance = distanceTravelledInFeet(startBlock,endBlock);
    switch(true) {
        case distance <= 400:
            return 0;
        case distance > 400 && distance <= 2000:
            return ((distance - 400) * 2)/100;
        case distance > 2000 && distance <= 2500:
            return 25;
        case distance > 2500:
            return 'cannot travel that far'
    }
}