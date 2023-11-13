//declarar un array
const personajes = [];

const peliculas = [
  "Interestellar",
  "matrix",
  "lotr",
  2023,
  true,
  "los juegos del hambre",
];
// funcion flecha para organizar el array
const mostrarPeliculas = (titulo) => {
  document.write(`<h2> ${titulo} </h2>`);
  document.write(`<ul>`);
  for (
    let indicePeliculas = 0;
    indicePeliculas < peliculas.length;
    indicePeliculas++
  ) {
    document.write(`<li> ${peliculas[indicePeliculas]}</li>`);
  }

  document.write(`</ul>`);
};
// mostrar un array
console.log(peliculas);
document.write(peliculas);
document.write(`<p>El primer  elemento del array es ${peliculas[0]} </p>`);
console.log(peliculas.length);
document.write(
  `<p>El ultimo  elemento del array es ${peliculas[peliculas.length - 1]} </p>`
);
document.write(`<p>Un elemento del array es ${peliculas[20]} </p>`);
document.write(`<h2>LISTA DE PELICULAS</h2>`);
document.write(`<ul>`);
for (
  let indicePeliculas = 0;
  indicePeliculas < peliculas.length;
  indicePeliculas++
) {
  document.write(`<li> ${peliculas[indicePeliculas]}</li>`);
}

document.write(`</ul>`);

//agregar elementos al array
//al principio del array
peliculas.unshift("Batman", "Ironman 1");
document.write(
  `<h2>LISTA DE PELICULAS, con dos peliculas nuevas (${peliculas.length}) </h2>`
);
document.write(`<ul>`);
for (
  let indicePeliculas = 0;
  indicePeliculas < peliculas.length;
  indicePeliculas++
) {
  document.write(`<li> ${peliculas[indicePeliculas]}</li>`);
}

document.write(`</ul>`);
// agregar elementos en medio del array
peliculas.splice(3, 0, "Scream");

document.write(
  `<h2>LISTA DE PELICULAS, con una peliculas nueva (${peliculas.length}) </h2>`
);
document.write(`<ul>`);
for (
  let indicePeliculas = 0;
  indicePeliculas < peliculas.length;
  indicePeliculas++
) {
  document.write(`<li> ${peliculas[indicePeliculas]}</li>`);
}

document.write(`</ul>`);

// agregar elemenos al final del array
peliculas.push("Gran turismo");
document.write(
  `<h2>LISTA DE PELICULAS, con pelicula nueva al final (${peliculas.length}) </h2>`
);
document.write(`<ul>`);
for (
  let indicePeliculas = 0;
  indicePeliculas < peliculas.length;
  indicePeliculas++
) {
  document.write(`<li> ${peliculas[indicePeliculas]}</li>`);
}

document.write(`</ul>`);

// modificar elemenos del array

peliculas[6] = "Inception";
document.write(
  `<h2>LISTA DE PELICULAS, cambiamos el iten de la posicion 6 del arreglo (${peliculas.length}) </h2>`
);
document.write(`<ul>`);
for (
  let indicePeliculas = 0;
  indicePeliculas < peliculas.length;
  indicePeliculas++
) {
  document.write(`<li> ${peliculas[indicePeliculas]}</li>`);
}

document.write(`</ul>`);

//elimunar del primer elemento del array

peliculas.shift();

document.write(
  `<h2>LISTA DE PELICULAS,  borramos la primer pelicula (${peliculas.length}) </h2>`
);
document.write(`<ul>`);
for (
  let indicePeliculas = 0;
  indicePeliculas < peliculas.length;
  indicePeliculas++
) {
  document.write(`<li> ${peliculas[indicePeliculas]}</li>`);
}

document.write(`</ul>`);

//eliminar elemenos en medio de aarray
peliculas.splice(6, 1);

document.write(
  `<h2>LISTA DE PELICULAS,  borramos el elemento de pos 6 (${peliculas.length}) </h2>`
);
document.write(`<ul>`);
for (
  let indicePeliculas = 0;
  indicePeliculas < peliculas.length;
  indicePeliculas++
) {
  document.write(`<li> ${peliculas[indicePeliculas]}</li>`);
}

document.write(`</ul>`);

//borrar el ultimo elemento del array

peliculas.pop();
document.write(
  `<h2>LISTA DE PELICULAS,  borramos el ultimo elemento del array  (${peliculas.length}) </h2>`
);
document.write(`<ul>`);
for (
  let indicePeliculas = 0;
  indicePeliculas < peliculas.length;
  indicePeliculas++
) {
  document.write(`<li> ${peliculas[indicePeliculas]}</li>`);
}

document.write(`</ul>`);

peliculas.push(`Jurassic Park 1`, `Jurassic Park 2`);
peliculas.splice(2, 0, `Jurassic Park 3`);
mostrarPeliculas(`Agregamos nuevas peliculas de Jurassic Park`);

// filtrar las peliculas de Jurassic Park

const pelisDeJurassicPark = peliculas.filter((pelicula) =>
  pelicula.includes(`Jurassic`)
);

// buscar un elemento en el array

const peliBuscada = peliculas.find((itemPelicula)=> itemPelicula === "Interestellar" );
const peliBuscada2 = peliculas.find((itemPelicula)=> itemPelicula === "Rocky" );

if(peliBuscada2 !== undefined ){
    document.write(`<p>Pelicula encontrada: ${peliBuscada2} </p>`);    
}else{
    document.write(`<p>No se encontró la pelicula buscada </p>`);
}
// operador ternario 
// (condicion logica) ? true: false; 

const respuesta =(peliBuscada2 !== undefined)? `<p>Pelicula encontrada: ${peliBuscada2} </p>` : `<p>No se encontró la pelicula buscada </p>`;
