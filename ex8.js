/**
 * Bucles while
 *
 * Modifica el bucle while para que escriba por el terminal 
 * escriba 5 veces exactamente "Ejecuto!". Actualmente lo escribe 6 veces. Porque?
 * 
 * Reestricción: NO puedes cambiar el valor de las variables 'veces' ni 'i' !!
 * 

 */

let veces = 5
let i = 0

// tendriamos que quitar el "=" detras de "<" para que el bucle termine exactamente cuando i sea igual a 5. porque cuando llegue al 5 vera que 5  es igual a 5 y ejecutara el bucle una vez mas dejando un "Ejecuto!" extra.

while (i<veces) {
    console.log("Ejecuto!")
    i++
}