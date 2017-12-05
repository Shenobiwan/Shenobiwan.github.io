var myGamePiece;
var myGamePiece2;
var myBackground;
var myObstacle;
var win;
var lose;

function startGame() {

 myObstacle = new component(80, 1000, "finish-line.png", 950, 0, "image"); 
    myGamePiece = new component(216, 133, "enterprisesmall.png", 10, 60, "image");
    myGamePiece2 = new component(216, 133, "borgshipsmall.png", 70, 250, "image");
    myBackground = new component(1920, 1080, "spacewallpaper.jpg", 0, 0, "background");
    win = new component(1000, 500, "youwin.jpg", 0, 0, "image");
    lose = new component(1000, 500, "youlost.jpg", 0, 0, "image");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        if (type == "background") {
            ctx.drawImage(this.image, 
                this.x + this.width, 
                this.y,
                this.width, this.height);
        }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        } 
 }
   this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if  (myright < otherright) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
if (myGamePiece.crashWith(myObstacle)) {
       win.update();
       ctx.font = "bold 30px monospace";
       ctx.fillText("You can't begin to imagine",10,25);
       ctx.fillText("the life you denied yourself...",30,60);
       ctx.font = "bold 60px monospace";
       ctx.fillStyle = "white";
       ctx.fillText(" YOU'VE WON!",280,470);
       myGameArea.stop(); 
        // if (myGameArea.stop) {
         // var play = document.getElementById("warpcore");
         // play.innerHTML = "PLAY AGAIN";
         // play.addEventListener("click", function () {
         //    startGame();
          //});
         // if(startGame) {
          // play.innerHTML = "TINKER WITH THE WARP CORE";                      
      } else if (myGamePiece2.crashWith(myObstacle)) {
       lose.update();
       ctx.font = "bold 30px monospace";
       ctx.fillStyle = "white";
       ctx.fillText("We will add your distinctiveness to our own.",10,25);
       ctx.fillText(" Welcome home... Locutus.",30,60);
       ctx.font = "bold 60px monospace";
       ctx.fillStyle = "white";
       ctx.fillText(" YOU'VE LOST!",280,470);
       myGameArea.stop();
    } else { 
    myGameArea.clear();
    myBackground.speedX = -.5;
    myBackground.newPos();    
    myBackground.update();
    myObstacle.update();
    myGamePiece.newPos();    
    myGamePiece.update();
    myGamePiece2.newPos();    
    myGamePiece2.update();
    }
  }  
function move(dir) {

    if (dir == "right") {
    var warpSpeed = (Math.random() * (2.5 - 0)) + 0;
    myGamePiece.speedX = warpSpeed;
    var warpSpeed2 = (Math.random() * (3 - 0)) + 0;
    myGamePiece2.speedX = warpSpeed2;
    }
}
function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}
