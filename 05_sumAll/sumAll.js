const sumAll = function(lowerValue, higherValue) {
    //Ensure all passed values are positive integers (probably not the most efficient check)
    if(!Number.isInteger(lowerValue) || !Number.isInteger(higherValue) || lowerValue < 0 || higherValue < 0) {
        return("ERROR");
    }

    //check lowerValue and higherValue are appropriately assigned
    if (lowerValue > higherValue) {
        const holding = lowerValue;
        lowerValue = higherValue;
        higherValue = holding;
    }

    //initialise a variable to sum values too
    let sum = 0;

    for(let i = lowerValue; i <= higherValue; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
 