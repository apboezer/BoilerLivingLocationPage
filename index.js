// Import stylesheets
import './style.css';

// Write Javascript code!

//renaming to specific location name
var locName = 'placeholder';
var nameLabels = document.getElementsByClassName('location-name');
[].forEach.call(nameLabels, function (nameLabel) {
  nameLabel.innerHTML = locName;
});

//changing the image
var imgSource = 'https://i.ibb.co/r7Sw159/0-Stars.jpg'; //placeholder
var pageImg = document.getElementById('location-image');
pageImg.src = imgSource;
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
