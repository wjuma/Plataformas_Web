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
// en promesa no tendremos un callback, solo llamaremos a nuestro parametro
let getEmpleado = (id) => {
    // tenemos dos callback en promesa: resolve= se llamara si la promesa es exitos, reject= se llamara si la promesa no es exitosa
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find((empleado) => empleado.id === id);
        if (!empleadoDB) {
            // se cambia el callback por el reject y resolve
            reject(`No existe un empleado con id ${id}`); // reject
        } else {
            // en resolve solo podemos mandar un dato, caso contraria deberiamos mandar un objetos
            resolve(empleadoDB); // resolve
        }
    });
};
// obtendremos el salario del empleado
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find((salario) => salario.id === empleado.id);

        if (!salarioDB) {
            // nuestra promesa llamara el reject y resolve
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            // llamamos nuestro resolve como objeto
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }
    });
};

// Consulta: Async y Await

// getEmpleado(3)
//dentro del then especificamos nuestro resolve y reject
// en este then obtengo la informacion del empleado
//.then(empleado => {
// en este el salario por el id de empleado
//     getSalario(empleado).then(resp => {
//         console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
//Llamos a nuestros errores "err"
//}, (err) => {
//         console.log(err);
//     });
// }, (err) => {
//     console.log(err);
// });

// Promesas en cadena

getEmpleado(20) // llamamos en forma de cadena nuestra promesa enlazando las dos funcioens ya creadas con el then
    .then((empleado) => {
        return getSalario(empleado);
    })

.then((resp) => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
    // catch llamara a todos los errores que tengamos
    .catch((err) => {
        console.log(err);
    });