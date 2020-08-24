// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
// Get the button that opens the modal
var btn = document.getElementById("btn-sign-up");
var btn2 = document.getElementById("btn-sign-in");
var btn3 = document.getElementById("create-posts");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

function signup() {
  modal.style.display = "block";
  modal2.style.display = "none";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

btn3.onclick=function(){
  modal3.style.display="block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span1.onclick = function() {
  // modal.style.display = "none";
  // console.log("check");
  modal2.style.display = "none";
}

span2.onclick = function() {
  // modal.style.display = "none";
  console.log("check");
  modal3.style.display = "none";
}


