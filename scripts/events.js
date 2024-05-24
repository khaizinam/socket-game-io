
class Square extends Entity {
    constructor(game, x, y, width, height,color) {
        super(game, x, y, width, height, color);
    }

    draw(ctx) {
        this.drawRect(ctx);
    }
}