import { Server as SocketIoServer } from 'socket.io';

const SocketIo = (server) => {

    const io = new SocketIoServer(server);

    io.on('connection', (socket) => {
        
        /* console.log('a user connected'); */

        socket.onAny((eventName, ...args) => {
            /* console.log("Event trigged", eventName); */
        });

        socket.on('disconnect', () => {
            /* console.log('user disconnected'); */
        });

        socket.on('connect-room', (data) => {
            
            const room = data;

            /* console.log("New room:", room) */

            socket.join(`room-${room}`);
            socket.on('pin-msg', (data) => {

                /* console.log(data) */
                
                io.to(`room-${room}`).emit('pin-msg', data);

            })

        })


    });

    return io;
};


export default SocketIo;
