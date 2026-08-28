const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Cria uma função pra perguntar
function perguntar(pergunta) {

    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
        });
    });
}

function calculadora(a, b, operacao) {

    switch (operacao) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "**":
            return a ** b;
        default:
            return "Operação inválida";
    }

}

async function main() {
    let n1 = Number(await perguntar("Digite o primeiro número: "));
    let n2 = Number(await perguntar("Digite o número 2: "));
    let operacao = await perguntar("Operações disponíveis: \nSoma: +\nSubtração: -\nMultiplicação: *\nDivisão: /\nExponenciação: ** \n(Você): ");
    let resultado = calculadora(n1, n2, operacao);

    console.log(`Resultado: ${resultado}`);
    rl.close();
}

main();