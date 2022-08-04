========================================================
<!-- BASIC JS -->
========================================================
<!-- ON HTML--><script src="js/script.js"></script> 
alert("Hello. Thanks for visiting!");
console.log("Hello from the consoel.");
document.write("<h1>Welcome to my web page.</h1>");

========================================================
<!-- Transform and Manipulate Strings -->
========================================================

const passphrase = 'Open Sesame';
console.log( passphrase.length );
console.log( passphrase.toUpperCase() );
console.log( passphrase.toLowerCase() );

========================================================
<!-- Combine Strings -->
========================================================
let firstName = prompt("What is your name?");
let lastName = "Lancieri";
let role = 'developer';
let msg = firstName + " " + lastName + ": " + role.toUpperCase();
console.log(msg);

========================================================
<!-- Display the Value of a String on a Page -->
========================================================

const stringToShout = prompt("What do you want to shout?");
const shout = stringToShout.toUpperCase();
const shoutMessage = `<h2> The message to shout is: ${shout}!!</h2>`;

document.querySelector('main').innerHTML = shoutMessage;

========================================================
<!-- Condiontal statements and Comparison operators -->
========================================================

const answer = prompt('Which planet is closest to the sun?');

if ( answer.toUpperCase() === 'MERCURY' ) {
  console.log("That's correct!");
} else {
  console.log("Sorry, that's incorrect.");
}

========================================================
<!-- Boolean Values -->
========================================================

let correctGuess = false;
const number = 6;
const guess = prompt('Guess a number between 1 and 10.');

if ( +guess === number ) {
  correctGuess = true;
}

if ( correctGuess === true) { <!-- the '=== true' is not necessary here actually given that the variable has already a condition false and true above -->
  console.log('You guessed the number!');
} else {
  console.log(`Sorry. The number was ${number}.`);
}
 
========================================================
<!-- && and || -->
========================================================
&& both conditions need to be true
|| both conditions need to be false
========================================================
<!-- Improved guessing number -->
========================================================
let correctGuess = false;
const number = 6; 
const guess = prompt('Guess a number between 1 and 10.');

if ( +guess === number ) {
  correctGuess = true;
} else if ( +guess < number ) {
  const guessMore = prompt(`Try again. The number is higher than ${guess}`);
  if ( +guessMore === number ) {
    correctGuess = true;
  }
} else if ( +guess > number ) {
  const guessLess = prompt(`Try again. The number is lower than ${guess}`);
  if ( +guessLess === number ) {
    correctGuess = true;
  }
}

if ( correctGuess ) {
  console.log("You guessed the number!");    
} else {
  console.log(`Sorry. The number was ${number}.`);  
}


