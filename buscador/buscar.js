const fs = require('fs')
const csv = require('csv-parser');
let mostrar = () => {
    busca = 'ZWE';
    let csvData = [];
    let readstream = fs.createReadStream('datos.csv').pipe(csv());
    readstream.on("data", function(csvrow) {
        console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);
        // for (x = 0; x < csvData.length; x++) {

        //     console.log(csvData[x])

        // }
        //console.log(csvData[0])

    })




}


module.exports = {
    mostrar
};