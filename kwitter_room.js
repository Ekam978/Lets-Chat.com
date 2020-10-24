// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBuaNrG5fk9sakeQFeoL_5IelnSldMu_eE",
      authDomain: "kwiter-fa08c.firebaseapp.com",
      databaseURL: "https://kwiter-fa08c.firebaseio.com",
      projectId: "kwiter-fa08c",
      storageBucket: "kwiter-fa08c.appspot.com",
      messagingSenderId: "916603245186",
      appId: "1:916603245186:web:52cd7030cd3e206c529a9b",
      measurementId: "G-DBP0K140R0"
    };
    // Initialize Firebase

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
