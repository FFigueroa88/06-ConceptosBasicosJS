/*EJERCICIOS CON JAVASCRIPT 
practica con variables 
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.

*/
let num1 = parseInt(prompt("ingrese número para  saber si es divisible por 2,3,5 o 7"));

if(!(num1 % 2)){
    document.write("<p class='parrafoDestacado'>El " + num1 + "  es divisible por 2."+'</p>');
}
if(!(num1 % 3)){
    document.write("<p class='parrafoDestacado'>El " + num1 + "  es divisible por 3."+'</p>');
}
if(!(num1 % 5)){
    document.write("<p class='parrafoDestacado'>El " + num1 + "  es divisible por 5."+'</p>');
}
if(!(num1 % 7)){
    document.write("<p class='parrafoDestacado'>El " + num1 + "  es divisible por 7."+'</p>');
}
if((num1 % 7) && (num1 % 5) && (num1 % 3) && (num1 % 2)  ){
    document.write("<p class='parrafoDestacado'>El " + num1 + "  no es divisible por 2;3;5;7."+'</p>');
}