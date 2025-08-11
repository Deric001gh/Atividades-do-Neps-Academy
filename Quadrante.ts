// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// Seu código vai aqui
const X = parseInt(input[0]);
const Y = parseInt(input[1]);

if (X === 0 || Y === 0) {
  console.log("eixos");
} else if (X > 0 && Y > 0) {
  console.log("Q1");
} else if (X < 0 && Y > 0) {
  console.log("Q2");
} else if (X < 0 && Y < 0) {
  console.log("Q3");
} else {
  console.log("Q4");
}
