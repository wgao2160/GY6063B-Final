//////// turtle 

let turtleHead;

function loadTurtle() {
  var turtleHeadNames = ["turtleHeadHappy.png", "turtleHeadNormal.png", "turtleHeadSad.png"];
  turtleHead = turtleHeadNames.map(function (name) {
    return loadImage("assets/turtle/" + name);
  });
  heart = loadImage("assets/heart.png");
}

/////////// interface

function drawInterface() {
  drawBorders();
  // drawButtons();
  drawTurtle();
  drawHappinessBar();
}


//////////// border 

function drawBorders() {
  // background(0, 200, 200);
  background(255, 200, 200);

  fill(255);
  noStroke();
  rect(35, 35, width * 0.9, height * 0.7);

  // image(bg,35, 35, width * 0.9, height * 0.7)

  textSize(30);
  textFont("Arial");
  textAlign(CENTER, CENTER);
  text("Happy Pet", width / 2, height * 0.8);



  if (hover == true) {
    cursor(HAND);
  }
  else if (clhover == true) {
    cursor(HAND);
  }
  else if (phover == true) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }


  push()
  rectMode(CENTER);
  imageMode(CENTER);
  image(nightImage, night - 5, 310, width * 0.9, height * 0.72);
  image(nightcap, cap + xPos - 210, 260, 170, 170); 8
  pop()

  // candy
  var cxscale = 100;
  var cyscale = 100;
  candydist = dist(mouseX, mouseY, 85, 700);
  if (candydist < 50) {
    cxscale = 125;
    cyscale = 125;
    hover = true;
    // if (mouseIsPressed) {
    if (frameCount < 50 && frameCount > 0) {
      image(pear, xPos + 100, 300, 80, 80)
    } else if (frameCount < 70 && frameCount > 50) {
      image(pear1, xPos + 100, 300, 80, 80)
    } else if (frameCount < 90 && frameCount > 70) {
      image(pear2, xPos + 100, 300, 80, 80)
    } else if (frameCount < 100 && frameCount > 90) {
      image(pear3, xPos + 100, 300, 80, 80)
    }
    // }
  }
  else {
    hover = false;
  }
  image(candyImage, 70, 650, cxscale, cyscale);

  //Draw Clock
  var clxscale = 75;
  var clyscale = 75;
  clockdist = dist(mouseX, mouseY, 285, 720);
  if (clockdist < 50) {

    clxscale = 100;
    clyscale = 100;
    clhover = true;
  }
  else {
    clhover = false;
  }
  image(clockImage, 270, 670, clxscale, clyscale);



  //Draw ball
  var pxscale = 85;
  var pyscale = 85;
  poisondist = dist(mouseX, mouseY, 490, 685);

  if (poisondist < 50) {
    pxscale = 110;
    pyscale = 110;
    phover = true;
  }
  else {
    phover = false;
  }
  image(ballImage, 460, 665, pxscale, pyscale);
}


////////// buttons 

// function drawButtons() {
//   buttonEat.draw();
//   buttonSleep.draw();
//   buttonBath.draw();
//   buttonPlay.draw();
// }

/////////  turtle 

let xPos = 200;
let speed = 6;

function drawTurtle() {
  // Increment xPos 
  xPos += speed;
  if (xPos > width * 0.73 || xPos < 50) {
    speed = -speed;
  }
  let turtleHeadImg = getTurtleHead();
  image(turtleHeadImg, xPos, 300);
}

function getTurtleHead() {
  if ((happiness / maxHappiness) >= 0.8) {
    // Happy 
    return turtleHead[0];
  } else if ((happiness / maxHappiness) >= 0.5) {
    // Neutral 
    return turtleHead[1];
  } else {
    // Sad 
    return turtleHead[2];
  }
}


///////////  Happiness Bar

function drawHappinessBar() {
  noStroke()
  fill(100 * (1 - (log(happiness + 1) / log(100))), 255 * (log(happiness + 1) / log(99)), 100);
  rect(50, 100, (happiness / 50.0) * 250, 20);

  // fill(0)
  // textSize(13)
  // text('maximum three times', 130, 670)
  // text('only sleep after play', 270, 670)
  // text('depends on the mood', 430, 670)
  // text('maximum 4 times', 600, 670)
}

