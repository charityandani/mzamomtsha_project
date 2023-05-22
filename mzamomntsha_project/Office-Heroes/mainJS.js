//Popup for Donations
$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  });


//Scroll magic for scrolling back to top
  const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (windows.pageYOffset > 100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
});


//Nav JS
var mainListDiv = document.getElementById("mainListDiv"),
mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function() {
    "use strict";

    mainListDiv.classList.toggle("show-list");
    mediaButton.classList.toggle("active");
}

function show(){
  alert("Mzamomtsha welcomes YOU!");
}

//Navbar color changer
//$("a.color_changer").click(function() {
   // $("a.color_changer").css("background-color", "transparent")
   // $(this).css("background-color", "red");
//});

//function changeColor(id) {
  //  var tabs = document.getElementsByClassName('color_changer')
    //for (var i = 0; i < tabs.length; ++i) {
      //  var item = tabs[i];
        //item.getElementsByClassName.backgroundColor = (item.id == id) ? "transparent" : "blue";
    //}
//}

//function colorChange(evt, cityName) {
  //  var i, x, tablinks;
    //x = document.getElementsByClassName("text-box");
    //for (i = 0; i < x.length; i++) {
     //   x[i].style.display = "none"
    //}
    //tablinks = document.getElementsByClassName("tablink");
    //for (i = 0; i < x.length; i++) {
    //    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    //}
    //document.getElementById(cityName).style.display = "block";
    //evt.currentTarget.className += " w3-red";
//}

const form = document.querySelector("form");
const nameInput = document.querySelector('input[name="firstName"]');

const validateInputs = () => {
  if(!nameInput.value) {
    nameInput.nextElementSibling.classList.remove("hidden");
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

//function for QR code popup
function viewQR() {
  window.open("./codeQR.png", "Donate", "width=650,height=650");
};

//function for LOGIN code popup
function viewLogin() {
  window.open("./poplogin.html", "Login", "width=650,height=650");
};