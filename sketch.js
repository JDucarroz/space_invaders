var gameState,
    enemyImage;

 function preload() {
  enemyImage = loadImage("Images/Alien.png");
 }

function setup() {
  createCanvas(500, 500);

  enemies = new Group();
  bullets = new Group();

  ship = createSprite(width/2, height - 50, 50, 50);
  badGuy(1);


  moveInterval = window.setInterval(moveEnemiesDown, 10000);
  gameState = "running"
}

function draw() {
  background(250);

  if(gameState === "running") {
    gameRunning();
  }

  if(gameState === "over") {
    gameOver();
  }
}

