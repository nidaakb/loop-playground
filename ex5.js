/**
 * Ejercicio 5: El siguiente bucle no se ejecuta nunca.
 * Comrpruébalo con "node ex5.js"
 * ¿Sabrías decir porque?
 * Porque a la variable veces esta en 5 y estamos diciendo que i debe ser menor al numero de veces. Y como "i" empieza en 5, y la condicion es que "i" sea MENOR que el numero de "veces" el bucle no se ejecutara porque 5 no es menor que 5.
 * ---------------------------------------------------
 * Una vez lo averigues, arreglalo para que el bucle se ejecute exactamente 10 veces.
 * ATENCIÓN: SOLO puedes cambiar el valor de la variable 'veces' para conseguirlo
 * 
 * Para arreglarlo hemos establecido el numero de veces a 15 ya que i empieza en 5. 
 */

let veces = 15;

// PROHIBIDO modificar el código a partir de aquí

for (let i = 5; i < veces; i++) {
  console.log("No me voy a ejecutar...");
}
