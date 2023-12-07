const sumAll = function(initial_number, steps) {
    var sum = 0, number_to_increment = 0;
    if ((initial_number || steps) < 0 || typeof(initial_number) != "number" || typeof(steps) != "number"){
        return "ERROR"
    }

    if (initial_number < steps){
        number_to_increment = initial_number;
        number_for_loop = steps;
    }
    else {
        number_to_increment = steps;
        number_for_loop = initial_number;

    }
    for(i = 0; i < number_for_loop ; i++){
        sum += number_to_increment;
        number_to_increment += 1;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;