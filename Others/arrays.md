========================================================
<!-- Arrays example -->
========================================================
const planets = [ 
  'Mercury',
  'Venus',
  'Earth',
  'Mars'
];

console.log(planetsp[0]);
console.log(planetsp[1]);
console.log(planetsp[2]);
console.log(planetsp[3]);

========================================================
<!-- add and remove items, also count how many there are -->
========================================================
const instruments = ['piano', 'drums', 'trumpet'];

instruments.push( 'guitar', 'violin' ); \\ With push we add on the start of the list
instruments.unshift( 'cowbell', 'tube'); \\ With unshift we add iteems at the end of the list
-

instruments.length; \\ This would show a number counting amount of items stored in var.

-
if we use instruments.pop; it'll state the last item on the console and then delete it
if we use instruments.shift; it'll state the first item on the console and then delete it

========================================================
<!-- Spread -->
========================================================
One of the main benefits of copying an array is that you preserve the values of the original array. For example, the original mathStudents and scienceStudents arrays remain unchanged (won't be mutated) if you decide to push or pop elements in and out of the copies of those arrays.

const mathStudents = [
  'Marty',
  'Jennifer',
  'Lorraine',
  'Goldie'
];

const scienceStudents = [
  'Emmett', 
  'Clara', 
  'Needles',
  'Strickland'
];

const mathStudentsCopy = [...mathStudents];
const scienceStudentsCopy = [...scienceStudents];

// This affects the copied arrays only
//  The original arrays remain unchanged
mathStudentsCopy.pop();
scienceStudentsCopy.push('Marvin');

Can also use it to stack different students names

const students = [...mathStudentsCopy, ...scienceStudentsCopy];
========================================================
<!-- loops -->
========================================================

const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight'
];

function createListItems(arr) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li> ${arr[i]} </li>`;
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist)}
  </ol>
`;

========================================================
<!-- Locate and join array elements -->
========================================================

const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;


if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( inStock.includes(search.toLowerCase()) ) {
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search.toLowerCase()) + 1 } on the list!`;
} else {
  message = `Sorry, we do not have <strong>${search}</strong>.`;
}

document.querySelector('main').innerHTML = `<p>${message}</p>`;