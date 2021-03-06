var level1Tilemap = [
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [2,1,1,1,1,1,1,2,3,3,3,3,3,3,2],
  [2,1,1,1,1,1,1,2,3,3,3,3,3,3,2],
  [2,1,1,1,1,1,1,2,3,3,3,3,3,3,2],
  [2,1,1,1,1,1,1,1,3,3,3,3,3,3,2],
  [2,1,1,1,1,1,1,2,3,3,3,3,3,3,2],
  [2,1,1,1,1,1,1,2,3,3,3,3,3,3,2],
  [2,2,2,2,0,2,2,2,2,2,3,2,2,2,2],
  [2,4,4,4,4,4,4,2,2,2,2,2,2,2,2],
  [2,4,4,4,4,4,4,2,2,2,2,2,2,2,2],
  [2,4,4,4,4,4,4,2,2,2,2,2,2,2,2],
  [2,4,4,4,4,4,4,2,2,2,2,2,2,2,2],
  [2,4,4,4,4,4,4,2,2,2,2,2,2,2,2],
  [2,4,4,4,4,4,4,2,2,2,2,2,2,2,2],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var level1Obstacles = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,2,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var level1Misc = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,3,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,4,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,2,3,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,4,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var level1Interactions = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var level1Items = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

var level1StartingX = 4;
var level1StartingY = 4;

function getLevel1Tilemap() {
  return level1Tilemap;
}

function getLevel1StartX(){
  return level1StartingX;
}

function getLevel1StartY(){
  return level1StartingY;
}

function getLevel1Obstacles(){
  return level1Obstacles;
}

function getLevel1Misc(){
  return level1Misc;
}

function getLevel1Interactions(){
  return level1Interactions;
}

function getLevel1Items(){
  return level1Items;
}

function onLevel1Interact(playerx, playery, playerItem, interactx, interacty, currentTilemap, currentObstacles, currentItems, currentMisc, currentInteractions){
  if(interactx==8 && interacty==8){
    if(currentInteractions[8][8]==1){
      if(playerItem==1){
        setInfo(3);
        currentObstacles[10][7] = 0;
        currentInteractions[8][8] = 2;
        setPlayerItem(0);
        setInteractions(currentInteractions);
        setObstacles(currentObstacles);
      }else{
        setInfo(1);
      }
    }
  }
}

function onLevel1pickupItem(playerx, playery, playerItem, pickupx, pickupy, currentTilemap, currentObstacles, currentItems, currentMisc, currentInteractions){
  if(pickupx == 13 && pickupy == 1){
    setInfo(2);
  }
  if(playerItem==2){
    setupLevel(2);
    localStorage.setItem("level", 2);
  }
}
