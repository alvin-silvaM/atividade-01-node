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

//Faz o calculo do IMC através de uma função
function calcularIMC(peso, altura) {
    return peso / altura ** 2;
}

function verificarIMC(imc) {

    if (imc >= 40) {
        return "Obesidade grau III";
    } 
    else if (imc >= 35) {
        return "Obesidade grau II";
    }
    else if (imc >= 30) {
        return "Obesidade grau I";
    }
    else if (imc >= 25) {
        return "Grau de sobrepeso";
    } 
    
    return "Peso ideal";
}


async function main() {

    let peso = Number(await perguntar("Insira seu peso: "));
    let altura = Number(await perguntar("\nInsira sua altura: "));
    let imc = calcularIMC(peso, altura);

    console.log(`\nSeu IMC: ${imc.toFixed(2)} Kg/M2`);
    console.log(verificarIMC(imc));
    rl.close();
};

main();

