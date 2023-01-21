// Import stylesheets
import './style.css';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  addDoc,
  collection,
  getFirestore,
  addDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  setDoc,
  where,
  getDocs
} from 'firebase/firestore';

let db;


// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyC05K7n9cStnFrTQ06AOpQt7cAHyLZOf3Q',

  authDomain: 'boilerliving.firebaseapp.com',

  projectId: 'boilerliving',

  storageBucket: 'boilerliving.appspot.com',

  messagingSenderId: '1020361690137',

  appId: '1:1020361690137:web:75d2525326961bd9c22e88',

  measurementId: 'G-CT32RLKFEJ',
};

initializeApp(firebaseConfig);
db = getFirestore();

//get the user id of the person who clicked into here

getPost();

async function getPost() {

const postRef = db.collection('posts');
const querySnapshot = await postRef.orderBy('description', 'desc').limit(1).get()
if (querySnapshot.docs.length > 0) {
    const doc = querySnapshot.docs[0];
    console.log('Document data:', doc.data());
}else{
  console.log("no");
}
};




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

