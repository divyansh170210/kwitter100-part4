var firebaseConfig = {
  apiKey: "AIzaSyDrN13avnAfIq1VoG7agBNdQtTrxYhGA5I",
  authDomain: "lets-chet-web-app.firebaseapp.com",
  databaseURL: "https://lets-chet-web-app-default-rtdb.firebaseio.com",
  projectId: "lets-chet-web-app",
  storageBucket: "lets-chet-web-app.appspot.com",
  messagingSenderId: "149576988224",
  appId: "1:149576988224:web:06a32b881d1046e79351a5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name + "!";

function addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding user name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_message.html";
}

function getData() { firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
    console.log("Room name : "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_message.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}