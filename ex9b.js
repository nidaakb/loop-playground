/**
 * DIFÍCIL
 * 
 * LA palabra del día. Primero, intenta entender este algoritmo. ¿Qué es lo que hace? https://lapalabradeldia.com/
 */

/**
 * Completa el bucle:
 * 
 * 1. Si la siguiente letra que ha introducido el usuario es la misma letra que la que tocaría en la palabra del día, mostramos por consola : "la letra {letra} es correcta"
 * 2. Si la siguiente letra que ha introducido el usuario NO esta en la palabra del dia, mostramos por consola : "le letra {letra} NO es correcta"
 * 3. Si la siguiente letra que ha introducido el usuario se encuentra en la palabra del dia, PERO no es la posición correcta, mostrar por consola: "la letra {letra} es correcta, PERO se encuentra en una posición diferente"
 */

let palabraDelDia= "bucle";
let palabraIntroducida = "bueno";

for (let i=0;i<palabraDelDia.length;i++) {

    let siguienteLetraCorrecta = palabraDelDia[i];
    let siguienteLetraIntroducida = palabraIntroducida[i];

    // Tu código a partir de aquí, dentro del bucle
if (palabraDelDia) {
    if (siguienteLetraCorrecta == siguienteLetraIntroducida) {
        console.log("la letra " + siguienteLetraCorrecta + " es correcta.");
    } else if (palabraDelDia.includes(siguienteLetraIntroducida)){
        console.log ("La letra " + siguienteLetraIntroducida + " es correcta, pero en una posición diferente." );
    } else {
        console.log("La letra " + siguienteLetraIntroducida + " NO es correcta." )
    }   
}
}

// Resultado esperado: https://oscarm.tinytake.com/msc/ODc4MzY1N18yMjIwMzg5Mg