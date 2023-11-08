//declarar un array
const personajes =[];

const peliculas = ["Interestellar", "matrix","lotr",2023,true,"los juegos del hambre"];

// mostrar un array
console.log(peliculas);
document.write(peliculas);
document.write(`<p>El primer  elemento del array es ${peliculas[0]} </p>`);
console.log(peliculas.length);
document.write(`<p>El ultimo  elemento del array es ${peliculas[peliculas.length -1]} </p>`);
document.write(`<p>Un elemento del array es ${peliculas[20]} </p>`);
document.write(`<h2>LISTA DE PELICULAS</h2>`);
document.write(`<ul>`);
for (let indicePeliculas=0;indicePeliculas< peliculas.length; indicePeliculas++){

    document.write(`<li> ${peliculas[indicePeliculas]}</li>`);

}

document.write(`</ul>`);

//agregar elementos al array
//al principio del array
peliculas.unshift("Batman","Ironman 1");
document.write(`<h2>LISTA DE PELICULAS, con dos peliculas nuevas (${peliculas.length}) </h2>`);
document.write(`<ul>`);
for (let indicePeliculas=0;indicePeliculas< peliculas.length; indicePeliculas++){

    document.write(`<li> ${peliculas[indicePeliculas]}</li>`);

}

document.write(`</ul>`);
// agregar elementos en medio del array 
peliculas.splice(3,0,"Scream");

document.write(`<h2>LISTA DE PELICULAS, con una peliculas nueva (${peliculas.length}) </h2>`);
document.write(`<ul>`);
for (let indicePeliculas=0;indicePeliculas< peliculas.length; indicePeliculas++){

    document.write(`<li> ${peliculas[indicePeliculas]}</li>`);

}

document.write(`</ul>`);

// agregar elemenos al final del array 
peliculas.push("Gran turismo");
document.write(`<h2>LISTA DE PELICULAS, con pelicula nueva al final (${peliculas.length}) </h2>`);
document.write(`<ul>`);
for (let indicePeliculas=0;indicePeliculas< peliculas.length; indicePeliculas++){

    document.write(`<li> ${peliculas[indicePeliculas]}</li>`);

}

document.write(`</ul>`);

// modificar elemenos del array

peliculas[6] = "Inception";
document.write(`<h2>LISTA DE PELICULAS, cambiamos el iten de la posicion 6 del arreglo (${peliculas.length}) </h2>`);
document.write(`<ul>`);
for (let indicePeliculas=0;indicePeliculas< peliculas.length; indicePeliculas++){

    document.write(`<li> ${peliculas[indicePeliculas]}</li>`);

}

document.write(`</ul>`);

//elimunar del primer elemento del array

peliculas.shift();

document.write(`<h2>LISTA DE PELICULAS,  borramos la primer pelicula (${peliculas.length}) </h2>`);
document.write(`<ul>`);
for (let indicePeliculas=0;indicePeliculas< peliculas.length; indicePeliculas++){

    document.write(`<li> ${peliculas[indicePeliculas]}</li>`);

}

document.write(`</ul>`);

//eliminar elemenos en medio de aarray 
peliculas.splice(6,1);

document.write(`<h2>LISTA DE PELICULAS,  borramos el elemento de pos 6 (${peliculas.length}) </h2>`);
document.write(`<ul>`);
for (let indicePeliculas=0;indicePeliculas< peliculas.length; indicePeliculas++){

    document.write(`<li> ${peliculas[indicePeliculas]}</li>`);

}

document.write(`</ul>`);

//borrar el ultimo elemento del array

peliculas.pop();
document.write(`<h2>LISTA DE PELICULAS,  borramos el ultimo elemento del array  (${peliculas.length}) </h2>`);
document.write(`<ul>`);
for (let indicePeliculas=0;indicePeliculas< peliculas.length; indicePeliculas++){

    document.write(`<li> ${peliculas[indicePeliculas]}</li>`);

}

document.write(`</ul>`);
