var gameAudio = new Audio('sound/game.m4a');
gameAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
gameAudio.play();

var levelRuning = false;

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var playerX = 0;
var playerY = 0;
var playerItem = 0;

var levelTiles;
var levelObstacles;
var levelMisc;
var levelInteractions;
var levelItems;
var levelInfo;
var level;

var infoTimer = 0;

var speed = 1;
var tileSize = 50;

var timeout = 0;
var timeoutUsed = 0;

function setup() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.getItem("level")==undefined){
      localStorage.setItem("level", 1);
    }
  }else{
  console.log("level will NOT be saved!");
  }
  level = localStorage.getItem("level");
  setupLevel(level);
  var KEYS = [];
   document.onkeydown = function(e) {
       KEYS[e.keyCode] = true;
       if(KEYS[82]){
         setupLevel(1);
         setInfo(0);
       }
   }

   document.onkeyup = function(e) {
       KEYS[e.keyCode] = false;
   }
  window.setInterval(function() {
    if(level==2){
      setInfo(4);
    }
    if(levelRuning){
      updatePlayer(KEYS);
      drawTiles(levelTiles);
      drawObstacles(levelObstacles);
      drawMisc(levelMisc);
      drawInteractions(levelInteractions);
      drawItems(levelItems);
      context.drawImage(playerFront, 500, 300, 50, 100);
      drawItemslots();
      drawInfo();
    }
  }, 10);

}

function setTilemap(level){
  levelTiles = level;
}
function setObstacles(level){
  levelObstacles = level;
}
function setMisc(level){
  levelMisc = level;
}
function setInteractions(level){
  levelInteractions = level;
}
function setItems(level){
  levelItems = level;
}
function setPlayerItem(item){
  playerItem = item;
}
function setInfo(info){
  levelInfo = info;
  infoTimer = 0;
}

function updatePlayer(keys){
  if(timeout==25){
    //up
    if(keys[38]||keys[87]){
      if(levelObstacles[playerY-1][playerX]==0){
        if(levelInteractions[playerY-1][playerX]==0){
          if(levelItems[playerY-1][playerX]!=0){
            playerItem = levelItems[playerY-1][playerX];
            levelItems[playerY-1][playerX] = 0;
            passPickupItemEvent(playerX, playerY-1);
          }
          playerY-=speed;
          timeoutUsed=1;
        }else{
          passInteractEvent(playerY-1, playerX);
        }
      }
    }
    //down
    if(keys[40]||keys[83]){
      if(levelObstacles[playerY+1][playerX]==0){
        if(levelInteractions[playerY+1][playerX]==0){
          if(levelItems[playerY+1][playerX]!=0){
            playerItem = levelItems[playerY+1][playerX];
            levelItems[playerY+1][playerX] = 0;
            passPickupItemEvent(playerX, playerY+1);
          }
          playerY+=speed;
          timeoutUsed=1;
        }else{
          passInteractEvent(playerY+1, playerX);
        }
      }
    }
    //right
    if(keys[39]||keys[68]){
      if(levelObstacles[playerY][playerX+1]==0){
        if(levelInteractions[playerY][playerX+1]==0){
          if(levelItems[playerY][playerX+1]!=0){
            playerItem = levelItems[playerY][playerX+1];
            levelItems[playerY][playerX+1] = 0;
            passPickupItemEvent(playerX+1, playerY);
          }
          playerX+=speed;
          timeoutUsed=1;
        }else{
          passInteractEvent(playerY, playerX+1);
        }
      }
    }
    //left
    if(keys[37]||keys[65]){
      if(levelObstacles[playerY][playerX-1]==0){
        if(levelInteractions[playerY][playerX-1]==0){
          if(levelItems[playerY][playerX-1]!=0){
            playerItem = levelItems[playerY][playerX-1];
            levelItems[playerY][playerX-1] = 0;
            passPickupItemEvent(playerX-1, playerY);
          }
          playerX-=speed;
          timeoutUsed=1;
        }else{
          passInteractEvent(playerY, playerX-1);
        }
      }
    }
    if(timeoutUsed==1){
      timeout=0;
      timeoutUsed=0;
    }
  }else{
    timeout++;
  }
}

