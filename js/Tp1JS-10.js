/*EJERCICIOS CON JAVASCRIPT 
practica con variables 
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20

Output: El 20 es divisible por 2.

*/
const num1 = parseInt(prompt("ingrese número para  saber si es divisible por 2,3,5 o 7"));

if(!(num1 % 2)){
    document.write("<p class='parrafoDestacado'>El " + num1 + "  es divisible por 2."+'</p>');
}
else{
    if(!(num1 % 3)){
        document.write("<p class='parrafoDestacado'>El " + num1 + "  es divisible por 3."+'</p>');
    }
    else{
        if(!(num1 % 5)){
            document.write("<p class='parrafoDestacado'>El " + num1 + "  es divisible por 5."+'</p>');
        } 
        else{
            if(!(num1 % 7)){
                document.write("<p class='parrafoDestacado'>El " + num1 + "  es divisible por 7."+'</p>');
            }
            else{
                document.write("<p class='parrafoDestacado'>El " + num1 + "  no es divisible por 2;3;5;7."+'</p>');
            }
        }
    }
}