let billedeOverskrift
let billedeTelefonDerRinger
let billedeBurgerikon
let billedeTelefon
let billedRødTelefon
let font
let fontsize = 25
let knapSOS
let knapTelefon
let knapBurgerikon
let currentPage = 1
let numberOfPages = 2




function preload() {
  font = loadFont('Traffolight.otf');
  billedeOverskrift = loadImage('billeder/titel.png');
  billedeBurgerikon = loadImage('billeder/burger_ikon.png');
  billedeTelefonDerRinger = loadImage('billeder/telefon_der_ringer.png');
  billedRødTelefon = loadImage('billeder/rød_telefon.png');
}

function opretKnapper() {
  knapSOS = createButton('SOS');
  knapSOS.position(150, 325);
  knapSOS.mousePressed(knapSOSKlik);
  knapSOS.show()

  knapTelefon = createButton(' ');
  knapTelefon.position(width / 2 - 50, height - 150);
  knapTelefon.size(100, 100)
  knapTelefon.style('background-color', 'transparent');
  knapTelefon.style('border', 'none')
  knapTelefon.style('background-image', 'url(' + 'billeder/rød_telefon.png' + ')');
  knapTelefon.style('background-size', '100% 100%');
  knapTelefon.mousePressed(knapTelefonKlik);
  knapTelefon.hide()

  knapBurgerikon = createButton(' ');
  knapBurgerikon.position(10, 10);
  knapBurgerikon.size(50, 50)
  knapBurgerikon.style('background-color', 'transparent');
  knapBurgerikon.style('border', 'none')
  knapBurgerikon.style('background-image', 'url(' + 'billeder/burger_ikon.png' + ')');
  knapBurgerikon.style('background-size', '100% 100%');
  knapBurgerikon.mousePressed(knapBurgerikonKlik);
  knapBurgerikon.show()

}

function setup() {
  // Vi opretter et canvas på 350 x 500 pixels
  createCanvas(350, 500);
  // Vi sætter vores font til Traffolight
  textFont(font);
  // Vi sætter vores fontstørrelse til 25
  textSize(fontsize);
  // Vi sætter teksten til at være centreret
  textAlign(CENTER, CENTER);
  // Vi opretter alle knapper ved at kalde funktionen opretKnapper()
  opretKnapper();
}

function draw() {
  if (currentPage == 1) {
    drawPage1()
  }
  else if (currentPage == 2) {
    drawPage2()
  }

  else if (currentPage == 3) {
    drawPage3()
  }

}

function drawPage1() {
  push()
  background(247, 224, 181);
  fill(209, 183, 134);
  stroke(112, 95, 64);
  strokeWeight(5)
  rect(-10, -10, 370, 125);
  image(billedeOverskrift, 75, 25, 200, 75);
  textAlign(CENTER);
  drawWords(width * 30);
  pop()
}

function drawPage2() {
  push()
  background("black");
  textAlign(CENTER, CENTER)
  fill("white")
  textSize(40)
  text('70 20 12  01', width / 2, height / 2 - 150)
  image(billedeTelefonDerRinger, width / 2 - 50, height / 2 - 50, 100, 100);
  pop()
}

function drawPage3() {
  push()
  background("black");
  textAlign(CENTER, CENTER)
  fill("white")
  textSize(40)
  text('Side 3', width / 2, height / 2 - 150)
}

function drawWords() {
  fill(0);
  noStroke();
  text('Er det blevet for slemt?', 175, 200);
  fill(0);
  noStroke();
  text('Tryk paa knappen og ring til', 175, 240);
  fill(0);
  noStroke();
  text('selvmordslinjen nu', 175, 280);
}

// Event handler for knapSOS
function knapSOSKlik() {
  knapSOS.hide();
  knapTelefon.show();
  currentPage = 2
}

// Event handler for knapTelefon
function knapTelefonKlik() {
  knapSOS.show();
  knapTelefon.hide();
  currentPage = 1
}

function knapBurgerikonKlik() {
  knapBurgerikon.hide();
  knapSOS.hide();
  knapTelefon.hide();
  currentPage = 3
}