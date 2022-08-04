========================================================
<!-- return value from a function -->
========================================================
function getRandomNumber() {
  const randomNumber = Math.floor( Math.random() * 6 ) + 1;  
  return (randomNumber);
}


console.log( getRandomNumber() );

// also can do

const dieRoll = getRandomNumber();
  
========================================================
<!-- Multiple return statements -->
========================================================
function isFieldEmpty() {
 const field = document.querySelector('#info');
 if (field.value === '') { // Can also delete the === '' and use ! before field.value and will check for conditional statement
   return true;
 } else {
  return false;
 }
} 

const fieldTest = isFieldEmpty();

if (fieldTest === true) { // same here you can take away the === true part
  alert('Please provide your information.');
}

function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}

console.log{10, 20, 'sq feet'};

========================================================
<!-- Function Declarations vs. Function Expressions -->
========================================================

// FUNCION DECLARATION - LOADS BEFORE ANY CODE IS EXECUTED
function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}
// FUNCION EXPRESSION
const getRandomNumber = function (upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}
// ARROW FUNCTION

const getRandomNumber = (upper) => {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
};

========================================================
<!-- JSDoc documentation -->
========================================================
/**
 * Calculates and returns the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle and unit of measure.
 */

function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}


--------

/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function numberClash(max = 100, min = 10) {
  
// Because the function gives 1 value as outcome of a math operation, I dont need to make a variable and to request a return, its implicit.
  if (isNaN(max) || isNaN(min) ) {
    throw Error(`Please make sure you're picking numbers`);
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Call the function and pass it different values


 console.log( numberClash(10, 2) );