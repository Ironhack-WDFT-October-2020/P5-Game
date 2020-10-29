const game = new Game();

function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(600, 400);
  game.setupGame();
}
function draw() {
  clear();
  game.drawGame();
}

// add the jump function here:
function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
}
