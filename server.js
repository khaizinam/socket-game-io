const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use('/scripts', express.static(path.join(__dirname, 'scripts'), {
    extensions: ['js'],
    // Explicitly set MIME type for .js files
    setHeaders: function (res, filePath) {
        if (path.extname(filePath) === '.js') {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('message', (msg) => {
        console.log('message: ' + msg);
        io.emit('message', msg);
    });
});

const PORT = process.env.PORT || 3038;
server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
