
window.onload = function() {
    const game = new Game("canvas");
    const square = new Square(game, 100, 100, 50, 50, "blue"); // Example position and size

    // Call draw explicitly to draw the initial state
    game.run();
};
