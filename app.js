const fs = require('fs');
const colors = require('colors')
const csv = require('csv-parser');
let codigo = 'ZWE'

const { mostrar } = require('./buscador/buscar');

mostrar();
// fs.createReadStream('datos.csv')
//     .pipe(csv())
//     .on('data', (row) => {

//         console.log(row);
//     })
//     .on('end', () => {
//         console.log('CSV file successfully processed');
//     });




// fs.createReadStream('datos.csv')
// .pipe(csv())
// .on('data', function(data){
//     try {
//         //perform the operation
//     }
//     catch(err) {
//         //error handler
//     }
// })
// .on('end',function(){
//     //some final operation
// });