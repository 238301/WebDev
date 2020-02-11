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
