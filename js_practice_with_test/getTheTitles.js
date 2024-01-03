const getTheTitles = function(books) {
    //Your job is to write a function that takes the array and returns an array of titles:
    // use the filter function
    
    const titles = books.map(book => (
        book.title
    ));
    
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;