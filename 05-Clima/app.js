const clima = require("./controlador/clima");

const argv = require("yargs").options({
    ciudad: {
        alias: "c",
        desc: "Nombre de la ciudad para obtener el clima",
        demand: true,
    },
    opcional: {
        alias: "o",
        desc: "Presion o humedad",
    },
}).argv;

//console.log(argv.ciudad);
const getInformacion = async(ciudad, opcional = "") => {
    try {
        const temp = await clima.getClima(argv.ciudad);
        switch (argv.opcional) {
            case "h":
                return `El clima de la ciudad ${ciudad} es de ${temp.temp} con una humedad ${temp.humidity}`;
                break;
            case "p":
                return `El clima de la ciudad ${ciudad} es de ${temp.temp} con una presion ${temp.pressure}`;
                break;
            default:
                return `El clima de la ciudad ${ciudad} es de ${temp.temp} `;
                break;
        }
    } catch (e) {
        return `No se pudo obtener el clima de la ${ciudad}`;
    }
};

//clima.getClima(argv.ciudad).then(console.log).catch(console.log);

getInformacion(argv.ciudad).then(console.log).catch(console.log);