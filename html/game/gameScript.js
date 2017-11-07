var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

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
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var tileSize = 10;

var grass = new Image();
var dirt = new Image();
var sand = new Image();
grass.onload = function () {
    dirt.onload = function () {
        sand.onload = drawLevel.bind(this, level1);
        sand.src = "../../images/tiles/sand.png";
    }
    dirt.src = "../../images/tiles/dirt.png";
}
grass.src = "../../images/tiles/grass.png";

function drawLevel(level){
  var drawX = 0;
  var drawY = 0;

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
    drawX = 0;
    drawY += tileSize;
  }
}
