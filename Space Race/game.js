var intro = document.getElementById("go");
var redButton = document.getElementById("redmsg");
intro.onclick = goScotty;
redButton.onlick = goGreen;

function goScotty() {
  document.getElementById("picard").style.visibility = "hidden";
  document.getElementById("introText").style.visibility = "hidden";
  document.getElementById("go").style.visibility = "hidden";
  document.getElementById("headline").style.visibility = "hidden";
  var list = document.getElementsByTagName("div")[2];
  list.style.backgroundColor = " ";
  list.style.backgroundImage = "url('spacerace.png')";
  document.getElementById("red").style.visibility = "visible";
  document.getElementById("redalertmsg").style.visibility = "visible";
  document.getElementById("redmsg").style.visibility = "visible";
}
function goGreen() {
   document.getElementById("red").style.visibility = "hidden";
  document.getElementById("redmsg").style.visibility = "hidden";
    document.getElementById("redalertmsg").style.visibility = "hidden";
   document.getElementById("green").style.visibility = "visible";
  document.getElementbyId("greenmsg").style.visibility = "visible";
  document.getElementbyId("greenalertmsg").style.visibility = "visible";
}
