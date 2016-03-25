/**
 * Created by jonasducarroz on 3/22/16.
 */

function gameOver(){
  textSize(18);
  textAlign(CENTER);
  fill(0);

  //checks if you won or lost
  if(gameOverState === "lost") {
    text("You Lost!", width/2, height/2);
  } else if(gameOverState === "won") {
    text("You Won!", width/2, height/2);
  }

}

