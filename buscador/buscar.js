const fs = require('fs')
const csv = require('csv-parser');
let mostrar = () => {
    let readstream = fs.createReadStream('datos.csv').pipe(csv());
    readstream.on("data", (data) => {
        console.log(data);
    })




}


module.exports = {
    mostrar
};