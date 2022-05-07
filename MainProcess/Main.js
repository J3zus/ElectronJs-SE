const {app, BrowserWindow} = require('electron');
const  url = require('url');
const path = require('path');

let win // Alcanze global para despues si se elimina queda limpio los recursos del computador

app.on('ready', () => {
    win = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 900,
        height: 600,
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, '../MainProcess/Main.html'),
        protocol: 'file',
        slashes: true
    }));

    win.setMenu(null); // Eliminar la barra menu superior
})
   

app.on('window-all-closed', () => {
        app.quit()
})