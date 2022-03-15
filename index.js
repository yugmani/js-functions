// Import stylesheets
import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

//function with default parameter
function showMessage(name, location = 'Los Angeles'){ // default for location
  name = name || "Yug";
    return `${name} lives in ${location}.`;
}

// function call
console.log(showMessage("Tara", "Tokyo"));  //Tara lives in Tokyo.
console.log(showMessage("Alan")); //Alan lives in Los Angeles.
console.log(showMessage("","Kathmandu"));

function friendGreeting(text){
  text = text || "Yug";
  return `Hello ${text}!`;
}

friendGreeting("Derren");
friendGreeting();

