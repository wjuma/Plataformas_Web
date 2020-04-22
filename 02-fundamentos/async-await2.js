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
//async es asincrono, llamamos a nuestro parametro
let getEmpleado = async(id) => {
    let empleadoDB = empleados.find((empleado) => empleado.id === id);
    if (!empleadoDB) {
        //throw para que nos mande nuestro error
        throw new Error(`No existe un empleado con id ${id}`);
    } else {
        //en vez de resolve el return
        return empleadoDB;
    }
};

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find((salario) => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró salario para el empleado ${empleado.nombre}`);
        } else {
            resolve({ nombre: empleado.nombre, salario: salarioDB.salario });
        }
    });
};
// nuestro await siempre debe estar dentro de un async
//llamamos a nuestras dos funciones
let getInformacion = async(id) => {
    let empleado = await getEmpleado(id); // el await espera hasta que me llegue el resultado

    let resp = await getSalario(empleado);
    //llamamos a nuestro mensaje
    return `El salario de ${resp.nombre} es de ${resp.salario}`;
};
//llamos a nuestra funcion
getInformacion(3)
    //retorna nuestro mensaje
    .then((mensaje) => console.log(mensaje))
    //retorna en error
    .catch((err) => console.log(err));