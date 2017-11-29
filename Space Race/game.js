var intro = document.getElementById("go");
intro.onclick = goScotty;

function goScotty() {
  document.getElementById("picard").style.visibility = "hidden";
  document.getElementById("introText").style.visibility = "hidden";
  document.getElementById("go").style.visibility = "hidden";
  document.getElementById("headline").style.visibility = "hidden";

 
  document.getElementById("borg").style.visibility = "visible";
  document.getElementById("enterprise").style.visibility = "visible";
  var list = document.getElementsByTagName("div")[2];
  list.style.backgroundColor = " ";
  list.style.backgroundImage = "url('https://avante.biz/wp-content/uploads/Deep-Space-Wallpapers/Deep-Space-Wallpapers-037.jpg')";
  document.getElementById("red").style.visibility = "visible";
  document.getElementById("redalertmsg").style.visibility = "visible";
  document.getElementById("redmsg").style.visibility = "visible";
}
