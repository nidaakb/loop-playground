/**
 * El bucle infinito
 *
 * El siguiente bucle 'while', no acaba nunca. ¿Por qué?
 * Porque la variable i siempre sera 0 nunca se incrementa por lo que genera un loop infintio y para pararlo tendriamos que añadir i++ para que pueda increcementar i en cada iteracion.
 * 
 * Arreglalo para que la palabra "Ejecutar!" se muestre 10 veces por el terminal
 */

let n=10;
let i=0;

while(i<n) {
    console.log("Ejecutar!");
    i++;
}

