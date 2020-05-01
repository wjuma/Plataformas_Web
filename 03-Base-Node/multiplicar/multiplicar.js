// //requireds
// const fs = require("fs"); //propia de node, solo la definimos
// //const fs = require('express'); // no es propia de node es un paquete que se instala codigo de otras personas
// //const fs = require('./fs'); // son archivos que nosotros mismo escribimos

// // sera una funcion que recibe la , en el cuerpo de la promesa tengo toda mi logica

// let crearArchivo = (base) => {
//     return new Promise((resolve, reject) => {
//         // aqui guardamos nuestra tabla
//         let data = "";
//         for (let i = 1; i <= 10; i = i + 1) {
//             // let base = 2;
//             // let r = base * i;
//             // console.log(`la tabla  del  ${base} * ${i} = ${r}`);
//             // en donde puedo hacer mis respuesta en la misma impresion
//             data += `${base} * ${i} = ${base * i}\n`; //+= para concatenera
//         }

//         // mi paquete de node; fs el paquete que importo
//         fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//             //cambiare throw por reject para indicar mi error
//             if (err) reject(err);
//             // en el callback recibimos el error
//             else resolve(`La tabla ${base}.txt`);
//             //console.log(`La tabla ${base} se ha creado`); // caso contrario
//         });
//     });
// };

// // forma de crear un modulo con sus objetos
// module.exports = {
//     crearArchivo,
// };
//requireds
const fs = require("fs"); //propia de node, solo la definimos
//debo hacer un require por cada vez que necesite esa libreria
var colors = require("colors");
// sera una funcion que recibe la , en el cuerpo de la promesa tengo toda mi logica

let listarTabla = (base, limite = 10) => {
    console.log("===================".green);
    console.log(`tabla de ${base}===`.red);
    for (let i = 1; i <= limite; i++) {
        console.log(` ${base} * ${i} = ${base * i}`);
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        //si base no es un numero
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es numero`); // el rejct sigue ejecutnado
            return; // para que ya no siga ejecutantdo
        }
        // aqui guardamos nuestra tabla
        let data = "";
        for (let i = 1; i <= limite; i = i + 1) {
            data += `${base} * ${i} = ${base * i}\n`; //+= para concatenera
        }

        fs.writeFile(`tablas/tabla-${base}--al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`La tabla ${base}--al-${limite}.txt`);
        });
    });
};

// forma de crear un modulo con sus objetos
module.exports = {
    crearArchivo,
    listarTabla,
};