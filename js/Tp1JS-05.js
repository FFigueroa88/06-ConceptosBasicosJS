/*EJERCICIOS CON JAVASCRIPT 
practica con variables 
5.- Escribe un programa de tres líneas que pida un número, pida otro número 
y escriba el resultado de sumar estos dos números.

Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

 */
let num1 = parseInt(prompt("ingrese el primer numero de la suma"));

let num2 = parseInt(prompt("ingrese el segundo numero de la suma"));

document.write("el resultado de sumar "+num1+"+"+num2+" es: " + (num1+num2));