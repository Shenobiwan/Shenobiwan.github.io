var intro = document.getElementById("go");
intro.onclick = goScotty;

function goScotty() {
  document.getElementById("picard").style.visibility = "hidden";
  document.getElementById("introText").style.visibility = "hidden";
  document.getElementById("go").style.visibility = "hidden";
 
 document.body.style.backgroundImage = "url(https://avante.biz/wp-content/uploads/Deep-Space-Wallpapers/Deep-Space-Wallpapers-037.jpg)";
  document.getElementById("borg").style.visibility = "visible";
  document.getElementById("enterprise").style.visibility = "visible";
  var list = document.getElementsByTagName("div")[1];
  list.getElementsByTagName("div")[1].backgroundColor = " ";
  
    alert("This is being called");
}
