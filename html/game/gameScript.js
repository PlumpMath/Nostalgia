var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var playerX = 0;
var playerY = 0;
var speed = 10;
var level1 = [
  [1,1,3,3,2,2,2,2,2,2,2,2,3,3,1,1,1,1,1],
  [1,1,3,3,2,2,2,2,2,2,2,2,3,3,1,1,1,1,1],
  [1,3,3,2,2,2,2,2,2,2,2,2,3,3,1,1,1,1,1],
  [1,3,3,2,2,2,2,2,2,2,2,2,3,3,1,1,1,1,1],
  [1,3,3,2,2,2,2,2,2,2,2,2,3,3,1,1,1,1,1],
  [1,3,3,2,2,2,2,2,2,3,3,3,3,3,1,1,1,1,1],
  [1,1,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1],
  [1,1,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var tileSize = 50;

var grass = new Image();
var dirt = new Image();
var sand = new Image();
var player = new Image();
grass.onload = function () {
    dirt.onload = function () {
        sand.onload = function() {
          player.onload = setup.bind(this);
          player.src="../../images/game/player.png";
        }
        sand.src = "../../images/tiles/sand.png";
    }
    dirt.src = "../../images/tiles/dirt.png";
}
grass.src = "../../images/tiles/grass.png";

function setup(){
  window.addEventListener("keypress", function(e) {
    if(e.keyCode==39){
      playerX-=speed;
    }else if(e.keyCode==37){
      playerX+=speed;
    }else if(e.keyCode==38){
      playerY+=speed;
    }else if(e.keyCode==40){
      playerY-=speed;
    }
  }, false);

  window.setInterval(function() {
    drawLevel(level1);
    context.drawImage(player, 500, 300, tileSize + 200, tileSize + 200);
  }, 10);
}
function drawLevel(level){
  context.clearRect(0, 0, canvas.width, canvas.height);
  var drawX = playerX - 50;
  var drawY = playerY - 50;

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
      context.drawImage(tileImage, drawX, drawY, tileSize, tileSize);

      drawX += tileSize;
    }
    drawX = playerX - 50;
    drawY += tileSize;
  }
}
