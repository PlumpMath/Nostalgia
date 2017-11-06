var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var level1 = [[1,2,3], [2,3,1]];

var tileSize = 16;

var grass = new Image();
grass.src = "../../images/tiles/grass.png";

var dirt = new Image();
dirt.src = "../../images/tiles/dirt.png";

var sand = new Image();
sand.onload = drawLevel(level1);
sand.src = "../../images/tiles/sand.png";

function drawLevel(level){
  var drawX = 0;
  var drawY = 0;

  for(var i=0;level.length>i;i++){
    var row = level1[i];
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
