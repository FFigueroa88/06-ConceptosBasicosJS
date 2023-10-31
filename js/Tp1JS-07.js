/*EJERCICIOS CON JAVASCRIPT 
practica con variables 
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande
*/
const num1 = parseInt(prompt("ingrese el primer número a comparar"));
const num2 = parseInt(prompt("ingrese el segundo número a comparar"));
const num3 = parseInt(prompt("ingrese el tercer número a comparar"));
if(num1 < num2){
        if(num2 >= num3){
            document.write("El " + num2 + " es el número mas grande.");
        }
        else{
            document.write("El " + num3 + " es el número mas grande.");
        }
}

else{
        if(num1 == num2 == num3){

            document.write("los tres números son iguales");

            }
        else{
                if(num1 >= num3){
                document.write("El " + num1 + " es el número mas grande.");
                }
                else{
                document.write("El " + num3 + " es el número mas grande.");
                }
            }
}

