/*
EJERCICIOS JSON (editar este archivo y ejecutar: node app.mjs)

Objetivo:
1) Entender {} (objeto) y [] (array)
2) Practicar JSON.stringify y JSON.parse
*/

console.log("=== Ejercicios de JSON ===\n");

// EJERCICIO 1:
// Crea un objeto "paciente" con:
// dni (number), nombre (string), tieneObraSocial (boolean)
const paciente = {
    dni: 46871500,
    nombre: "Marcos",
    tieneObraSocial: true,
};
console.log("EJ 1 -> paciente:", paciente);

// EJERCICIO 2:
// Crea un array "diasDisponibles" con 3 strings (por ej: "lunes", "martes", "miercoles")
const diasDisponibles = [
  "Lunes","Martes","Miercoles"
];
console.log("EJ 2 -> diasDisponibles:", diasDisponibles);

// EJERCICIO 3:
// Muestra en consola el nombre del paciente y el primer dia disponible.
// Esperado: usar paciente.nombre y diasDisponibles[0]
console.log("EJ 3 -> nombre paciente:", paciente.nombre); // TODO
console.log("EJ 3 -> primer dia:", diasDisponibles[0]); // TODO

// EJERCICIO 4:
// Convierte el objeto paciente a texto JSON y guardalo en pacienteJson
const pacienteJson = JSON.stringify(paciente); // TODO
console.log("EJ 4 -> pacienteJson:", pacienteJson);
console.log("EJ 4 -> tipo:", typeof pacienteJson); // string

// EJERCICIO 5:
// Convierte pacienteJson de nuevo a objeto JS en "pacienteParseado"
const pacienteParseado = JSON.parse(pacienteJson); // TODO
console.log("EJ 5 -> pacienteParseado:", pacienteParseado);
console.log("EJ 5 -> tipo:", typeof pacienteParseado); // object

// EJERCICIO 6:
// Crea un objeto de respuesta de tool con:
// { ok: true, data: { turno_id: 1234, fecha: "2026-03-02" } }
// y conviertelo a texto JSON en "toolOutput"
const toolOutput = JSON.stringify({
    ok: true,
    data: {
        turno_id: 1234,
        fecha: "2026-03-02",
    }
}); 
console.log("EJ 6 -> toolOutput:", toolOutput);

// EJERCICIO 7:
// Descomenta esta linea y corregi el JSON para que JSON.parse no falle.
// Pista: JSON exige comillas dobles.
const jsonRoto = '{"dni":47066792}';
console.log("EJ 7 ->", JSON.parse(jsonRoto));

// EJERCICIO 8:
// ¿Esto es objeto o array? Completa con "objeto" o "array"

const ejemploA = { id: 1, nombre: "Ana" };
const ejemploB = [1, 2, 3];
console.log("EJ 8 -> ejemploA es: objeto"); // TODO
console.log("EJ 8 -> ejemploB es: array"); // TODO

console.log("\nTip: cuando termines, si queres te los corrijo uno por uno.");
