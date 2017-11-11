`use strict`
var grass = new Image();
var dirt = new Image();
var sand = new Image();
var playerFront = new Image();
var brick = new Image();
var controls_1 = new Image();
var controls_2 = new Image();
var machine = new Image();

grass.onload = function () {
    dirt.onload = function () {
        sand.onload = function() {
          playerFront.onload = function() {
            brick.onload = function() {
              controls_1.onload = function() {
                controls_2.onload = function() {
                  machine.onload = setup.bind(this);
                  machine.src = "images/tiles/machine.png";
                }
                controls_2.src = "images/tiles/controls_2.png";
              }
              controls_1.src = "images/tiles/controls_1.png";
            }
            brick.src = "images/tiles/brick.png";
          }
          playerFront.src = "images/game/player_front.png";
        }
        sand.src = "images/tiles/sand.png";
    }
    dirt.src = "images/tiles/dirt.png";
}
grass.src = "images/tiles/grass.png";
