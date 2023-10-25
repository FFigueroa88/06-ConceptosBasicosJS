/* 
if (condicion logica){
    todo el codigo que quiero realizar si la condicion es verdadera
}
*/
//SOLICITE LA EDAD AL USUARIO E INDICE SI DEBE VOTAR
// 16 a  menores de 18 es optativo votar y tambien personas mayores a 70
//18 a 70 años 

let edad = parseInt(prompt("ingrese su edad"));
if(edad >= 18 ){
    document.write("Debe votar");
}
else{
    document.write("No Debe votar");
}
