//<<<########## 1. Mostrar mensaje en consola mediante un callback ########>>>

function mostrarMensaje(callback) {
  // Llamamos al callback con el mensaje
  callback('Este es un mensaje en la consola');
}

// Ejemplo de uso
mostrarMensaje(console.log); // Muestra el mensaje usando console.log
mostrarMensaje(console.warn); // Muestra el mensaje usando console.warn
mostrarMensaje(console.info); // Muestra el mensaje usando console.info
//


//<<<########## 2. Determinar el tipo de dato y mostrar su contenido ########>>>

function analizarDato(variable, callback) {
  // Determinamos el tipo de dato
  const tipoDato = typeof variable;
  // Llamamos al callback con el tipo de dato y el contenido
  callback(tipoDato, variable);
}

// Ejemplo de uso
analizarDato(42, function(tipo, contenido) {
  console.log(`Tipo de dato: ${tipo}, Contenido: ${contenido}`);
});


//<<<########## 3. Realizar operaciones matemáticas mediante un callback ########>>>

function operarNumeros(num1, num2, callback) {
  // Llamamos al callback con el resultado de la operación
  callback(num1, num2);
}

// Ejemplo de uso
function suma(a, b) {
  console.log(`Suma: ${a + b}`);
}

function resta(a, b) {
  console.log(`Resta: ${a - b}`);
}

function multiplicacion(a, b) {
  console.log(`Multiplicación: ${a * b}`);
}

function division(a, b) {
  console.log(`División: ${a / b}`);
}

operarNumeros(10, 5, suma); // Resultado: Suma: 15
operarNumeros(10, 5, resta); // Resultado: Resta: 5
operarNumeros(10, 5, multiplicacion); // Resultado: Multiplicación: 50
operarNumeros(10, 5, division); // Resultado: División: 2


//<<<########## 4. Convertir una cadena a mayúsculas o minúsculas mediante un callback ########>>>

function transformarCadena(cadena, callback) {
  // Llamamos al callback con la cadena transformada
  callback(cadena);
}

// Ejemplo de uso
function mayusculas(cadena) {
  console.log(cadena.toUpperCase());
}

function minusculas(cadena) {
  console.log(cadena.toLowerCase());
}

transformarCadena("PejeLagarto", mayusculas); // Resultado: PEJELAGARTO
transformarCadena("PejeLagarto", minusculas); // Resultado: pejelagarto


//<<<########## 5. Filtrar valores mayores a dos horas en minutos mediante un callback ########>>>

function filtrarTiempo(arr, callback) {
  // Filtramos valores mayores a 120 minutos (2 horas)
  const resultado = arr.filter(valor => valor > 120);
  // Llamamos al callback con el resultado
  callback(resultado);
}

// Ejemplo de uso
const tiempos = [120, 80, 200, 100];
function mostrarTiemposMayoresADosHoras(arr) {
  console.log(`Tiempos mayores a 2 horas: ${arr}`);
}

filtrarTiempo(tiempos, mostrarTiemposMayoresADosHoras); // Resultado: Tiempos mayores a 2 horas: 120,200
