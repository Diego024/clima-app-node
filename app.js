const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

// lugar.getLugarlatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log);

// clima.getClima(43.46470, -3.80440)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {

        let datosLugar = await lugar.getLugarlatLng(direccion);
        let temperatura = await clima.getClima(datosLugar.latt, datosLugar.longt)

        return (`El clima de ${ datosLugar.ciudad }, ${ datosLugar.pais } es de ${ temperatura }`.red);

    } catch (error) {
        return (`No se pudo determinar el clima de ${ argv.direccion }`);
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log());
