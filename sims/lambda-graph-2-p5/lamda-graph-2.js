let currentStep = 1;
let buttons = [];
let stepDescription = "";

function setup() {
  createCanvas(800, 580);
  textAlign(CENTER, CENTER);
  textSize(16);

  // Create Step buttons
  buttons.push(createButton("Step 1: Full Expression"));
  buttons.push(createButton("Step 2: First Reduction"));
  buttons.push(createButton("Step 3: Final Result"));

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].position(100 + i * 220, height - 70);
    buttons[i].mousePressed(() => {
      currentStep = i + 1;
      updateDescription();
    });
  }

  updateDescription();
}

function draw() {
  background(255);
  textSize(20);
  fill(0);
  text("Lambda Graph Rewrite: ((λx.λy.x) A) B → A", width / 2, 30);

  if (currentStep === 1) {
    drawStep1();
  } else if (currentStep === 2) {
    drawStep2();
  } else if (currentStep === 3) {
    drawStep3();
  }

  drawKey();
  drawDescription();
}

// Drawing helpers
function drawNode(x, y, label, color = "#ffffff") {
  fill(color);
  stroke(0);
  strokeWeight(1.5);
  ellipse(x, y, 90, 40);
  fill(0);
  noStroke();
  textSize(16);
  text(label, x, y-7);
}

function drawEdge(x1, y1, x2, y2) {
  stroke(0);
  strokeWeight(1.5);
  line(x1, y1, x2, y2);
}

function drawKey() {
  const startX = 610;
  const startY = 60;
  const boxSize = 20;
  const spacing = 26;

  fill(0);
  textAlign(LEFT, CENTER);
  textSize(14);
  text("Legend:", startX, startY);

  drawColorBox(startX, startY + spacing * 1, "#bbdefb", "Application Node");
  drawColorBox(startX, startY + spacing * 2, "#ffe0b2", "Lambda Abstraction");
  drawColorBox(startX, startY + spacing * 3, "#fff9c4", "Bound Variable");
  drawColorBox(startX, startY + spacing * 4, "#c8e6c9", "Input Constant");
}

function drawColorBox(x, y, colorCode, label) {
  fill(colorCode);
  stroke(0);
  rect(x, y, 20, 20);
  fill(0);
  noStroke();
  textAlign(LEFT, CENTER);
  text(label, x + 30, y + 10);
}

function drawDescription() {
  fill(0);
  textSize(14);
  textAlign(CENTER, TOP);
  text(stepDescription, width / 2, height - 40);
}

// Step 1: ((λx.λy.x) A) B
function drawStep1() {
  const app1 = { x: 400, y: 100 };
  const app2 = { x: 300, y: 200 };
  const lamX = { x: 200, y: 300 };
  const lamY = { x: 200, y: 400 };
  const varX = { x: 200, y: 480 };
  const argA = { x: 400, y: 300 };
  const argB = { x: 500, y: 200 };

  drawNode(app1.x, app1.y, "App1", "#bbdefb");
  drawNode(app2.x, app2.y, "App2", "#bbdefb");
  drawNode(lamX.x, lamX.y, "λx", "#ffe0b2");
  drawNode(lamY.x, lamY.y, "λy", "#ffe0b2");
  drawNode(varX.x, varX.y, "x", "#fff9c4");
  drawNode(argA.x, argA.y, "A", "#c8e6c9");
  drawNode(argB.x, argB.y, "B", "#c8e6c9");

  drawEdge(app1.x, app1.y + 20, app2.x, app2.y - 20); // App1 to App2
  drawEdge(app1.x, app1.y + 20, argB.x, argB.y - 20); // App1 to B
  drawEdge(app2.x, app2.y + 20, lamX.x, lamX.y - 20); // App2 to λx
  drawEdge(app2.x, app2.y + 20, argA.x, argA.y - 20); // App2 to A
  drawEdge(lamX.x, lamX.y + 20, lamY.x, lamY.y - 20); // λx to λy
  drawEdge(lamY.x, lamY.y + 20, varX.x, varX.y - 20); // λy to x
}

// Step 2: (λy.A) B
function drawStep2() {
  const app1 = { x: 400, y: 150 };
  const lamY = { x: 300, y: 250 };
  const bodyA = { x: 300, y: 350 };
  const argB = { x: 500, y: 250 };

  drawNode(app1.x, app1.y, "App1", "#bbdefb");
  drawNode(lamY.x, lamY.y, "λy", "#ffe0b2");
  drawNode(bodyA.x, bodyA.y, "A", "#c8e6c9");
  drawNode(argB.x, argB.y, "B", "#c8e6c9");

  drawEdge(app1.x, app1.y + 20, lamY.x, lamY.y - 20); // App1 to λy
  drawEdge(app1.x, app1.y + 20, argB.x, argB.y - 20); // App1 to B
  drawEdge(lamY.x, lamY.y + 20, bodyA.x, bodyA.y - 20); // λy to A
}

// Step 3: A
function drawStep3() {
  drawNode(400, 280, "A", "#c8e6c9");
}

// Step descriptions
function updateDescription() {
  if (currentStep === 1) {
    stepDescription = "Step 1 shows the full expression: ((λx.λy.x) A) B.\nThere are two application nodes: App2 applies λx.λy.x to A; App1 applies the result to B.";
  } else if (currentStep === 2) {
    stepDescription = "Step 2 shows the first β-reduction: (λx.λy.x) A → (λy.A).\nApp1 now applies this new function to B.";
  } else if (currentStep === 3) {
    stepDescription = "Step 3 shows the second β-reduction: (λy.A) B → A.\nThe entire expression reduces to A.";
  }
}
