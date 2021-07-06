const { crearArchivo } = require('./helper/multiplicar')
const argv = require('./config/yargs')

console.clear()
// console.log('Argv ', argv)
crearArchivo(argv.b, argv.l, argv.h)
    .then(resp => console.log('Tabla creada', resp))
    .catch(err => console.log('Error: ', err))