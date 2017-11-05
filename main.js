//Setup variables for use with node.js packages.
const electron = require('electron');
const url = require('url');
const path = require('path');

//Initiate required variables from electron.
const {app, BrowserWindow, Menu} = electron;

//Initiate the game window.
let GameWindow;

//Initalize the game windows menu bar.
const gameMenuTemplate = [
  //Initialize the menu item 'File'
  {
    label: 'File',
    submenu: [
      //Initialize the quit item
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.exit();
        }
      }
    ]
  }
];


//Startup of the application.
app.on('ready', function(){
  //Make the window.
  GameWindow = new BrowserWindow({fullscreen: true})

  //Load in the HTML file
  GameWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'html/gameWindow.html'),
    protocol: 'file:',
    slashes: true
  }))

  //Setup menu for darwin
  if (process.platform === 'darwin') {
  gameMenuTemplate.unshift({
    label: app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })
}

//Setup menu
const gameMenu = Menu.buildFromTemplate(gameMenuTemplate);
Menu.setApplicationMenu(gameMenu);

GameWindow.setFullScreen(true);
})
