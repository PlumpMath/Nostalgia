`use strict`
var grass = new Image();
var dirt = new Image();
var sand = new Image();
var playerFront = new Image();
var wall = new Image();
var controls_up = new Image();
var controls_down = new Image();
var controls_left = new Image();
var controls_right = new Image();
var machine_broken = new Image();


controls_right.src = "images/tiles/right_arrow.png";
controls_left.src = "images/tiles/left_arrow.png";
machine_broken.src = "images/tiles/machine.png";
controls_up.src = "images/tiles/up_arrow.png";
controls_down.src = "images/tiles/down_arrow.png";
wall.src = "images/tiles/wall.png";
playerFront.src = "images/game/player_front.png";
sand.src = "images/tiles/sand.png";
dirt.src = "images/tiles/dirt.png";
grass.src = "images/tiles/grass.png";
grass.onload = setup.bind(this);
