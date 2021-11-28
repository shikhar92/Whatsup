function login()
{
un=document.getElementById("user_name").value;
localStorage.setItem("usn",un);
window.location="kwitter_room.html";
}
