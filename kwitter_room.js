
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRgCclLCCKlHM88Qvq1ICs4RVS3QFoa4k",
  authDomain: "schoolwebsite-d6df6.firebaseapp.com",
  databaseURL: "https://schoolwebsite-d6df6-default-rtdb.firebaseio.com",
  projectId: "schoolwebsite-d6df6",
  storageBucket: "schoolwebsite-d6df6.appspot.com",
  messagingSenderId: "868662500992",
  appId: "1:868662500992:web:cdf480deff98e4816b5065"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";



console.log(user_name); 


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() 
{  
  firebase.database().ref("/").on('value', function(snapshot) 
  {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
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