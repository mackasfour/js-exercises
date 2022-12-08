const getTheTitles = function(books) {
    let bookNames = [];
    for(i = 0;i < books.length;i++) {
        bookNames.push(books[i].title);
    }

    return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
