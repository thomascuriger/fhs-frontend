const {app, BrowserWindow} = require('electron');  
const url = require('url');
const path = require('path');   
	
function onReady () {     
	win = new BrowserWindow({width: 411, height: 823})    
	win.loadURL(url.format({      
		pathname: path.join(
			__dirname,
			'dist/fhs-frontend/index.html'),       
		protocol: 'file:',
		slashes: true     
	}))   
} 

app.on('ready', onReady);