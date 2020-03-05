//Comentario 
/*
Comentario 
multi linea 
*/

/* --- TIPOS DE DATOS --- */
console.log('--- Tipos de datos ---');

/*
- string -- puede llevar comillas simples ('') o comillas dobles ("")
*/
let nombre: string = 'Dario';
let apellido: string = "Herrera";

/*
- number -- almacena valores enteros, flotantes, decimales 
*/
let entero: number = 10;
let decimal: number = 1.5;
let flotante: number = 3.14159265359;

/*
- boolean -- acepta true o false  
*/
let x: boolean = true;
let y: boolean = false;

/* 
- any - recibo cualquier tipo de dato
*/
let vegetales: any[] = ['nabo', 'zanahoria', 'rabano'];
let color: any = 'Rojo';
let codigo: any = 5939;

/*
- array -- se puede definir un array de cualquier tipo de dato
*/

let arrayNumeros: number[] = [1, 2, 3, 4, 5];
let arrayNombres: Array<string> = ['Dario', 'Jose', 'Sara', 'Samantha'];

// - instanciando un array
let arrayFrutas: string[] = new Array('Manzana', 'Pera', 'Naranja');
console.log('Array de frutas: ' + arrayFrutas);

/*
- metodos de un array 
*/
//- unshift - añade uno o mas elementos al inicio del array
arrayFrutas.unshift('Mango')
console.log('Array de frutas nuevo elementos: ' + arrayFrutas);
//- push -- añade uno o mas elementos al final del array 
arrayFrutas.push('Guanabana');
console.log('Array de frutas nuevo elementos: ' + arrayFrutas);

//- shift -- elimina el primer elemento del array
arrayFrutas.shift();
console.log('Array de frutas eliminado elementos: ' + arrayFrutas);

//- pop -- elimina el ultimo elemento del array
arrayFrutas.pop();
console.log('Array de frutas eliminado elementos: ' + arrayFrutas);

//- indexOf -- encuentra el indice de un elemento del array
let posiscionPera: number = arrayFrutas.indexOf('Pera');
console.log('Posicion de fruta Pera: ' + posiscionPera);

//- splice -- permite eliminar cierto element del array.
//           recibe el indice de inicio y fin del elemento o elmento a remover.
arrayFrutas.splice(1,1);
console.log('Removiendo Pera del array: ' + arrayFrutas);

// - slice -- permite copiar un array 
let arraySinPera: string[] = arrayFrutas.slice();
console.log('Arrar copiado: ' + arraySinPera);

// - length -- tamaño de un array
let tamanoArray: number = arraySinPera.length;
console.log('Tamano del array: ' + tamanoArray);

/*
- tuple
*/ 
let animalePatas: [string, number] = ['Perro', 4];


/*
- enum
*/
enum Animals {gato, leon, perro, cabra, mono}
let gato: Animals = Animals.gato;
 
console.log(" Valor en la posicion 3 de la coleccion: " + Animals[3]);
console.log(" Indice del dato mono:  " + Animals.mono); 
console.log(" Indice del dato gato  " + gato); 

/* --- Operadores Aritmeticos --- */
console.log('--- Operadores Aritmeticos --- ')

let suma: number = 1 + 2;
let resta: number = 5 - 1;
let multiplicacion: number = 5 * 2;
let division: number = 4 / 2;
let modulo: number = 10 % 3;
let potencia: number = Math.pow(4,2);

/*
- tipos personalizados
*/

let spiderman = {
    nombre: 'Peter',
    edad: 25,
    enemigos: ['duende verder', 'hombre arena', 'venom']
}

// - especificando el tipo de dato del objeto 
let spidy : { nombre: string, enemigos: string[], edad: number  } = {
    nombre: 'Peter',
    edad: 25,
    enemigos: ['duende verder', 'hombre arena', 'venom']
}

// - creando un tipo generico 
type Hero = {
    nombre: string,
    edad: number,
    enemigos: string[]
}

let batman: Hero = {
    nombre: 'Clark Kent',
    edad: 28,
    enemigos: ['joker']
}

/*
- abrebiaciones con operadores
*/
let a: number = 10;

a += 1;
a -= 1;
a *= 2;
a /= 2;

/*
- operaddores de comparacion 
*/

var b: number = 10;
var c: number = 20;
var d: string = '10';

b == c; // compara que dos variables sean las mismas 
b === c; // compara que las dos variables evaluadas sean del mismo tipo
b < c;
c > b;
b <= c;
c >= b;
b != c;

/*
- if
*/

// - son iguales 
if ( b == d ) { 
    console.log('Operador (==) Son iguales');
} else {
    console.log('Operador (==) Son distintos');

}

// - son distintos
if ( b === d ) {
    console.log('Operador (===) Son iguales');
} else {
    console.log('Operador (===)  Son distintos');

}

/*
- for
*/
for (let i = 0; i < arrayNombres.length; i++ ){
    console.log("Nombre en la posicion " +(i+1)+ " : "   + arrayNombres[i]);
}

for (let nombre of arrayNombres) {
    console.log(nombre);
}

arrayNombres.forEach((value) => {
    console.log("Nombre: " + value);
});

/*
- while
*/ 
let contador: number = 0
while (contador < 10) {
    console.log("valor del contador:" + contador);
    contador++;
}

/*
switch
*/
let dia : number = 4;

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("No existe!");
        break;
}




