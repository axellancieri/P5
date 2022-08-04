========================================================
<!--While loop-->
========================================================
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0;

while ( counter < 10) {
  console.log( `The random number is ${getRandomNumber(10)}`);
  counter += 1;
}
========================================================
<!-- Do while --> 
========================================================
\\ He netionedthat diff between do while and while is that do while always does the condition once before checking on the while code block
function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let counter = 0;
do {
  console.log( `The random number is ${getRandomNumber(10)}`);
 counter += 1;   <!-- Can also use ++ that's called increment operator. Also we were explained decrement operator when using -- after the variable to do minus 1. -->
} while ( counter < 10 );
========================================================
<!-- For loop-->
========================================================
The `for` loop is a more compact variation of the while loop, with similar parts, and it's useful when you know how many times you want to repeat an action.

Using exampel above..

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for ( counter = 0;  counter < 10; counter++ ) {
  console.log( `The random number is ${getRandomNumber(10)}`);
}
========================================================
<!-- Improved guessing number -->
========================================================
const secretWord = 'tomato';
let message = 'Access denied :(';

for ( let i = 5; i >= 1; i-- ) {
  let guess = prompt(`Enter the secret word. You have ${i} tries.`);
  if ( guess === secretWord ) {
    message = 'Welcome to the secret loop world!';
    break;
  }
}

alert(message);
========================================================
<!-- Improved guessing number -->
========================================================



