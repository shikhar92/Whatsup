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














user_name=localStorage.getItem("usn");
room_name=localStorage.getItem("room_name");
function send()
{

msg=document.getElementById("Message").value;
firebase.database().ref(room_name).push({
name:user_name,message:msg,like:0
});
document.getElementById("Message").innerHTML="";

}
function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code
          console.log(firebase_message_id);
          console.log(message_data);
  name=message_data['name']
  message=message_data['message'];
  like=message_data['like'];
n1="<h4> "+name+"<img class='user_tick' src='tick.png'></h4>    ";
m1="<h4 class='message_h4'>"+message+"</h4>     ";
b1="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>     "; 
t1="<span class='glyphicon glyphicon-thumbs-up'> Like : "+like+"</span></button><hr>   "; 
total=n1+m1+b1+t1;
document.getElementById("output").innerHTML+=total
          //End code
        }
      });
    });
  }
  getData();

function updatelike(message_id)
{
console.log("likebuttonclicked"+message_id)
button_id=message_id;
likes=document.getElementById(button_id).value;
updatedlikes=Number(likes)+1;
console.log(updatedlikes);
firebase.database().ref(room_name).child(message_id).update({
like:updatedlikes
});


}





function logout()
{
localStorage.removeItem("usn")
localStorage.removeItem("room_name")
window.location="index.html";
}