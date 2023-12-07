const repeatString = function(string,number) {
  if(number < 0) {
    return "ERROR"
  }
  let i = 0;
  let new_string = "";
  for (i; i<number; i++)
  {
    new_string += string;
  }
  return new_string

  
};

// Do not edit below this line
module.exports = repeatString;