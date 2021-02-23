var firebaseConfig = {
    apiKey: "AIzaSyBpzSHQUWoTlP6mvjRNMfyCC791QUkCol4",
    authDomain: "kwitter-b8b1d.firebaseapp.com",
    databaseURL: "https://kwitter-b8b1d-default-rtdb.firebaseio.com",
    projectId: "kwitter-b8b1d",
    storageBucket: "kwitter-b8b1d.appspot.com",
    messagingSenderId: "429025175109",
    appId: "1:429025175109:web:7de58dfcb06e1c6b83e52c",
    measurementId: "G-NWEJZXBJT6"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}