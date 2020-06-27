const fs = require('fs')

let listadoPorHacer = [];

const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('No se pudo ingresar la tarea')
    })
}

const cargaDB = () => {

    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {

    cargaDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardaDB()
    return porHacer
}

const getListado = () => {
    cargaDB()
    return listadoPorHacer
}

const actualizarTarea = (descripcion, completado = true) => {
    cargaDB()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardaDB()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargaDB()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardaDB()
        return true
    } else {
        return false
    }

}

module.exports = {
    crear,
    getListado,
    actualizarTarea,
    borrar
}