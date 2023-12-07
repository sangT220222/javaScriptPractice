const convertToCelsius = function(number) {
    var celsius = (number - 32) * (5/9)
    celsius = parseFloat(celsius.toFixed(1));

    return celsius
};

const convertToFahrenheit = function(number) {
    var fahrenheit = (number * (9/5)) + 32;
    fahrenheit = parseFloat(fahrenheit.toFixed(1));

    return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};