function drawTiles(level){
  context.clearRect(0, 0, canvas.width, canvas.height)
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
        if(tile==4){
          tileImage = dark_dirt;
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

function drawObstacles(level){
  var drawX = 500 - (playerX*50);
  var drawY = 300 - (playerY*50) + 50;

  for(var i=0;level.length>i;i++){
    var row = level[i];
      for(var i2=0;row.length>i2;i2++){
        var obstacle = row[i2];
        var obstacleImage;
        if(obstacle==1){
          obstacleImage = wall;
        }
        if(obstacle==2){
          obstacleImage = openable_wall;
        }
        if(obstacle!=0){
        context.drawImage(obstacleImage, drawX, drawY, tileSize, tileSize);
        }

        drawX += tileSize;
      }
    drawX = 500 - (playerX*50);
    drawY += tileSize;
  }
}

function drawMisc(level){
  var drawX = 500 - (playerX*50);
  var drawY = 300 - (playerY*50) + 50;

  for(var i=0;level.length>i;i++){
    var row = level[i];
      for(var i2=0;row.length>i2;i2++){
        var misc = row[i2];
        var miscImage;
        if(misc==1){
          miscImage = controls_left;
        }
        if(misc==2){
          miscImage = controls_down;
        }
        if(misc==3){
          miscImage = controls_right;
        }
        if(misc==4){
          miscImage = controls_up;
        }
        if(misc!=0){
        context.drawImage(miscImage, drawX, drawY, tileSize, tileSize);
        }

        drawX += tileSize;
      }
    drawX = 500 - (playerX*50);
    drawY += tileSize;
  }
}

function drawInteractions(level){
  var drawX = 500 - (playerX*50);
  var drawY = 300 - (playerY*50) + 50;

  for(var i=0;level.length>i;i++){
    var row = level[i];
      for(var i2=0;row.length>i2;i2++){
        var interaction = row[i2];
        var interactionImage;
        if(interaction==1){
          interactionImage = machine_broken;
        }
        if(interaction==2){
          interactionImage = machine_fixed;
        }
        if(interaction!=0){
        context.drawImage(interactionImage, drawX, drawY, tileSize, tileSize);
        }

        drawX += tileSize;
      }
    drawX = 500 - (playerX*50);
    drawY += tileSize;
  }
}

function drawItems(level){
  var drawX = 500 - (playerX*50);
  var drawY = 300 - (playerY*50) + 50;

  for(var i=0;level.length>i;i++){
    var row = level[i];
      for(var i2=0;row.length>i2;i2++){
        var item = row[i2];
        var itemImage;
        if(item==1){
          itemImage = wrench;
        }
        if(item==2){
          itemImage = clock;
        }
        if(item!=0){
        context.drawImage(itemImage, drawX, drawY, tileSize, tileSize);
        }

        drawX += tileSize;
      }
    drawX = 500 - (playerX*50);
    drawY += tileSize;
  }
}

function drawItemslots(){
  if(playerItem==0){
    context.drawImage(itemslot_empty, 0, 0, 55, 55);
  }
  if(playerItem==1){
    context.drawImage(itemslot_wrench, 0, 0, 55, 55);
  }
}

function passInteractEvent(interacty, interactx){
  if(level == 1){
    onLevel1Interact(playerX, playerY, playerItem, interactx, interacty, levelTiles, levelObstacles, levelItems, levelMisc, levelInteractions);
  }
}

function passPickupItemEvent(pickupX, pickupY) {
  if(level == 1){
    onLevel1pickupItem(playerX, playerY, playerItem, pickupX, pickupY, levelTiles, levelObstacles, levelItems, levelMisc, levelInteractions);
  }
}

function drawInfo(){
  if(infoTimer==1000){
    levelInfo = 0;
  }else{
    console.log(levelInfo);
    infoTimer++;
    if(levelInfo==1){
      var infoImage = special_tool_needed;
    }
    if(levelInfo==2){
      var infoImage = fix_machine;
    }
    if(levelInfo==4){
      var infoImage=restart;
    }
    if(levelInfo!=0 && levelInfo!=3){
      context.drawImage(infoImage, (canvas.width/2)-250, canvas.height-110, 500, 100);
    }
  }
}

function setupLevel(levelSetup) {
  if(levelSetup==1){
    level=1;
    localStorage.setItem("level", 1);
    playerX = getLevel1StartX();
    playerY = getLevel1StartY();
    levelTiles = getLevel1Tilemap();
    levelObstacles = getLevel1Obstacles();
    levelMisc = getLevel1Misc();
    levelInteractions = getLevel1Interactions();
    levelItems = getLevel1Items();
    levelInfo = 0;
    player = 0;
    levelRuning = true;
  }
  if(levelSetup==2){
    level=2;
    localStorage.setItem("level", 2);
    playerX = getLevel2StartX();
    playerY = getLevel2StartY();
    levelTiles = getLevel2Tilemap();
    levelObstacles = getLevel2Obstacles();
    levelMisc = getLevel2Misc();
    levelInteractions = getLevel2Interactions();
    levelItems = getLevel2Items();
    levelInfo = 0;
    player = 0;
    levelRuning = true;
  }
}
