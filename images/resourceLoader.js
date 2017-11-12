`use strict`
//tiles
var grass = new Image();
grass.src = "images/tiles/grass.png";
var dirt = new Image();
dirt.src = "images/tiles/dirt.png";
var sand = new Image();
sand.src = "images/tiles/sand.png";
var dark_dirt = new Image();
dark_dirt.src = "images/tiles/dark_dirt.png";
//obstacles
var wall = new Image();
wall.src = "images/tiles/wall.png";
var openable_wall = new Image();
openable_wall.src = "images/tiles/openable_wall.png";
//items
var wrench = new Image();
wrench.src = "images/items/wrench.png";
//interactions
var machine_broken = new Image();
machine_broken.src = "images/tiles/machine.png";
//player
var playerFront = new Image();
playerFront.src = "images/game/player_front.png";
//misc
var controls_up = new Image();
controls_up.src = "images/tiles/up_arrow.png";
var controls_down = new Image();
controls_down.src = "images/tiles/down_arrow.png";
var controls_left = new Image();
controls_left.src = "images/tiles/left_arrow.png";
var controls_right = new Image();
controls_right.src = "images/tiles/right_arrow.png";
//itemslots
var itemslot_empty = new Image();
itemslot_empty.src = "images/UI/itemslot_empty.png";
var itemslot_wrench = new Image();
itemslot_wrench.src = "images/UI/itemslot_wrench.png";
//info
var special_tool_needed = new Image();
special_tool_needed.onload = setup.bind(this);
special_tool_needed.src = "images/UI/special_tool_needed.png";
