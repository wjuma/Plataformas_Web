require("./config/config"); // voy a requerir lo que este en mi carpeta
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//PETICIONES
//get: obtener datos, registros
//POST: agregar nuevos datos; crear recursos tabla registros
//put: actualizar datos como correo
//delete: eliminar o cambiar de estado

// parse application/x-www-form-urlencoded
//procesa peticiones que llegan
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//peticion a la raiz
// app.get("/", (req, res) => {
//     //res.send("Hola mundo");
//     //formato json
//     res.json("Hola");
// });
//peticiones get
app.get("/usuario", (req, res) => {
    //res.send('Hola ');
    res.json("get usuario");
});
//peticiones post
app.post("/usuario", (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario",
        });
    } else {
        res.json({
            body,
        });
        //res.json("post usuario");
    }
});

app.put("/usuario/:id", (req, res) => {
    //res.send('Hola ');
    //llega a traves del req el id
    let id = req.params.id;

    // if (body.nombre == undefined) {
    //     res.status(400).json({
    //         ok: false,
    //         mensaje: "El nombre es necesario",
    //     });
    // }
    res.json({
        id,
    });
});

app.delete("/usuario", (req, res) => {
    //res.send('Hola ');
    res.json("delete usuario");
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});

// ya no es fijo
// app.listen(3000, () => {
//     console.log("Escuchando en el puerto", 3000);
// });