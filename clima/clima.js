const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=8f6fdcab8f29ed4d7b878dcf01d2451b&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}