const fibonacci = function(raw) {
    let processedValue = parseInt(raw);
    let a = 1
    let b = 0, temp;

    if(processedValue < 0) return "OOPS";

    while (processedValue > 0){
        temp = a;
        a = a + b;
        b = temp;
        processedValue--;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
