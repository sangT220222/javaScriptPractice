const findTheOldest = function(people) {
// Given an array of objects representing people with a birth and death year, return the oldest person.

const ordered = people.sort((a, b) => {
    // Calculate absolute differences or consider current year if yearOfDeath is not present
    const absDiffA = a.yearOfDeath ? Math.abs(a.yearOfDeath - a.yearOfBirth) : Math.abs(new Date().getFullYear() - a.yearOfBirth);
    const absDiffB = b.yearOfDeath ? Math.abs(b.yearOfDeath - b.yearOfBirth) : Math.abs(new Date().getFullYear() - b.yearOfBirth);
  
    return absDiffB - absDiffA;
  });

return ordered[0];

};

// Do not edit below this line
module.exports = findTheOldest;