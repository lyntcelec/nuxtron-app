import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import {
  createWindow,
  exitOnChange,
} from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

ipcMain.on('asynchronous-message', async (event, arg) => {
  console.log(arg) // prints "ping"
  event.reply('asynchronous-reply', 'pong')

  const mainWindow = createWindow('main', {
    width: 400,
    height: 400,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./index.html#login');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/#/login`);
  }
})

if (isProd) {
  serve({ directory: 'app' });
} else {
  exitOnChange();
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./index.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
