let state = 0;

//Declare variables
let cWalk
let cWalk1
let count = 0
let shower
let showerC

//pixelartmaker.com
function preload() {
  loadTurtle();

  pear = loadImage("img/food/pear.png")
  pear1 = loadImage("img/food/pear1.png")
  pear2 = loadImage("img/food/pear2.png")
  pear3 = loadImage("img/food/pear3.png")

  // first frame
  // shower = loadImage("tenor.gif");

  // 
  candyImage = loadImage("img2/candy.png");
  clockImage = loadImage('img2/Clock.png');
  nightImage = loadImage('img2/night.png');
  nightcap = loadImage('img2/nightcap.png');
  ballImage = loadImage('img2/ball.png');
  bg = loadImage("img/defaultBG.png")
};

function setup() {
  // Speed of turtle animation
  frameRate(15);
  createCanvas(800, 800);

  // loads gif
  // showerC = createImg("tenor.gif", "123")

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



////////   Game Screens

function startScreen() {
  // background(0, 200, 200);
  background(255, 200, 200);
  fill(255);
  textAlign(CENTER);
  textSize(50);
  textFont("Arial");

  // text("Welcome to HAPPY TURTLE", width / 2, height / 2);
  text("Welcome!", width / 2, height / 2);
  textSize(30);
  // text("( Press Enter to Begin )", width / 2, height / 2 + 60);
  text("Press Enter to Begin", width / 2, height / 2 + 60);
  // text("( Press Esc for Instructions )", width / 2, height / 2 + 100);
}

function playScreen() {
  drawInterface();
  happinessBar();
  // buttonPressed();

}

function endScreen() {
  // background(0, 200, 200);
  background(255, 200, 200);
  fill(255);
  textSize(50);
  textFont("Arial");
  textAlign(CENTER);

  text("Sorry, Your pet died", width / 2, height / 2);
}