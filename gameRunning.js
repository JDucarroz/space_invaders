/**
 * Created by jonasducarroz on 3/15/16.
 */
var ship,
  enemy,
  bullet,
  rowsNumber = 0,
  enemies,
  bullets,
  shipMove = 5,
  moveInterval;

function gameRunning() {

  moveWhenPressed();
  boarders();
  shoot();

  enemies.overlap(bullets, explode);

  for(var i = 0; i < bullets.length; i++) {
    if(bullets[i].position.y < 0) {
      //bullets.remove(bullets[i]);
      bullets[i].remove();
    }
  }
  //checks to see if the game is over
  if(moveInterval && rowsNumber > 14) {
    clearTimeout(moveInterval);
    moveInterval = null;
    gameState = "over";
    gameOverState = "lost"
  }
  if(enemies.length === 0) {
    gameState = "over";
    gameOverState = "won";
  }

  drawSprites();
}

//move the sprite left and right
function moveWhenPressed() {
  if (keyDown("left")) {
    ship.setVelocity(-shipMove, 0);
  }

  if (keyDown("right")) {
    ship.setVelocity(shipMove, 0);
  }
  if(keyWentUp("left") || keyWentUp("right")) {
    ship.setVelocity(0, 0);
  }
}

//makes the ship sprite bounce at the borders
function boarders() {
 if (ship.position.x <= 0) {
   ship.position.x = 1;
   ship.velocity.x = abs(ship.velocity.x);
 }

 if (ship.position.x >= width - 50) {
   ship.position.x = width - 51;
   ship.velocity.x = -abs(ship.velocity.x);
 }
}

function shoot() {
  if(keyWentDown("space")){
    var bullet = createSprite(ship.position.x + ship.width/2, ship.position.y - 10, 10, 10);
    bullet.setVelocity(0, -5);
    bullet.debug = true;

    bullets.add(bullet);
  }
}

//create rows of enemies
function badGuy(rows) {
  var maxColumns = width/42;
  for(var i = 0; i <= rows; i++) {
    for (var j = 0; j < maxColumns; j++) {
      enemy = createSprite(j * 40 + 20, i * 30, 20, 20);
      enemy.addImage(enemyImage);
      enemies.add(enemy);
    }
  }
  rowsNumber += rows;
}

function moveEnemiesDown() {
  for(var i = 0; i < enemies.length; i ++) {
    enemies[i].position.y += 30;
  }
  badGuy(1);
}

function explode(enemy, bullet) {
  enemies.remove(enemy);
  enemy.remove();
  bullets.remove(bullet);
  bullet.remove();
}

