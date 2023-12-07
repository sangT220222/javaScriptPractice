const removeFromArray = function(array, ...args) {
    const newArray = [];
    // use forEach to go through the array
  array.forEach((item) => {
    console.log(args)
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray
};


let ans = removeFromArray([1,2,3,4,5], 1,2)
console.log(ans)

let example = [1,2,3,4,5,6,7,8,9,10]
let second = [...example, 11, 12 ,13 ,14]

let obj = {
    "name": "ts",
    "surname": "as"
}

let response = {
    "address": "123 street"
}


console.log(obj)
// Do not edit below this line
module.exports = removeFromArray;