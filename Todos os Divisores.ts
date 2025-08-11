// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const X = parseInt(input.trim());
let resultado = [];

for (let i = 1; i <= X; i++) {
    if (X % i === 0) {
        resultado.push(i);
    }
}

console.log(resultado.join(" "));
