const removeFromArray = function(...manyArgs) {
    //grab the main array
    let initialArray = manyArgs[0];
    
    //initiate empty array to push correct values to
    let finalArray = [];

    //arrow function for each item in initialArray, keep looping through
    initialArray.forEach((item) => {
        //if any other value passed after the array is present, don't push this value in initialArray to finalArray
        if (!manyArgs.includes(item)) {
            finalArray.push(item);
        }
      });

    return finalArray;
}; 

// Do not edit below this line
module.exports = removeFromArray;
