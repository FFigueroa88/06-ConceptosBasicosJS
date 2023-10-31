/*EJERCICIOS CON JAVASCRIPT 
practica con variables 
6.-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3
Output: El 15 es el número más grande

 */
const num1 = parseInt(prompt("ingrese el primer número a comparar"));
const num2 = parseInt(prompt("ingrese el segundo número a comparar"));
if(num1 < num2){
    document.write("El " + num2 + " es el número mas grande.");
}
else{
    if(num1 > num2){
        document.write("El " + num1 + " es el número mas grande.");
    }
    else{
        document.write("ambos números son iguales");
    }
}