const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la taera por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    descripcion: 'marca como completaod o pendiente'
}
const argv = require('yargs')


.command('crear', 'crear un elemneto por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado de una taera', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar una taera', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}