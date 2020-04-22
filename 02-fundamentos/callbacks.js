// setTimeout(() => {
//     console.log("Hola, muchach@s!");
// }, 3000);

let getUsuarioById = (id, nickname, callback) => {
    // se puede usar otra palabra aparte de callback
    // para no confundirnos es mejor usar callback
    let n = nickname + " perez";
    let usuario = {
        nombre: n,
        id,
    };
    //realizamos un if para comprobar si existe el usuario, retornamos un error
    if (id === 20) {
        callback(`El usuario con id ${id} no existe!`); //llamamos al callback, retornaremos el id
    } else {
        callback(null, usuario, 25); // en esta parte llamamos al callback
        // ponemos null para verificar que el primero parametro no existe
    }
};

getUsuarioById(10, "pepito", (err, usuario, edad) => {
    // el primer parametro de un callback debe ser mejor un error posteriormente la informacion
    if (err) {
        return console.log(err);
    }

    console.log("Usuario de la BD:", usuario, `edad: ${edad}`); // mensaje en la consola
});