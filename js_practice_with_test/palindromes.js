const palindromes = function (text) {
    // Use a regular expression to replace non-alphabetic characters with an empty string
    const new_text = text.toUpperCase().replace(/[^a-zA-Z]/g, '');
    return new_text.split('').reverse().join('') == new_text
};
// console.log(palindromes("fwew !! erf!,32f w.f"))
// Do not edit below this line
module.exports = palindromes;