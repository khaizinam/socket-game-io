const socket = io();

class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.layers = [];
        this.fps = 40; // Frames per second
        this.setCanvasSize();
        this.draw(); // Initial draw
    }

    setCanvasSize() {
        var width = this.canvas.clientWidth;
        this.canvas.width = width;
        this.canvas.height = width * 9 / 16;
    }

    addLayer(layer) {
        this.layers.push(layer);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.layers.forEach(layer => layer.draw(this.ctx));
    }
    update() {
        // Perform update actions
    }

    run() {
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / this.fps);
    }
}


class Entity {
    constructor(game, x, y, width, height, color) {
        this.game = game;
        this.game.addLayer(this);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(ctx) {
        // Placeholder draw method
    }

    drawRect(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}