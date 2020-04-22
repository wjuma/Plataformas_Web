/**
 * Pruebas de async y await
 */
//async indicando un error
// let getNombre = async() => {
//     throw new Error("No existe el usuario en BD");
//     return "Rodrigo";
// }

// demostracion de promesa con async
let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Rodrigo");
        }, 3000);
        // reject("Error al consultar el nombre");
    });
};
//async es asincrona, es una promesa resumida en menos codigo, pueden estar solos
let saludo = async() => {
    let nombre = await getNombre(); //await debe estar dentro de la funcion async
    return `Hola ${nombre}`;
};
// llamos a nuestra funcion saludo
saludo()
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((err) => {
        console.log("Error en el Saludo:", err);
    });

// console.log(getNombre());

// getNombre().then(nombre => {
//     console.log(nombre);
// }).catch(err => {
//     console.log("Error en el ASYNC:", err);
// });