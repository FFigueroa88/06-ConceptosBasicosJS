// funciones declrativas
function saludar() {
  //todo el codigo que sabe hacer la funcion
  document.write(`<p>HOLA MUNDO</p>`);
}
function saludoNuevo(nombreSolicitado, apellidoSolicitado) {
  document.write(`<p>HOLA ${nombreSolicitado},${apellidoSolicitado} 🤖</p>`);
}
function multiplicar(numero1, numero2) {
  const resultado = numero1 * numero2;
  return resultado;
}
// arrow function

const muliplicar2 = (numero1, numero2) =>  numero1 * numero2;
  
//  llamar  o invocar a la funcion
saludar();

const nombre = prompt(`Ingrese un nombre`);
const apellido = prompt(`Ingrese un apellido`);
saludoNuevo(nombre, apellido);

const resultadoNuevo = multiplicar(30, 3);

document.write(
  `<p>El resutlado del multiplicacion fue: ${resultadoNuevo} </p>`
);
