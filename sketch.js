// Globale variabler
let billedeOverskrift;
let billedeTelefonDerRinger;
let billedeBurgerikon;
let billedeTelefon;
let billedRødTelefon;
let billedHjem;
let billedeTests;
let billedeIndstillinger;
let billedeQuestion;
let billedPhone;
let billedeTest;
let billedeSettings;
let billedeHjælp;
let font;
let fontsize = 25;
let fontsize2 = 15;
let knapSOS;
let knapTelefon;
let knapBurgerikon;
let knapHjem;
let knapQuestion;
let knapTests;
let knapIndstillinger;
let knapPhone;
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
  billedeQuestion = loadImage("billeder/questionmark.png");
  billedeTests = loadImage("billeder/tests.png");
  billedeIndstillinger = loadImage("billeder/indstillinger.png");
  billedPhone = loadImage("billeder/phone.png");
  billedeTest = loadImage("billeder/test.png");
  billedeSettings = loadImage("billeder/settings.png");
  billedeHjælp = loadImage("billeder/hjælp.png");
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

  knapHjem = createButton(" ");
  knapHjem.position(width / 2 - 30, height - 100);
  knapHjem.size(60, 60);
  knapHjem.style("background-color", "transparent");
  knapHjem.style("border", "none");
  knapHjem.style("background-image", "url(" + "billeder/hjem.png" + ")");
  knapHjem.style("background-size", "100% 100%");
  knapHjem.mousePressed(knapHjemKlik);
  knapHjem.hide();

  knapQuestion = createButton(" ");
  knapQuestion.position(15, 150);
  knapQuestion.size(40, 40);
  knapQuestion.style("background-color", "transparent");
  knapQuestion.style("border", "none");
  knapQuestion.style(
    "background-image",
    "url(" + "billeder/questionmark.png" + ")"
  );
  knapQuestion.style("background-size", "100% 100%");
  knapQuestion.mousePressed(knapQuestionKlik);
  knapQuestion.show();

  knapTests = createButton(" ");
  knapTests.position(15, 200);
  knapTests.size(40, 40);
  knapTests.style("background-color", "transparent");
  knapTests.style("border", "none");
  knapTests.style("background-image", "url(" + "billeder/tests.png" + ")");
  knapTests.style("background-size", "100% 100%");
  knapTests.mousePressed(knapTestsKlik);
  knapTests.show();

  knapIndstillinger = createButton(" ");
  knapIndstillinger.position(15, 250);
  knapIndstillinger.size(40, 40);
  knapIndstillinger.style("background-color", "transparent");
  knapIndstillinger.style("border", "none");
  knapIndstillinger.style(
    "background-image",
    "url(" + "billeder/Indstillinger.png" + ")"
  );
  knapIndstillinger.style("background-size", "100% 100%");
  knapIndstillinger.mousePressed(knapIndstillingerKlik);
  knapIndstillinger.show();

  knapPhone = createButton(" ");
  knapPhone.position(15, 300);
  knapPhone.size(40, 40);
  knapPhone.style("background-color", "transparent");
  knapPhone.style("border", "none");
  knapPhone.style("background-image", "url(" + "billeder/phone.png" + ")");
  knapPhone.style("background-size", "100% 100%");
  knapPhone.mousePressed(knapPhoneKlik);
  knapPhone.show();
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
  knapQuestion.hide();
  knapTests.hide();
  knapIndstillinger.hide();
  knapPhone.hide();
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
  drawWords2(width * 30);
  pop();
}

function drawPage4() {
  push();
  background(247, 224, 181);
  fill(209, 183, 134);
  stroke(112, 95, 64);
  strokeWeight(5);
  rect(-10, -10, 370, 125);
  image(billedeOverskrift, 75, 25, 200, 75);
  textAlign(CENTER);
  drawWords3(width * 30);
  pop();
  knapQuestion.hide();
  knapTests.hide();
  knapIndstillinger.hide();
  knapPhone.hide();
  knapBurgerikon.show();
}

function drawPage5() {
  push();
  background(247, 224, 181);
  fill(209, 183, 134);
  stroke(112, 95, 64);
  strokeWeight(5);
  rect(-10, -10, 370, 125);
  image(billedeOverskrift, 75, 25, 200, 75);
  textAlign(CENTER);
  image(billedeTest, 0, 0, 350, 500);
  pop();
  knapQuestion.hide();
  knapTests.hide();
  knapIndstillinger.hide();
  knapPhone.hide();
  knapBurgerikon.show();
}

function drawPage6() {
  push();
  background(247, 224, 181);
  fill(209, 183, 134);
  stroke(112, 95, 64);
  strokeWeight(5);
  rect(-10, -10, 370, 125);
  image(billedeOverskrift, 75, 25, 200, 75);
  textAlign(CENTER);
  image(billedeSettings, 0, 0, 350, 500);
  pop();
  knapQuestion.hide();
  knapTests.hide();
  knapIndstillinger.hide();
  knapPhone.hide();
  knapBurgerikon.show();
}

