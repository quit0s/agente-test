/*
EJERCICIOS DE CLASES EN JAVASCRIPT
Ejecutar: node app.mjs
*/

console.log("=== Ejercicios de Clases ===\n");

// EJERCICIO 1:
// Crea una clase Paciente con constructor(dni, nombre).
// Dentro del constructor guardá esos valores en this.dni y this.nombre.
class Paciente {
    constructor(dni,nombre){
        this.dni = dni;
        this.nombre = nombre;
    };
}

// EJERCICIO 2:
// Crea una instancia de Paciente con tus datos.
const paciente1 = new Paciente(46871500,"Marcos"); // TODO: new Paciente(...)
console.log("EJ 2 -> instancia:", paciente1);

// EJERCICIO 3:
// Agrega un método presentarse() que devuelva:
// "Hola, soy {nombre} y mi DNI es {dni}"

Paciente.prototype.presentarse = function (){console.log("Hola ", this.nombre)};
// TODO: definir el metodo
// Paciente.prototype.presentarse = function () { ... };
console.log(
  "EJ 3 -> metodo:",
  paciente1 && typeof paciente1.presentarse === "function"
    ? paciente1.presentarse()
    : "TODO"
);

// EJERCICIO 4:
// Crea una clase Medico con:
// constructor(id, nombre, especialidad)
// método resumen() => "{nombre} - {especialidad}"
class Medico {
  // TODO: constructor
  // TODO: metodo resumen()
}

const medico1 = null; // TODO: new Medico(...)
console.log(
  "EJ 4 -> medico:",
  medico1 && typeof medico1.resumen === "function" ? medico1.resumen() : "TODO"
);

// EJERCICIO 5:
// ¿Cómo sabés si un objeto fue creado por una clase?
console.log("EJ 5 -> paciente1 es Paciente:", paciente1 instanceof Paciente); // TODO true
console.log("EJ 5 -> medico1 es Medico:", medico1 instanceof Medico); // TODO true

// EJERCICIO 6:
// Herencia: crea una clase MedicoEspecialista que extienda Medico.
// Agregá "subespecialidad" y sobrescribí resumen() para incluirla.
class MedicoEspecialista extends Medico {
  // TODO: constructor con super(...)
  // TODO: override de resumen()
}

const medico2 = null; // TODO: new MedicoEspecialista(...)
console.log(
  "EJ 6 -> especialista:",
  medico2 && typeof medico2.resumen === "function" ? medico2.resumen() : "TODO"
);

// EJERCICIO 7:
// Pregunta conceptual:
// ¿Por qué para una clase se usa "new"?
// Respuesta esperada: porque crea una instancia y asigna "this".
console.log("EJ 7 -> respuesta:", "TODO");

// EJERCICIO 8:
// Crea una clase Turno con:
// - constructor(dni, fecha)
// - método confirmar() que devuelva:
//   "Turno confirmado para {dni} el {fecha}"
class Turno {
  // TODO
}
const turno1 = null; // TODO
console.log(
  "EJ 8 -> turno:",
  turno1 && typeof turno1.confirmar === "function" ? turno1.confirmar() : "TODO"
);

console.log("\nCompletalos y te los corrijo uno por uno.");
