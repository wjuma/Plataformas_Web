const axios = require("axios");

const getClima = async(ciudad) => {
    const ciudadURL = encodeURI(ciudad);
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudadURL}&appid=5ee60f6834e30e631fa34a90f849eab4&units=metric`
    );
    return resp.data.main;
};

module.exports = {
    getClima,
};