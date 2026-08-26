const http = require("http");

const servidor = http.createServer((req, res) => {

    res.writeHead(200, {
        "write-head": "text/plain"
    });

    res.end("servidor funcionando");

})

servidor.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000")
})