function drawPage7() {
  push();
  background(247, 224, 181);
  fill(209, 183, 134);
  stroke(112, 95, 64);
  strokeWeight(5);
  rect(-10, -10, 370, 125);
  image(billedeOverskrift, 75, 25, 200, 75);
  textAlign(CENTER);
  image(billedeHjælp, 0, 0, 350, 500);
  pop();
  knapQuestion.hide();
  knapTests.hide();
  knapIndstillinger.hide();
  knapPhone.hide();
  knapBurgerikon.show();
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

//Tekst på side 3 (menuen)
function drawWords2() {
  fill(0);
  noStroke();
  text("Laes mere om...", 175, 170);
  fill(0);
  noStroke();
  text("Tests", 112, 220);
  fill(0);
  noStroke();
  text("Indstillinger", 147, 270);
  fill(0);
  noStroke();
  text("Faa hjaelp", 142, 320);
}

//Tekst på side 4 (læs mere om...)
function drawWords3() {
  textSize(20);
  fill(0);
  noStroke();
  text("Angst er", 70, 140);
  fill(0);
  noStroke();
  text("Autisme er", 80, 200);
  fill(0);
  noStroke();
  text("ADHD er", 67, 260);
  fill(0);
  noStroke();
  text("Depression er", 95, 320);
  textSize(10);
  text(
    "..en naturlig foelelse ligesom vrede, jalousi, glaede og andre foelelser.",
    180,
    160
  );
  text(
    "Men for nogle løber angsten løbsk og udvikler sig til en sygdom.",
    170,
    170
  );
  text("Laes mere HER.", 280, 182);
  text(
    "..en udviklingsforstyrrelse. Personer med autisme har en anderledes",
    180,
    220
  );
  text(
    "maade at opleve verden paa og kan have en nedsat evne til bl.a. at",
    182,
    230
  );
  text("saette sig ind i andre menneskers tanker.", 122, 240);
  text("Laes mere HER.", 280, 242);
  text(
    "..en udviklingsforstyrrelse, hvor man har de typiske symptomer -",
    175,
    275
  );
  text(
    "koncentrationsvanskeligheder, hyperaktivitet og impulsivitet.",
    170,
    285
  );
  text("Laes mere HER.", 280, 297);
  text(
    "en psykisk sygdom, der viser sig ved at man er vedvarende nedtrykt,",
    185,
    340
  );
  text(
    "har nedsat lyst, energi og interesse, og er mere traet end normalt.",
    180,
    350
  );
  text("Laes mere HER.", 280, 362);
}

// Event handler for knapSOS
function knapSOSKlik() {
  knapSOS.hide();
  knapQuestion.hide();
  knapTests.hide();
  knapIndstillinger.hide();
  knapPhone.hide();
  knapBurgerikon.hide();
  knapTelefon.show();
  currentPage = 2;
}

// Event handler for knapTelefon
function knapTelefonKlik() {
  //Da vi har lavet alle vores knapper fra starten men gemt dem som udgangspunkt, har vi lavet en eventhandler til hver knap
  knapSOS.show();
  //Hver gang vi skifter side med en knap, bliver den brugte knap gemt, og den nye vist
  knapTelefon.hide();
  knapQuestion.hide();
  knapTests.hide();
  knapIndstillinger.hide();
  knapPhone.hide();
  knapBurgerikon.show();
  currentPage = 1;
}

// Event handler for knapBurgerikon
function knapBurgerikonKlik() {
  knapBurgerikon.hide();
  knapSOS.hide();
  knapTelefon.hide();
  knapTests.show();
  knapHjem.show();
  knapIndstillinger.show();
  knapPhone.show();
  knapQuestion.show();
  currentPage = 3;
}

// Event handler for knapHjem
function knapHjemKlik() {
  knapBurgerikon.show();
  knapSOS.show();
  knapTelefon.hide();
  knapHjem.hide();
  knapIndstillinger.hide();
  knapPhone.hide();
  knapQuestion.hide();
  knapTests.hide();
  currentPage = 1;
}

//Event handler for knapQuestion
function knapQuestionKlik() {
  knapQuestion.hide();
  currentPage = 4;
}

//Event handler for knapTests
function knapTestsKlik() {
  knapTests.hide();
  currentPage = 5;
}

//Event handler for knapIndstillinger
function knapIndstillingerKlik() {
  knapIndstillinger.hide();
  currentPage = 6;
}

//Event handler for knapPhone
function knapPhoneKlik() {
  knapPhone.hide();
  currentPage = 7;
}
