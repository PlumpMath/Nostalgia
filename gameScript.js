var myAudio = new Audio('sound/game.m4a');
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();


var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var playerX = 0;
var playerY = 0;

var speed = 1;
var tileSize = 50;

var level1Tiles = getLevel1Tilemap();

var grass = new Image();
var dirt = new Image();
var sand = new Image();
var playerFront = new Image();
grass.onload = function () {
    dirt.onload = function () {
        sand.onload = function() {
          playerFront.onload = setup.bind(this);
          playerFront.src="images/game/player_front.png";
        }
        sand.src = "images/tiles/sand.png";
    }
    dirt.src = "images/tiles/dirt.png";
}
grass.src = "images/tiles/grass.png";

function setup(){
  var timeout = 0;
  //setup level 1 location
  playerX = getLevel1StartX();
  playerY = getLevel1StartY();
  var obstacles = getLevel1Obstacles();
  var KEYS = [];
   document.onkeydown = function(e) {
       KEYS[e.keyCode] = true;
   }

   document.onkeyup = function(e) {
       KEYS[e.keyCode] = false;
   }
  window.setInterval(function() {
    drawTiles(level1Tiles);
    if(timeout == 25){
      if(KEYS[39]){
        if(obstacles[playerY][playerX]!=0){
          //?
        }else{
          playerX+=speed
        }
      }
      if(KEYS[37]){
        if(obstacles[playerY][playerX-1]!=0){
          //?
        }else{
          playerX-=speed
        }
      }
      if(KEYS[38]){
        if(obstacles[playerY-1][playerX]!=0){
          //?
        }else{
          playerY-=speed
        }
      }
      if(KEYS[40]){
        if(obstacles[playerY+1][playerX]!=0){
          //?
        }else{
          playerY+=speed
        }
      }
      timeout = 0;
    }else{
      timeout++;
    }
    context.drawImage(playerFront, 500, 300, 50, 100);
  }, 10);
}


function drawTiles(level){
  context.clearRect(0, 0, canvas.width, canvas.height);
  var drawX = 500 - (playerX*50);
  var drawY = 300 - (playerY*50) + 50;

  for(var i=0;level.length>i;i++){
    var row = level[i];
      for(var i2=0;row.length>i2;i2++){
        var tile = row[i2];
        var tileImage;
        if(tile==1){
          tileImage = grass;
        }
        if(tile==2){
          tileImage = dirt;
        }
        if(tile==3){
          tileImage = sand;
        }
        if(tile!=0){
        context.drawImage(tileImage, drawX, drawY, tileSize, tileSize);
        }

        drawX += tileSize;
      }
    drawX = 500 - (playerX*50);
    drawY += tileSize;
  }
}
