//Incorporamos la libreria al proyecto
const http = require("http");
const { WSASYSNOTREADY } = require("constants");
//Creamos nuestro servidor usando una funcion del http
//Donde recibimos el request= peticion que viene del cliente y el response = respuesta al cliente
http
    .createServer((req, res) => {
        // res.write("Hola mundo desde la web");
        //Responder desde json
        res.writeHead(200, { "Content-Type": "application/json" });
        let content = {
            nombre: "Wendy",
            edad: 22,
            url: req.url, // voy a obtener la url
        };
        //Envia un json al cliente
        res.write(JSON.stringify(content)); //Codificamos a un json
        res.end(); //Finaliza la escritura en el navegador
    })
    .listen(8000); //Que puerto estara escuchando

console.log("Escuchando al puerto 8000");