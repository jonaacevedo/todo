const colors = require('colors');
const argv = require('./config/yargs').argv
let comando = argv._[0]
const porHacer = require('./por-hacer/por-hacer')

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        break;
    case 'listar':
        let listado = porHacer.getListado()
        for (let tarea of listado) {
            console.log("=======Por Hacer=======".red.bold);
            console.log("Tarea:".bold, tarea.descripcion.bold);
            console.log("Estado: ".bold, tarea.completado);
            console.log("=======================".red.bold);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizarTarea(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
        break;

    default:
        console.log('Comando ingresado no reconcido');
        break;
}