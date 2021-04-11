 // Initialize 
 var firebaseConfig = {
    apiKey: "AIzaSyCR8eHap8FCdoPfHfInGHDVHJa9a4-3vXU",
    authDomain: "kwitter-app-88b17.firebaseapp.com",
    databaseURL: "https://kwitter-app-88b17-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-88b17",
    storageBucket: "kwitter-app-88b17.appspot.com",
    messagingSenderId: "295066674273",
    appId: "1:295066674273:web:81d20f15a99c0edb867620"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS
function addUser() {
    username = document.getElementById("username").value;
    firebase.database().ref("/").child(username).update({
        purpose: "addinguser"
    });
}