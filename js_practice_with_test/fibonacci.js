const fibonacci = function(nth_number) {

    if(nth_number < 0){
        return "OOPS";
    }
    var fib_arr = [0,1];
    // based on the parameter, we will use it to calculate the nth fibonacci number

    // two pointers method?

    var left = 0, right = 1;

    for (i = 0; i < nth_number - 1 ; i++){
        fib_arr = [...fib_arr, fib_arr[left] + fib_arr[right]];
        left += 1;
        right += 1;
    }

    return fib_arr[nth_number];
};

// Do not edit below this line
module.exports = fibonacci;