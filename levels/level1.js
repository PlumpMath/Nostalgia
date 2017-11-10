var level1Tilemap = [
[2,2,2,2,2,2,2,2,2],
[2,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,2],
[2,1,1,1,1,1,1,1,2],
[2,2,2,2,2,2,2,2,2]
];

var level1Obstacles = [
  [1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1]
]

var level1StartingX = 1;
var level1StartingY = 1;

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
