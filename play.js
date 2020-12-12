///////////  Happiness Bar

function drawHappinessBar() {
  noStroke()
  fill(100 * (1 - (log(happiness + 1) / log(100))), 255 * (log(happiness + 1) / log(99)), 100);
  rect(120, 60, (happiness / 50.0) * 250, 20);

  fill(0)
  textSize(13)
  text('Eat', 95, 780)
  text('Sleep', 680, 780)
  text('Play', 290, 780)
  text('Toilet', 490, 780)
}

function happinessBar() {
  happiness = happiness - 0.1;

  if (happiness <= 0) {
    state = 2;
  }

  if (happiness >= 100) {
    happiness = 100;
  }

  if (happiness > 99.9) {
    // happiness = 100;
    image(heart2, 50, 40, 50, 50);
  }
  if (happiness > 80 && happiness < 100) {
    // happiness = 100;
    image(heart2, 50, 40, 50, 50);
  }
  if (happiness < 80 && happiness > 60) {
    image(heart4, 50, 40, 50, 50);
  }
  if (happiness < 60 && happiness > 40) {
    image(heart4, 50, 40, 50, 50);
  }
  if (happiness < 40 && happiness > 20) {
    image(heart6, 50, 40, 50, 50);
  }
  if (happiness < 20 && happiness > 1) {
    image(heart6, 50, 40, 50, 50);
  }

}


///////// mouse press
function mousePressed() {

  // sleep 
  if (clhover === true) {
    if (night === 400) {
      night = 9999;
      cap = 9999;
    } else {
      if (played > 0) {
        frameCount = 20
        sleepSound.play()
        sleepSound.setVolume(0.05);
        night = 400;
        cap = 320;
        fed = 0;
        happiness += random(20);
      } else {
        happiness += 0;
      }
    }
  }

  // poop

  if (toiletdist < 50) {
    thover = true;
    for (let obj of poops) {
      if (obj) {
        if (mouseIsPressed) {
          poops.shift()
          happiness += 5;
          toiletSound.play()
          toiletSound.setVolume(0.2);
        }
      }
    }
  }

  //EAT

  if (candydist < 50) {
    if (mouseIsPressed) {
      if (fed > 12) {
        happiness -= 30;
      } else {
        happiness += random(5);
        fed++;
        switch (level) {
          case 0:
            cookies = pear;
            image(cookies, xPos + 120, 300, 80, 80)
            break;
          case 1:
            cookies = pear1;
            image(cookies, xPos + 120, 300, 80, 80)
            cookieSound.play()
            cookieSound.setVolume(0.1);
            break;
          case 2:
            cookies = pear2
            image(cookies, xPos + 120, 300, 80, 80)
            break;
          case 3:
            cookies = pear3;
            image(cookies, xPos + 120, 300, 80, 80)
            cookieSound.play()
            cookieSound.setVolume(0.1);
            break;
          case 4:
            cookies = pear4;
            image(cookies, xPos + 120, 300, 80, 80)
            cookieSound.play()
            cookieSound.setVolume(0.1);
            break;
        }
      }
    }
  }
}

// Eat - loop images
function mouseReleased() {
  level = level + 1;
  if (level > 4) {
    level = 0;
  }
}