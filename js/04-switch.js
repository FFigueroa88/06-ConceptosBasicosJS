// 1.- consulte saldo , 2.- ingrese dinero , 3.- extraiga dinero



/*
if(opcion === "1"){
    document.write(`<p>Su saldo actual es ${saldo}</p>`);
}elseif(opcion === "2"){
    document.write(`<p>Quiere ingresar dinero</p>`);   
}elseif(opcion === "3"){
    document.write(`<p>Quiere extraer dinero</p>`);   
}else{
    alert(`selecciono una opcion errronea`);   
}
*/

let saldo = 0;

do{
    let opcion = prompt("seleccione una opcion:\n 1.- consulte saldo , 2.- ingrese dinero , 3.- extraiga dinero");

    switch(opcion){
        case "saldo":
        case "consultar saldo":
        case "1":
            document.write(`<p>Su saldo actual es $${saldo}</p>`);
            break;
        case "2":
            let deposito = (parseFloat("cuanto deseas depositar?"));

            if ((!isNaN(deposito)) && (deposito>0)){
                saldo = saldo+ deposito;
                document.write(`<p>Se ingresó $${deposito}.Su saldo actual es $${saldo}</p>`);
            }
            else{
                document.write(`<p>Ingresó un valor incorrecto</p>`);
            }
            break;
        case "3":
            document.write(`<p>Quiere extraer dinero</p>`);
            break;
        default:
            alert(`selecciono una opcion errronea`);
}

}while(confirm("¿Desea realizar otra operacion?"));