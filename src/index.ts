import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

let puerto: number = 3000;

const server = Server.init( puerto );
server.app.use( router );

// ============================
//       MySQL instance
// ============================
// MySQL.instance;


server.start( () => {
    console.log(`Escuchando en el puerto ${puerto}`);
});