const axios = require('axios');

const getLugarlatLng = async(direccion) => {

    const resp = await axios.get(`https://geocode.xyz/Hauptstr.,+57632+"${ direccion }"?json=1`)
        .catch()

    if (resp.data.latt === '0.00000') {
        throw new Error();
    }

    const data = resp.data;
    const ciudad = data.standard.city;
    const pais = data.standard.countryname;
    const latt = data.latt;
    const longt = data.longt;


    return {
        ciudad,
        pais,
        latt,
        longt
    }
}

module.exports = {
    getLugarlatLng
}