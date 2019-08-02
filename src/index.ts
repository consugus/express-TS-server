import Server from './server/server';

let puerto: number = 3000;

const server = Server.init( puerto );
server.start( () => {
    console.log(`Escuchando en el puerto ${puerto}`);
});