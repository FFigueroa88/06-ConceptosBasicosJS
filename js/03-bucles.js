/* 
while(condicion logica){
    todo el codigo que quiero ejecutar varias veces
    agregar algo para que la condicion logica no se cumpla
}
*/
let renglon =1 ;
//document.write("<p>Este es el  renglon  número " + renglon+ "</p>");

while (renglon <= 20){

    document.write(`<p>Este es el  renglon  número  ${renglon} </p>`);
    renglon ++;
}
/*
do{
    todo el codigo que quiero ejecutar varias veces
    agregar algo para que no se cumpla la condicion
}while(condicion logica)

*/

let contador = 1 ;
do{
    document.write(`<p>Este es el  renglon  número  ${contador } (do while) </p>`);
    contador ++;

}while(contador <= 10)

/*
for(inicializar una variable ; condicion logica ; decrementar o incrementar variable ){
    todo lo que quiero que se ejecute varias veces
} 
*/



for(let cuentaRegresiva = 10 ; cuentaRegresiva>0 ; cuentaRegresiva--){

    document.write(`<p>Cuenta regresiva N:  ${cuentaRegresiva } </p>`);
}
