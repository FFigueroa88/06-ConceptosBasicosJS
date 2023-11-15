//notacion literal

const usuario = {
  // propiedades clave : valor
  nombre: "Juan",
  edad: 18,
  correo: "juan@mail.com",
  apellido: "Perez",
  password: "sdfgfdgfd",
  nickname: "el Juancho",
  // metodos
  login: function () {
    console.log(this);
    document.write(`<p>El usuario "${this.nickname}" fue logueado.</p>`);
  },
  logout: () => {
    console.log(this);
    document.write(`<p>El usuario fue deslogueado.</p>`);
  },
};

console.log(usuario);
document.write(usuario);
document.write(`<h2>Usuario: ${usuario.nickname} </h2>`);
document.write(
  `<p>Nombre Completo: ${usuario.apellido},${usuario.nombre} </p>`
);
document.write(`<p>Edad: ${usuario.edad} </p>`);

// modificar una propiedad del objeto
usuario.edad = 25;
document.write(`<p>Edad: ${usuario["edad"]} </p>`);

// agregando  una propiedad nueva

usuario.fotoPerfil = "http://127.0.0.1:5500/index.html";
console.log(usuario);

// borrar propiedad de un objeto

delete usuario.apellido;
console.log(usuario);

//usar  los metodos  del objeto

usuario.login();
usuario.logout();