const cmd = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    },
    borrar: {
        alias: 'b',
        desc: 'Elimina una tarea de la base de datos'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', cmd)
    .command('actualizar', 'Actualiza un elemento por hacer', cmd)
    .command('borrar', 'Elimina una tarea', cmd)
    .help()
    .argv

module.exports = {
    argv
}