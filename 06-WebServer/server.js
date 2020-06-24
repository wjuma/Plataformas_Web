const express = require("express");
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");

const puerto = process.env.PORT || 3000; // pARA HEROKU
//solo me funciona solo para el index no otra ruta mas
/*
app.get("/", function(req, res) {
    //  res.send("Hello World");
    //FORMATO JSON
    let content = {
        nombre: "Wendy",
        edad: 22,
        url: req.url, // voy a obtener la url
    };
    //MANDAMOS UN JSON
    res.send(content);
});

app.get("/about", function(req, res) {
    res.send("Este es mi primer sitio web con Express + Node.js");
});
*/
//Pagina web estatica, buscara el contenido que tengo en la
// carpeta public
app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname + "/views/parciales"); //Llamamos a la carpeta parciales

app.set("view engine", "hbs"); //Motor de templates
app.get("/", (req, res) => {
    res.render("home", {
        nombre: "WeNdy",

        pagina: "Home",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        pagina: "About",
    });
});
//
// app.listen(3000, () => {
//     //Para que me imprima por consola
//     console.log("Escuchando en el puerto 3000");
// });

app.listen(puerto, () => {
    //Para que me imprima por consola
    console.log(`Escuchando en el puerto ${puerto}`);
});