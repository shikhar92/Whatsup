
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBKSKEeUdYUuYVJ9Qhvs4yW-4mwaunlnt8",
      authDomain: "tallygram-bed52.firebaseapp.com",
      databaseURL:"https://tallygram-bed52-default-rtdb.firebaseio.com/",
      projectId: "tallygram-bed52",
      storageBucket: "tallygram-bed52.appspot.com",
      messagingSenderId: "980774960984",
      appId: "1:980774960984:web:ad150faa4abd1841266f2d"
    };
    
    // Initialize Firebase 
firebase.initializeApp(firebaseConfig);

user_n=localStorage.getItem("usn");
document.getElementById("room_name").innerHTML="Welcome "+user_n+" ! ";

function addroom()
{

room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({

      purpose:"ADD NAME"
});
localStorage.setItem("room_name",room_name);
window.location="chat.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
x="<div class='room_name' id="+Room_names+" onclick='takeme(this.id)' >#"+Room_names+"</div><hr>   ";
document.getElementById("output").innerHTML+=x      
   });
 });

}

getData();

function takeme(name)
{

console.log(name);
localStorage.setItem("room_name",name);
window.location="chat.html";


}



user_name=localStorage.getItem("usn");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" ! ";
 

function logout()
{
localStorage.removeItem("usn")
localStorage.removeItem("room_name")
window.location="index.html";


}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
x="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=x;
      //End code
      });});}
getData();
function redirect(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat.html";
      
}