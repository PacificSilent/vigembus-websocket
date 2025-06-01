const WebSocket = require('ws');
const { sendToVigembus, disconnectJoysticks } = require('./vigembus');

const server = new WebSocket.Server({ port: 8081 });

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            if (data.type === 'joystick' && data.id) {
                sendToVigembus(data);
            }
            if (data.type === 'peer-disconnected') {
                disconnectJoysticks(data.peer);
            }
        } catch (error) {
            console.error('Error processing message:', error);
        }
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8081');