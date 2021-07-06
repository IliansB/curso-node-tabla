// const { options } = require('yargs');
const argv = require('yargs')
    .option(
        'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: "Número base de multiplicación"
    }
    )
    .option(
        'l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        description: "Lista la tabla por consola"
    },
    )
    .option(
        'h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        description: "Limite de la multiplicación"
    },
    )
    .check((argv, options) => {
        if (isNaN(argv.b)) throw 'La base debe ser númerica'
        if (isNaN(argv.h)) throw 'El hasta debe ser númerico'

        return true
    }).argv
    module.exports = argv