const {shell} = require('electron');

//open links externally by default
$(document).on('click', 'a[href^="http"]', function(event) {
    event.preventDefault();
    shell.openExternal(this.href);
});

//Get loading screen content
var clock = document.getElementById('loadingClock');



//Get tile images
var grass = new Image();
grass.src = "../images/tiles/grass.png";

var dirt = new Image();
grass.src = "../images/tiles/dirt.png";

var sand = new Image();
grass.src = "../images/tiles/sand.png";


//Play button event
function play(){
  console.log("test");
}
