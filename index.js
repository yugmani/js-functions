// Import stylesheets
import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

//function with default parameter
// **********************************

//default parameter
function showMessage(name, location = 'Los Angeles') {
  // default for location
  name = name || 'Yug';
  return `${name} lives in ${location}.`;
}

// function call
console.log(showMessage('Tara', 'Tokyo')); //Tara lives in Tokyo.
console.log(showMessage('Alan')); //Alan lives in Los Angeles.
console.log(showMessage('', 'Kathmandu'));

function friendGreeting(text) {
  text = text || 'Yug';
  return `Hello ${text}!`;
}

console.log(friendGreeting('Derren')); //with argument
console.log(friendGreeting()); //without argument

function countwise(count) {
  // if count is undefined or null return 'invalid count'
  return count ?? 'Invalid count!';
}

console.log(countwise(101)); //101
console.log(countwise()); //Invalid count!

// Rewrite the function using '?' or '||'
// *******************************************

function checkAge(age) {
  age = age > 18 || confirm('Did parents allow you?');
}

function isAgeGreater(age) {
  age = age > 18 ? true : confirm('Did parents allow you?');
}

// console.log(checkAge());
// console.log(isAgeGreater(12));

// Function min(a, b)
// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
  return a < b ? a : b;
}

console.log(min(2, 5)); //2
console.log(min(1, 1)); //1
console.log(min(3, -1)); //-1

// Function pow(x, n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt('x? ', '');
let n = prompt('n? ', '');
if (n < 1) {
  alert('Try Again');
  let x = prompt('x? ', '');
  let n = prompt('n? ', '');
} else {
  console.log(pow(3, 2));
}

// console.log(pow(3, 3));
// console.log(pow(1, 100));
