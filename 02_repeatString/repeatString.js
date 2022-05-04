const repeatString = function(inputString, inputNum) {
    let concatString = "";

    if(inputNum < 0) return 'ERROR';

    for(i = 1; i <=inputNum; i++) {
        concatString += inputString;
    }

    return concatString;
};
 
// Do not edit below this line
module.exports = repeatString;
