// Import stylesheets
import './style.css';

// Write Javascript code!

//renaming to specific location name
const locName = 'placeholder';
const appDiv = document.getElementById('app');
var nameLabels = document.getElementsByClassName('location-name');
[].forEach.call(nameLabels, function (nameLabel) {
  nameLabel.innerHTML = locName;
});
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
