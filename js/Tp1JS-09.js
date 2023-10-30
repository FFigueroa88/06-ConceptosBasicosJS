/*EJERCICIOS CON JAVASCRIPT 
practica con variables 
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/
let frase = prompt("Escriba una frase.Se mostrará las vocales usadas");
let n = 0;
vocales ="";
while(n < frase.length){

    if(frase.charAt(n) == "a" || frase.charAt(n) == "e" || frase.charAt(n) == "i" || frase.charAt(n) == "o" || frase.charAt(n) == "u" || frase.charAt(n) == "A" || frase.charAt(n) == "E" || frase.charAt(n) == "I" || frase.charAt(n) == "O" || frase.charAt(n) == "U" ){

        vocales= vocales + frase.charAt(n) ; 
    }

    n++;

}
document.write(vocales);