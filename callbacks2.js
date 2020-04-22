//base de datos
let empleados = [{
        id: 1,
        nombre: "Santiago",
    },
    {
        id: 2,
        nombre: "Wendy",
    },
    {
        id: 3,
        nombre: "Leo",
    },
];

let salarios = [{
        id: 1,
        salario: 800,
    },
    {
        id: 2,
        salario: 950,
    },
];

let getEmpleado = (id, callback) => {
    // recibimos el id y llamamos al callback
    let empleadoDB = empleados.find((empleado) => empleado.id === id); // llamamos al empleado desde nuestra base, lo almacenamos en empleadoDB
    // valida si existe o no existe el empleado
    if (!empleadoDB) {
        callback(`No existe un empleado con id ${id}`);
    } else {
        callback(null, empleadoDB); // llamamos un null, porque no hay ningun error
    }
};
// esta funcion recibira el empleado
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find((salario) => salario.id === empleado.id); // si nuestro id cumple con nuestro empleado a ese se llamara
    // nuestro para ver si se encuentra o no nuestro empleado
    if (!salarioDB) {
        callback(`No se encontró salario para el empleado ${empleado.nombre}`);
    } else {
        //si existe nuestro usuario, nos retornara este objeto
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario });
    }
};
//Aqui llamamos a nuestra funcion, con el error primero y luego la informacion que queremos recibir
getEmpleado(3, (err, empleado) => {
    // con el if manejamos nuestro error
    if (err) {
        return console.log(err);
    }
    // llamamos a nuestro empleado
    getSalario(empleado, (err, respuesta) => {
        // con el if manejamos nuestro error
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${respuesta.nombre} es de ${respuesta.salario}`);
    });
});