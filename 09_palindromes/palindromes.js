const palindromes = function (input) {
    modifiedString = input.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

    if(modifiedString === modifiedString.split('').reverse().join('')) {
        return true;
    }   else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
