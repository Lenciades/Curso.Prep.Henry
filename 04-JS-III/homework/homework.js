// No cambies los nombres de las funciones.
/*var numeritos=[1,2,3,4];
var primero=devolverPrimerElemento(numeritos);
console.log(primero);*/

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
  
}
/*var numeritos=[1,2,3,4];
var primero=devolverUltimoElemento(numeritos);
console.log(primero);*/
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[(array.length-1)]
}
/*var numeritos=[1,2,3,4];
console.log(obtenerLargoDelArray(numeritos));*/
function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayMasUno=[];
  for(let i=0;i<array.length;i++){
    arrayMasUno[i]=array[i]+1;
  }
  return arrayMasUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i=0;i<array.length;i++){
    if (array[i]===elemento){return true;}
  }
  return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumatoria=0;
  for(let i=0; i<numeros.length;i++){
    sumatoria=sumatoria+numeros[i];
  }
  return sumatoria;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio=agregarNumeros(resultadosTest)/resultadosTest.length;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMayor=numeros[0];
  for(let i=1;i<numeros.length;i++){
    if (numeros[i]>numeroMayor) {numeroMayor=numeros[i];}
  }
  return numeroMayor;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if(arguments.length===0){return 0};
  var productoria=arguments[0];
  for(let i=1; i<arguments.length;i++){
    productoria=productoria*arguments[i];
  }
  return productoria;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
