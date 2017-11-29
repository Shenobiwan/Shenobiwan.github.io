var intro = document.getElementbyId("go");
intro.onclick = goScotty;

function goScotty() {
  document.getElementbyId("picard").style.visibility = "hidden";
  document.getElementbyId("introText").style.visibility = "hidden";
  document.getElementbyId("go").style.visibility = "hidden";
 
 document.body.style.backgroundImage = url("http://avante.biz/wp-content/uploads/Deep-Space-Wallpapers/Deep-Space-Wallpapers-037.jpg");
  document.getElementbyId("borg").style.visibility = "visible";
  document.getElementbyId("enterprise").style.visibility = "visible";
    alert("This is being called");
}
