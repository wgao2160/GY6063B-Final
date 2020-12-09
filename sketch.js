let state = 0;
let cWalk;
let cWalk1;
let count = 0
let maxHappiness = 100;
let happiness = maxHappiness;
//pet
let turtleHead;
let turtleBody = [];
let xPos = 200;
let speed = 6;
//play
let ballX = 0;
let ballY = 350;
let balls = [10];
let ball;
let rad = 25;
// toilet
let poops = []
let lastTrigger = 0;
//menu
var candyImage;
var candyCount = 0;
var hover;
var clhover;
var phover;
var thover;
var bodydist;
var candydist;
var clockdist;
var poisondist;
var toiletdist;
var night = 9999;
var cap = 9999;
let fed = 0;
let played = 0;
//Eat
let level = 0;
let cookies;
//sound
let playSound;
let sleepSound;
let gameoverSound;
let toiletSound;
let bgSound;
let poopsSound;
let menuSound;
let cookieSound;

//pixelartmaker.com
function preload() {
  loadTurtle();
  // images
  pear = loadImage("img/food/pear.png")
  pear1 = loadImage("img/food/pear1.png")
  pear2 = loadImage("img/food/pear2.png")
  pear3 = loadImage("img/food/pear3.png")
  pear4 = loadImage("img/food/pear4.png")
  candyImage = loadImage("img2/candy.png");
  clockImage = loadImage('img2/Clock.png');
  nightImage = loadImage('img2/night.png');
  night2 = loadImage('img2/night2.png');
  nightcap = loadImage('img2/nightcap.png');
  ballImage = loadImage('img2/ball.png');
  ball2Image = loadImage('img2/ball2.png');
  toilet = loadImage('img2/toilet.png');
  poop1 = loadImage('img2/poop1.png');
  poop2 = loadImage('img2/poop2.png');
  play = loadImage('img2/play.png');
  heart = loadImage("assets/heart.png");
  heart2 = loadImage("assets/heart2.png");
  heart3 = loadImage("assets/heart3.png");
  heart4 = loadImage("assets/heart4.png");
  heart5 = loadImage("assets/heart5.png");
  heart6 = loadImage("assets/heart6.png");
  thought = loadImage('img2/thought.png');

  // sounds
  playSound = loadSound('sound/play.wav');
  sleepSound = loadSound('sound/sleep.wav');
  gameoverSound = loadSound('sound/gameover.wav');
  toiletSound = loadSound('sound/toilet.mp3');
  bgSound = loadSound('sound/bgsound.mp3');
  poopsSound = loadSound('sound/poops.wav');
  menuSound = loadSound('sound/menu.mp3');
  cookieSound = loadSound('sound/cookie.wav');
};

function setup() {
  bgSound.play()
  bgSound.setVolume(0.02);
  bgSound.loop()
  // Speed of turtle animation
  frameRate(15);
  createCanvas(800, 800);
  // play-ball
  for (i = 0; i < 10; i++) {
    balls[i] = new Ball(100 + i + random(1, 50), 100 + i + random(1, 30));
  }
  cookies = pear;

  // // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyDGdVJLm_rpLBGKl35D3eevlirTzBotPEU",
  //   authDomain: "happy-pet-7be8d.firebaseapp.com",
  //   projectId: "happy-pet-7be8d",
  //   storageBucket: "happy-pet-7be8d.appspot.com",
  //   messagingSenderId: "576531154340",
  //   appId: "1:576531154340:web:7d1cfb25d84dc23ebdad31"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // console.log(firebase)

  // let database = firebase.database();
  // let ref = database.ref('state')

  // let data = {
  //   state
  // }
  // ref.push(data)
}


function draw() {
  if (state == 0) {
    startScreen();
  } else if (state == 1) {
    playScreen();
  } else if (state == 2) {
    endScreen();
  } else if (state == 3) {
    instructionScreen();
  }
}

////////   Start Screens

function startScreen() {
  // background(0, 200, 200);
  background('#91C26D');
  // background('lightgreen')
  fill(255);
  textAlign(CENTER);
  textSize(50);
  textFont("Arial");

  text("Meet your virtual Pet!", width / 2, height / 2 - 50);
  // text("Welcome!", width / 2, height / 2);
  // image(heart, width / 2-60, height / 4 +150, 150, 150);
  image(heart, ballX, ballY, 150, 150);
  ballX += 8
  if (ballX > 780) {
    ballX = 0;
  }
  textSize(30);
  // text("( Press Enter to Begin )", width / 2, height / 2 + 60);
  text("Press Enter to Begin", width / 2, height / 2 + 110);
  text("Press Esc for Instructions", width / 2, height / 2 + 160);

}

// Keyboard Interactions
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

// instruction page
function instructionScreen() {
  background('#A8DA67');
  fill(255);
  textFont("Arial");
  textAlign(CENTER);

  textSize(50);
  text("Welcome to HAPPY TURTLE", width / 2, height / 4);
  // text("Welcome to Pocket Turtle Tomogatchi!", width / 2, height / 3);
  image(heart, width / 2 - 60, height / 4 + 10, 180, 180);

  textSize(25);
  fill('#6E3739');
  text("Maintain your pets happiness", width / 2, height / 2);
  text("(Click on the buttons provided to do so)", width / 2, height / 2 + 40);
  textSize(25);
  fill('#6E3739');
  text("* Remember to clean the poops constantly", width / 2, height / 2 + 120);
  text("* Remember not to overfeed or exhaust your pet", width / 2, height / 2 + 80);
  fill('#6E3739');
  text("(Press ENTER to play)", width / 2, height / 2 + 240);
  text("(Press BACKSPACE to return home)", width / 2, height / 2 + 280);

  fill(255);
  textSize(50);
  text("Enjoy playing!", width / 2, height / 2 + 190);
}

function playScreen() {
  drawInterface();
  happinessBar();
}

function endScreen() {
  // background(0, 200, 200);
  background('#91C26D');
  fill(255);
  textSize(50);
  textFont("Arial");
  textAlign(CENTER);
  text("Sorry, Your pet died", width / 2, height / 2);
  bgSound.stop()
  noLoop()
  gameoverSound.play()
  gameoverSound.setVolume(0.1);
  // textSize(30);
  // fill(255);
  // text("Press Backspace to Restart", width / 2, height / 2 + 80);

}