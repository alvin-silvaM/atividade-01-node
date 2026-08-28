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

//Função que verifica os requisitos pra ser bissexto
function bissexto(ano) {

    if ((ano % 4 === 0) && (ano % 100 !== 0 || ano % 400 === 0)) {
        return true;
    }

    return false;
}

async function main() {
    let resposta = null;

    while (resposta != 2) {

        let ano = Number(await perguntar("Digite o ano: "));
        console.log(`Ano: ${ano} \nBissexto: ${bissexto(ano)}`);

        resposta = Number(await perguntar("Verificar novamente? \n[1 = Sim / 2 = Não]: "))

    }
    rl.close();
}

main();