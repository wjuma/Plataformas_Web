const opts = {
    base: {
        demand: true, //obligatorio
        alias: "b", //las abreviaturas mias
    },
    limite: {
        alias: "l",
        default: 10, // que el limite siempre tenga un valor
    },
};

const argv = require("yargs")
    .command("listar", "Imprime en consola la tabla de multiplicar", opts)
    .command("crear", "Creando nuevo archivo", opts)
    .help().argv; //cierre del yargs

module.exports = {
    argv,
};