//// Keyboard Interactions

function keyPressed() {
  // Start Screen
  if (keyCode === BACKSPACE && state != 0) {
    state = 0;
  }
  // Play Screen
  if (keyCode === ENTER && state != 1) {
    state = 1;
  }
  // Instruction Screen
  if (keyCode === ESCAPE && state != 3) {
    state = 3;
  }
}


///// Happiness Bar 

let maxHappiness = 100;
let happiness = maxHappiness;

function happinessBar() {
  happiness = happiness - 0.1;

  if (happiness <= 0) {
    state = 2;
  }
  if (happiness < 90 && happiness > 60) {
    image(heart, 50, 40);
    image(heart, 120, 40);
    image(heart, 200, 40);

  }
  if (happiness < 60 && happiness > 30) {
    image(heart, 50, 40);
    image(heart, 120, 40);

  }
  if (happiness < 30 && happiness > 1) {
    image(heart, 50, 40);
  }

  if (happiness > 90 && happiness < 150) {
    // happiness = 100;

    image(heart, 50, 40);
    image(heart, 120, 40);
    image(heart, 200, 40);
    image(heart, 280, 40);
  }
}

////////// Buttons

// function button(x, label) {
//   var b = {
//     x: x,
//     y: 590,
//     width: 90,
//     height: 90,
//     draw: function () {
//       // Outer square border
//       // fill(0, 150, 200);
//       // rect(this.x, this.y, this.width, this.height, 10);
//       // Inner square
//       // fill(0, 100, 200);
//       // rect(this.x + (this.width * 0.2 / 2), this.y + (this.height * 0.2 / 2), this.width * 0.8, this.height * 0.8);
//       // Text
//       fill(0);
//       textFont("Arial");
//       textSize(25);
//       textAlign(CENTER, CENTER);
//       text(label, this.x + 45, this.y + 45);
//     }
//   }
//   return b;
// }

// let buttonEat = button(70, "Eat");
// let buttonSleep = button(230, "Sleep");
// let buttonBath = button(390, "Bath");
// let buttonPlay = button(550, "Play");

// let buttonCooldown = 100;
// let coolDown = false;
let fed = 0;
let played = 0;




//////////////////////
var candyImage;
var candyCount = 0;
var hover;
var clhover;
var phover;
var bodydist;
var candydist;
var clockdist;
var poisondist;
var peye1 = 9999;
var peye2 = 9999;
var night = 9999;
var cap = 9999;
var deathtext = false;



///////// mouse press

function mousePressed() {
  // eat 
  if (hover == true) {
    if (fed > 6) {
      happiness -= 50;
    } else {
      happiness += random(5);
      fed++;
    }
  }


  // play
  if (phover == true) {
    if (peye1 == 600) {
      peye1 = 9999;
      peye2 = 9999;
    }
    else {
      fed = 0;
      // If pet plays consecutively for more than 4 times,
      // exhaustion causes decrease in happiness
      if (played > 4) {
        happiness -= 80;
      } else {
        happiness += random(10);
        played++;
      }
    }
  }

  // sleep 
  if (clhover == true) {
    if (night == 400) {
      night = 9999;
      cap = 9999;
    }
    else {
      if (frameCount < 500 && frameCount > 0) {
        night = 400;
        cap = 320;
        // Reset fed and played
        fed = 0;
        played = 0;
        // Increase happiness
        happiness += random(20);
      }
    }
  }


  // // Eat (with feed count)
  // if (mouseY > buttonEat.y && mouseY < buttonEat.y + buttonEat.height && mouseX > buttonEat.x && mouseX < buttonEat.x + buttonEat.width) {
  //   // If pet is fed consecutively over 3 times, decrease happiness

  //   if (fed > 3) {
  //     happiness -= 50;
  //   } else {
  //     happiness += random(5);
  //     fed++;
  //     // if (frameCount < 50 && frameCount > 0) {
  //     // image(pear, xPos + 100, 300, 80, 80)
  //     // } else if (frameCount < 70 && frameCount > 50) {
  //     // image(pear1, xPos + 100, 300, 80, 80)
  //     // } else if (frameCount < 90 && frameCount > 70) {
  //     //   image(pear2, xPos + 100, 300, 80, 80)
  //     // } else if (frameCount < 100 && frameCount > 90) {
  //     //   image(pear3, xPos + 100, 300, 80, 80)
  //     // } else {
  //     // }
  //   }
  // }

  // // Bath (with cooldown)
  // if (mouseY > buttonBath.y && mouseY < buttonBath.y + buttonBath.height && mouseX > buttonBath.x && mouseX < buttonBath.x + buttonBath.width && buttonCooldown == 100) {

  //   fed = 0; // Reset fed
  //   happiness += random(-10, 20);
  //   coolDown = true;

  // }

  // // Play (with play count)
  // if (mouseY > buttonPlay.y && mouseY < buttonPlay.y + buttonPlay.height && mouseX > buttonPlay.x && mouseX < buttonPlay.x + buttonPlay.width) {
  //   fed = 0;
  //   // If pet plays consecutively for more than 4 times,
  //   // exhaustion causes decrease in happiness
  //   if (played > 4) {
  //     happiness -= 80;
  //   } else {
  //     happiness += random(10);
  //     played++;
  //   }
  // }

  // // Sleep (only if pet is tired from playing)
  // if (mouseY > buttonSleep.y && mouseY < buttonSleep.y + buttonSleep.height && mouseX > buttonSleep.x && mouseX < buttonSleep.x + buttonSleep.width && played > 0) {

  //   // Reset fed and played
  //   fed = 0;
  //   played = 0;
  //   // Increase happiness
  //   happiness += random(20);

  // }
}



///////// button pressed 

// function buttonPressed() {

//   // eat
//   if (mouseY > buttonEat.y && mouseY < buttonEat.y + buttonEat.height && mouseX > buttonEat.x && mouseX < buttonEat.x + buttonEat.width) {

//     // if (frameCount < 50 && frameCount > 0) {
//     //   image(pear, xPos + 100, 300, 80, 80)
//     // } else if (frameCount < 70 && frameCount > 50) {
//     //   image(pear1, xPos + 100, 300, 80, 80)
//     // } else if (frameCount < 90 && frameCount > 70) {
//     //   image(pear2, xPos + 100, 300, 80, 80)
//     // } else if (frameCount < 100 && frameCount > 90) {
//     //   image(pear3, xPos + 100, 300, 80, 80)
//     // } else {
//     // }
//   }

//   //bath 

//   if (coolDown == true) {
//     startCoolDown();

//     // image(showerC, xPos + 100, 290, 80, 80)
//     if (frameCount < 1000) {

//       showerC.position(xPos + 100, 220)

//       // showerC.position( xPos + 100, 250)
//       // image(shower, 80, 80)

//       // fill('red');
//       // noStroke();
//       // rect(35, 180, width * 0.9, height * 0.5);
//     } else {
//       // showerC.position(500, 220)
//       image(shower, 500, 180)
//     }
//   }


//   // sleep 

//   // if (mouseY > buttonSleep.y && mouseY < buttonSleep.y + buttonSleep.height && mouseX > buttonSleep.x && mouseX < buttonSleep.x + buttonSleep.width && played > 0) {
//   //   background(0)
//   // }
// }

// function startCoolDown() {
//   buttonCooldown--;
//   buttonBath = button(390, buttonCooldown);
//   // console.log(buttonCooldown);

//   // Reset button once countdown reaches 0
//   if (buttonCooldown <= 0) {
//     buttonCooldown = 100;
//     buttonBath = button(390, "Bath");
//     coolDown = false;
//   }
// }
