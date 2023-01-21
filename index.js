// Import stylesheets
import './style.css';


document.addEventListener('DOMContentLoaded', function() {
  console.log("Ready!");
}, false);



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

  var locationScore = 0;
  var qualityScore = 0;
  var amenitiesScore = 0;
  var communityScore = 0;

  const submit = document.getElementById('submit-button');

  submit.addEventListener('click', () => {
    locationScore = document.getElementById('location-score').value;
    qualityScore = document.getElementById('quality-score').value;
    amenitiesScore = document.getElementById('amenities-score').value;
    communityScore = document.getElementById('community-score').value;
    console.log(locationScore + " " + qualityScore + " " + amenitiesScore + " " + communityScore);
  });

