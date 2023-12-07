const reverseString = function(text) {
    let i = text.length - 1;
    let new_string = "";
    for (i; i > -1; i--)
    {
        new_string += text[i];
    }
    return new_string

    //return text.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;