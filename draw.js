//////// turtle 

function loadTurtle() {
  var turtleHeadNames = ["turtleHeadHappy.png", "turtleHeadNormal.png", "turtleHeadSad.png"];
  turtleHead = turtleHeadNames.map(function (name) {
    return loadImage("assets/turtle/" + name);
  });
  for (var i = 0; i < 5; i++) {
    turtleBody.push(loadImage('assets/turtle/turtleBody' + i + '.png'));
  }

}

/////////// interface

function drawInterface() {
  drawBorders();
  drawMenu();
  // drawButtons();
  drawTurtle();
  drawHappinessBar();
}

//////////// border 

function drawBorders() {
  // background(0, 200, 200);
  background('#91C26D');
  fill(255);
  noStroke();
  rect(35, 35, width * 0.9, height * 0.7);
  image(nightImage, 35, 35, width * 0.9, height * 0.7)
  textSize(30);
  textFont("Arial");
  textAlign(CENTER, CENTER);
  text("Happy Pet", width / 2, height * 0.8);
}

//////////// Menu


function drawMenu() {
  if (hover == true) {
    cursor(HAND);
  } else if (clhover == true) {
    cursor(HAND);
  } else if (phover == true) {
    cursor(HAND);
  } else if (thover == true) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  push()
  rectMode(CENTER);
  imageMode(CENTER);
  image(night2, night - 5, 315, width * 0.9, height * 0.70);
  image(nightcap, cap + xPos - 210, 260, 170, 170);
  pop()

  // pear
  var cxscale = 100;
  var cyscale = 100;
  candydist = dist(mouseX, mouseY, 70, 700);
  if (candydist < 50) {
    cxscale = 125;
    cyscale = 125;
    hover = true;
    if(hover === true){
      image(cookies, xPos + 120, 300, 80, 80)
    }
  }
  else {
    hover = false;
  }
  image(candyImage, 55, 650, cxscale, cyscale);

  //sleep
  var clxscale = 75;
  var clyscale = 75;
  clockdist = dist(mouseX, mouseY, 265, 720);
  if (clockdist < 50) {
    getTurtleBody()
    clxscale = 100;
    clyscale = 100;
    clhover = true;
  }
  else {
    clhover = false;
  }
  image(clockImage, 250, 670, clxscale, clyscale);


  //play
  var pxscale = 95;
  var pyscale = 95;
  poisondist = dist(mouseX, mouseY, 475, 685);

  if (poisondist < 50) {
    for (i = 0; i < 10; i++) {
      balls[i].update();
      balls[i].wallcheck();
      balls[i].show();
    }
    pxscale = 110;
    pyscale = 110;

    phover = true;
  }
  else {
    phover = false;
  }
  image(play, 455, 665, pxscale, pyscale);

  // toilet
  var txscale = 90;
  var tyscale = 90;
  toiletdist = dist(mouseX, mouseY, 659, 675);
  if (toiletdist < 50) {
    txscale = 105;
    tyscale = 105;
    thover = true;
  }
  else {
    thover = false;
  }
  image(toilet, 640, 660, txscale, tyscale);
}


/////////  turtle 
let obj=true
function drawTurtle() {
  // Increment xPos 
  xPos += speed;
  if (xPos > width * 0.73 || xPos < 50) {
    speed = -speed;
  }
  let turtleHeadImg = getTurtleHead();
  let turtleBodyImg = getTurtleBody();

  // Calculate head alignment
  var xOffsetHead = (turtleBodyImg.width - turtleHeadImg.width) / 2;
  image(turtleHeadImg, xPos + xOffsetHead, 300);
  // Overlap turtle head onto body due to extra line in image
  image(turtleBodyImg, xPos, 290 + turtleHeadImg.height);

  //////////////////////////////////////////////////////////
  // Play
  if (poisondist < 50) {
    phover = true;
    image(ballImage, xPos + 40, 390, 60, 60)
    if (played > 7) {
      // happiness -= 50;
      image(thought, xPos + 130, 220, 120, 100)
      fill(0)
      textSize(15)
      text(`I'm so tired!`, xPos + 195, 260)
    }
    if (mouseIsPressed) {
      fed = 0;
      // If pet plays consecutively for more than 4 times,
      // exhaustion causes decrease in happiness
      if (played > 12) {
        happiness -= 50;
      } else {
        happiness += random(10);
        played++;
      }
    }
  }

  // sleep 
  // if (clockdist < 50) {
  //   clhover = true;
  //   getTurtleBody()
  //   if (mouseIsPressed) {
  //     night = 400;
  //     cap = 320;
  //     // Reset fed and played
  //     fed = 0;
  //     played = 0;
  //     // Increase happiness
  //     happiness += random(20);
  //   }
  // }


  // poop
  // every poop, hapiness-5; 
  // one button clean, happiness+20

  if (millis() - lastTrigger >= 2000) {
    poops.push({
      x: random(xPos + 20, xPos + 40),
      y: random(465, 495)
    });

    lastTrigger = millis(); // Reset the trigger.
  }

  for (let obj of poops) {
    image(poop1, obj.x, obj.y);
  }


  // Eat 

  

    
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

let lastRightFootPositionDown = true;
function getTurtleBody() {
  var retTurtleBody;
  if (speed < 1) {
    // Turtle face left feet animation
    if (lastRightFootPositionDown) {
      retTurtleBody = turtleBody[0];
    } else {
      retTurtleBody = turtleBody[1];
    }
  } else {
    // Turtle face right feet animation
    if (lastRightFootPositionDown) {
      retTurtleBody = turtleBody[2];
    } else {
      retTurtleBody = turtleBody[3];
    }
  }
  lastRightFootPositionDown = !lastRightFootPositionDown;
  return retTurtleBody;
}


// Eat - loop images
function mouseReleased() {
  level = level + 1;
  if (level > 4) {
    level = 0;
  }
}


// play - ball
class Ball {
  constructor(x, y) {
    this.p = createVector(x, y);
    this.speed = createVector(random(8, 15), random(8, 15));
  }
  update() {
    this.p.add(this.speed);
  }

  // width * 0.9, height * 0.7

  wallcheck() {
    if (this.p.x < rad + 50 || this.p.x > width * 0.9 - rad) {
      this.speed.x = this.speed.x * -1
    }
    if (this.p.y < rad + 30 || this.p.y > height * 0.7 - rad) {
      this.speed.y = this.speed.y * -1
    }
  }

  show() {
    fill(0, 255, 0);
    noStroke();
    // ellipse(this.p.x, this.p.y, 2 * rad)
    image(ballImage, this.p.x, this.p.y, 2 * rad, 2 * rad)
  }

}