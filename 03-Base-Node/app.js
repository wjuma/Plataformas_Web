//llamamos  a nuestra funcion mediante el modulo
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar.js");
//console.log(argv);

//Importaremos yargs con require
const argv = require("./config/yargs").argv;
//llamando a color
var colors = require("colors");

let comando = argv._[0];

// switch (comando) {
//     case "listar":
//         listarTabla(argv.base, argv.limite);
//         break;
//     case "crear":
//         //funcion
//         crearArchivo(argv.base, argv.limite)
//             .then((archivo) => console.log(`Archivo creado: ${archivo.green}`))
//             .catch((err) => console.log(err));
//         break;

//     default:
//         console.log("Comando incorrecto");
// }
//tablade multiplicar
//let base = "5";
//console.log(process.argv);

// let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split("=")[2];
// console.log(parametro);
var colors = require("colors");
console.log("Probando colores :)".red);
console.log(colors.green(" Otra manera de hacerlo"));