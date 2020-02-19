function changeText() {
    document.getElementById("textChange").innerHTML = "<h1>  Thanks for liking my Webpage";
}
var space = "   ";
var pos = 0;
var msg = "You are now wasting your time reading this message.";

function Scroll() {
    document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);

    pos++;
    if (pos > msg.length) pos = 0;
    window.setTimeout("Scroll()", 0);
}
Scroll();


function allCaps() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function typeAlert() {
  alert("You pressed a key inside the input field");
}
function whichElement(e) {
  var targ;
  if (!e) {
    var e = window.event;
  }
  if (e.target) {
    targ=e.target;
  } else if (e.srcElement) {
    targ=e.srcElement;
  }
  var tname;
  tname = targ.tagName;
  alert("You clicked on a " + tname + " element.");
}

function confirmInput() {
  fname = document.forms[0].fname.value;
  alert("Hello " + fname + "! You will now be redirected to Endless Horse"); <!-- CHANGE TO DIFFRENT WEBSITE-->
}
function fastCap() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
function coordinates(event) {
  document.getElementById("demo").innerHTML = "X = " + event.screenX + "<br>Y = " + event.screenY;
}
function isKeyPressed(event) {
  var text = "The shift key was NOT pressed!";
  if (event.shiftKey == 1) {
    text = "The shift key was pressed!";
  }
  document.getElementById("shift").innerHTML = text;
}
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function windowSize() {
  var w = window.outerWidth;
  var h = window.outerHeight;
  var txt = "Window size: width=" + w + ", height=" + h;
  document.getElementById("resize").innerHTML = txt;
}