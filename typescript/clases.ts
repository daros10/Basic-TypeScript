/*
- definicion de una clase
*/
class Persona {
    protected nombre: string;
    protected apellido: string;

    constructor( nombre: string,  apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    mostrarInformacion() {
        console.log(this.nombre +' '+ this.apellido)
    }

}

// - instancio de la clase 
let dario = new Persona("Dario", "Herrera");
dario.mostrarInformacion()

/*
- herencia 
*/
class Empleado extends Persona {
    private sueldo:number;
    constructor(nombre:string, apellido:string, sueldo:number) {
      super(nombre, apellido);
      this.sueldo = sueldo;
    }
  
    imprimir() {
      super.mostrarInformacion();
      console.log(`Sueldo: ${this.sueldo}`);      
    }
  
    pagaImpuestos() {
      if (this.sueldo>1000)
        console.log(`${this.nombre} debe pagar impuestos`);
      else
        console.log(`${this.nombre} no debe pagar impuestos`);
    }
  }

  let empleado = new Empleado("Dario", "Herrera", 1100);
  empleado.imprimir();
  empleado.pagaImpuestos();


/*
- interfaces
*/
interface Avenger {
    nombre: string;
    edad: number;
}

function desplegar(vengador: Avenger) {
    console.log('Desplegando vengador.\n Nombre: ' + vengador.nombre + '\n Edad: ' + vengador.edad);
}

let thor: Avenger = {
    nombre: 'Thor',
    edad: 800
};


desplegar(thor);

/*
- Interfaz implementada en una clase
*/
interface Saludar {
    saludar(): any;
}

class SaludarEspaniol implements Saludar {

    saludar() {
        return 'Hola a todos!';
    }

}

let saludo = new SaludarEspaniol();
console.log(saludo.saludar());

