/*
Eksamensprojekt af
Rana og Cille
*/

// Globale variabler
let billedeOverskrift;
let billedeTelefonDerRinger;
let billedeBurgerikon;
let billedeTelefon;
let billedRødTelefon;
let billedHjem;
let font;
let fontsize = 25;
let knapSOS;
let knapTelefon;
let knapBurgerikon;
let knapHjem;
let currentPage = 1;
let numberOfPages = 2;

//Load af alle billeder + skrifttype
function preload() {
  font = loadFont("Traffolight.otf");
  billedeOverskrift = loadImage("billeder/titel.png");
  billedeBurgerikon = loadImage("billeder/burger_ikon.png");
  billedeTelefonDerRinger = loadImage("billeder/telefon_der_ringer.png");
  billedRødTelefon = loadImage("billeder/rød_telefon.png");
  billedHjem = loadImage("billeder/hjem.png");
}

//Alle knapper oprettes i samme funtion og gemmes, med undtagelse af knapSOS da den vises på forsiden
function opretKnapper() {
  knapSOS = createButton("SOS");
  knapSOS.position(150, 325);
  knapSOS.mousePressed(knapSOSKlik);
  //Knap vises
  knapSOS.show();

  knapTelefon = createButton(" ");
  knapTelefon.position(width / 2 - 50, height - 150);
  knapTelefon.size(100, 100);
  knapTelefon.style("background-color", "transparent");
  knapTelefon.style("border", "none");
  knapTelefon.style(
    "background-image",
    "url(" + "billeder/rød_telefon.png" + ")"
  );
  knapTelefon.style("background-size", "100% 100%");
  knapTelefon.mousePressed(knapTelefonKlik);
  //Knap gemmes
  knapTelefon.hide();

  knapBurgerikon = createButton(" ");
  knapBurgerikon.position(10, 10);
  knapBurgerikon.size(50, 50);
  knapBurgerikon.style("background-color", "transparent");
  knapBurgerikon.style("border", "none");
  knapBurgerikon.style(
    "background-image",
    "url(" + "billeder/burger_ikon.png" + ")"
  );
  knapBurgerikon.style("background-size", "100% 100%");
  knapBurgerikon.mousePressed(knapBurgerikonKlik);
  knapBurgerikon.show();

  knapHjem = createButton(" ");
  knapHjem.position(width / 2 - 30, height - 150);
  knapHjem.size(60, 60);
  knapHjem.style("background-color", "transparent");
  knapHjem.style("border", "none");
  knapHjem.style("background-image", "url(" + "billeder/hjem.png" + ")");
  knapHjem.style("background-size", "100% 100%");
  knapHjem.mousePressed(knapHjemKlik);
  knapHjem.hide();
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

//alle sider oprettes med side 1 som udgangspunkter
function draw() {
  if (currentPage == 1) {
    drawPage1();
  } else if (currentPage == 2) {
    drawPage2();
  } else if (currentPage == 3) {
    drawPage3();
  } else if (currentPage == 3) {
    drawPage3();
  } else if (currentPage == 4) {
    drawPage4();
  } else if (currentPage == 5) {
    drawPage5();
  } else if (currentPage == 6) {
    drawPage6();
  } else if (currentPage == 7) {
    drawPage7();
  }
}

function drawPage1() {
  //Grundkoden til alle sider undtagen side 2
  push();
  background(247, 224, 181);
  //Rektangel til appens sidehoved
  fill(209, 183, 134);
  stroke(112, 95, 64);
  strokeWeight(5);
  rect(-10, -10, 370, 125);
  //Vi kalder vores globale variabel som kalder det preloadede billede (vores logo)
  image(billedeOverskrift, 75, 25, 200, 75);
  textAlign(CENTER);
  //Kalder på drawWords funktionen for teksten
  drawWords(width * 30);
  pop();
}

function drawPage2() {
  push();
  //Den eneste side med anerledes baggrund til at vise 'opkaldet'
  background("black");
  textAlign(CENTER, CENTER);
  //Fill og size til nummeret på selvmordslinien der vises på toppen af siden
  fill("white");
  textSize(40);
  text("70 20 12  01", width / 2, height / 2 - 150);
  //Vi kalder vores globale variabel der kalder på det preloadede billede af 'læg på' knappen
  image(billedeTelefonDerRinger, width / 2 - 50, height / 2 - 50, 100, 100);
  pop();
}

//Menu
function drawPage3() {
  push();
  background(247, 224, 181);
  fill(209, 183, 134);
  stroke(112, 95, 64);
  strokeWeight(5);
  rect(-10, -10, 370, 125);
  image(billedeOverskrift, 75, 25, 200, 75);
  textAlign(CENTER);
  pop();
}

function drawPage4() {
  push();

  pop();
}

function drawPage5() {
  push();

  pop();
}

function drawPage6() {
  push();

  pop();
}

function drawPage7() {
  push();

  pop();
}

//Tekst på forsiden
function drawWords() {
  fill(0);
  noStroke();
  text("Er det blevet for slemt?", 175, 200);
  fill(0);
  noStroke();
  text("Tryk paa knappen og ring til", 175, 240);
  fill(0);
  noStroke();
  text("selvmordslinjen nu", 175, 280);
}

// Event handler for knapSOS
function knapSOSKlik() {
  knapSOS.hide();
  knapTelefon.show();
  currentPage = 2;
}

// Event handler for knapTelefon
function knapTelefonKlik() {
  //Da vi har lavet alle vores knapper fra starten men gemt dem som udgangspunkt, har vi lavet en eventhandler til hver knap
  knapSOS.show();
  //Hver gang vi skifter side med en knap, bliver den brugte knap gemt, og den nye vist
  knapTelefon.hide();
  currentPage = 1;
}

// Event handler for knappen
function knapBurgerikonKlik() {
  knapBurgerikon.hide();
  knapSOS.hide();
  knapTelefon.hide();
  knapHjem.show();
  currentPage = 3;
}

// Event handler for knappen hjem
function knapHjemKlik() {
  knapBurgerikon.show();
  knapSOS.show();
  knapTelefon.hide();
  knapHjem.hide();
  currentPage = 1;
}
