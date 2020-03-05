/* --- Funciones --- */
console.log('--- Tipos de datos ---');

/*
- funcion sin retorno 
*/
function menasje() {
    console.log('Hola Mundo')
}

menasje()

/*
- funcion si parametros 
*/
function sumar(): number {
    return 1 + 2;
}
console.log('funcion suma sin parametros:' + sumar());

/*
- funcion de flecha con parametros
*/
let restar = (x: number, y: number) => x - y;
console.log('funcion de flecha con parametros' + restar(5, 4));

/*
- funcion con parametros opcionales
- deben venir después de todos los parámetros no opcionales
*/
function saludar(mensaje: string, nombre?: string) {
    if (nombre == undefined) {
        nombre = '';
    }
    return mensaje + ' ' + nombre;
}

console.log(saludar('Hola'));
console.log(saludar('Hola', 'Pedro'));

/*
- funcion con parametro con valor por defecto
*/
function despedir(mensaje: string, nombre: string = 'Sara') {
        return mensaje + ' ' + nombre;
}
console.log(despedir('Adios'))
console.log(saludar('Adios', 'Samantha'))