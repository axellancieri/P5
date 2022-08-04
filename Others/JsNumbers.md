========================================================
<!-- Numbers instructions -->
========================================================
9e-6 // same as .90000
9e+6 // same as 900000

========================================================
<!-- parseFloat(), parseInt(), and the unary plus (+) operator. -->
========================================================
Parselfloat its used for numbers with . between them

parseInt for full items

typeof is used to check if an iteme is a number or a string

quickest way to assign a string to be a number is to put a + before the string or variable name

.length calculates amount of characters on a string


========================================================
<!-- math example exercise using strings nad js on html -->
========================================================
    alert("Let's do some math!");
    const firstNumber = prompt(`Give me a number`);
    const firstValue = parseFloat(firstNumber);
    const secondNumber = prompt(`Give me another one now!`);
    const secondValue = parseFloat(secondNumber);
    
    let message = '<h1> Math with the numbers ' + firstValue + ' and ' + secondValue +  '</h1>';
      message += firstValue + ' + ' + secondValue + ' = ' + (firstValue + secondValue) + '<br>';  
      message += firstValue + ' * ' + secondValue + ' = ' + (firstValue * secondValue) + '<br>';     
      message += firstValue + ' / ' + secondValue + ' = ' + (firstValue / secondValue) + '<br>';   
      message += firstValue + ' - ' + secondValue + ' = ' + (firstValue - secondValue);

          document.querySelector('body').innerHTML = message;

========================================================
<!-- Math Object -->
========================================================
Math.random() will generate a random number between 0 an 0.99
Math.round() iteem will be rounded up or down to an entire number
Math.floor() makes item be rounded to 0 decimals
Math.ceil() makes item be rounded to +1 with decimals
========================================================
<!-- Random Dice roll -->
========================================================
const dieRoll = Math.floor( Math.random() * 6 ) + 1;
console.log(`You rolled a ${dieRoll}.`);
========================================================
<!-- Math Object test -->
========================================================
// Collect input from a user

alert(`I'm going to ask you for 2 numbers, low one and high one!`);
const userLowNumber = prompt(`Give me your low number!`);      
const userHighNumber = prompt(`Give me a high number!`);
// Convert the input to a number

const numericalUserLowNumber = parseInt(userLowNumber);      
const numericalUserHighNumber = parseInt(userHighNumber);

// Use Math.random() and the user's number to generate a random number

if (numericalUserLowNumber >= 0 && numericalUserHighNumber) {
   const crazymath = Math.floor(Math.random() * (numericalUserHighNumber - numericalUserLowNumber + 1) ) + numericalUserLowNumber;
  // Create a message displaying the random number
  
  const msg = `<h2>Mothercucker, you got ${crazymath}, a number between ${userLowNumber} and ${userHighNumber}</h2>`;
   
  document.querySelector('main').innerHTML = msg;
 } else {
    console.log("Please insert a number. Try again.");
}
