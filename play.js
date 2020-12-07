///////////  Happiness Bar
function drawHappinessBar() {
  noStroke()
  fill(100 * (1 - (log(happiness + 1) / log(100))), 255 * (log(happiness + 1) / log(99)), 100);
  rect(120, 60, (happiness / 50.0) * 200, 20);

  // if(happiness > 150){
  //   happiness = 120
  // }

  fill(0)
  textSize(13)
  text('Eat', 95, 780)
  text('Sleep', 290, 780)
  text('Play', 490, 780)
  text('Toilet', 680, 780)
}

let maxHappiness = 100;
let happiness = maxHappiness;

function happinessBar() {
  happiness = happiness - 0.1;

  if (happiness <= 0) {
    state = 2;
  }

  if (happiness > 100) {
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
  if (clhover == true) {
    if (night == 400) {
      night = 9999;
      cap = 9999;
      // happiness = 100
    }
    else {
      night = 400;
      cap = 320;
      // Reset fed and played
      fed = 0;
      played = 0;
      // Increase happiness
      happiness += random(20);
    }
  }

  // poop

  if (toiletdist < 50) {
    thover = true;
    if (mouseIsPressed) {

      poops.shift()
      happiness += 5;
      // if (!obj) {
      //   happiness += 0;
      // } else {
      //   delete obj;
      //   happiness += 20;
      // }
    }
  }


  if (candydist < 50) {
    hover = true;
    if (fed > 9) {
      // happiness -= 50;
      image(thought, xPos + 130, 220, 120, 100)
      fill(0)
      textSize(15)
      text(`It's too much!`, xPos + 195, 260)
    }
    if (mouseIsPressed) {
      if (fed > 15) {
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
            break;
          case 2:
            cookies = pear2
            image(cookies, xPos + 120, 300, 80, 80)
            break;
          case 3:
            cookies = pear3;
            image(cookies, xPos + 120, 300, 80, 80)
            break;
          case 4:
            break;
        }
      }
    }

  }
}
