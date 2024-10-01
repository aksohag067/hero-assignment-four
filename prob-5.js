function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes)) {
        return "Invalid Input";
    }
    
    for (let i = 0; i < waitingTimes.length; i++) {
        if (typeof waitingTimes[i] !== 'number') {
            return "Invalid Input";
        }
    }

    if (typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }

    let avgTime = 0;
    if (waitingTimes.length > 0) {
        avgTime = Math.round(sum / waitingTimes.length);
    }

    let peopleLeft = serialNumber - waitingTimes.length - 1;

    let waitingTime = avgTime * peopleLeft;

    return waitingTime;
}

// let waitingTimes = [7, 8, 3, 4, 5];
// let serialNumber = "9";
// console.log(waitingTime(waitingTimes, serialNumber)); 

