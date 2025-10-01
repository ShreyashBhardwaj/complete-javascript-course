// "use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can Drive");
*/

function logger() {
  console.log("Hello");
}

logger();

// Anonymous Function
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

console.log(calcAge(1999));

//Arrow Function

const calcAge1 = (birthYear) => 2025 - birthYear;
console.log(calcAge1(1999));

const calcAge2 = (birthYear, retirementAge) => {
  const age = 2025 - birthYear;
  return `Retirement Year Left based on Birth Year: ${birthYear} and Retirement Age: ${retirementAge} is ${
    retirementAge - age
  } when Age = ${age}`;
};

console.log(calcAge2(1999, 65));
