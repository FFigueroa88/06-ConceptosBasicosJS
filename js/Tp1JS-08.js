/*EJERCICIOS CON JAVASCRIPT 
practica con variables 
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/
let num1 = parseInt(prompt("ingrese número para  saber si es divisible por 2"));

if(num1 % 2){
    document.write("El " + num1 + " no es divisible por 2.");
}
else {
    document.write("El " + num1 + " es divisible por 2.");
}