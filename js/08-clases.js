// nombre , tipo, peso, altura, evolucion , ataques, pokedex, fuerza
class Pokemon {
    //propiedad privada 
    #tipo;
    // metodo constructor: el primer metodo que se ejecuta
    constructor(nombre , tipo, peso, altura, evolucion , ataques, numPokedex, fuerza){
        this.nombre = nombre ;
        this.#tipo = tipo ;
        this.peso = peso ;
        this.altura = altura ;
        this.evolucion = evolucion ;
        this.ataques = ataques;
        this.numPokedex = numPokedex;
        this.fuerza = fuerza;
        this.estado = true; //valor por defecto 
    }
    //propiedades computadas get y set
    get tipo(){
        return this.#tipo;
    }
    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }
    //metodos
    mostrarDatos(){
        document.write(`<h2>Pokemon: ${this.nombre} </h2>
        <ul>
            <li>Tipo: ${this.tipo}</li>
            <li>Peso: ${this.peso}</li>
            <li>Altura: ${this.altura}</li>
            <li>Evolución: ${this.evolucion}</li>
            <li>Nro en Pokedex: ${this.numPokedex}</li>
        </ul>`);
    }
}

class PokemonLegendario extends Pokemon{
    #rareza;
    #ataqueEspecial;
    constructor(nombre , tipo, peso, altura, evolucion , ataques, numPokedex, fuerza,rareza,ataqueEspecial){
        super(nombre , tipo, peso, altura, evolucion , ataques, numPokedex, fuerza);
        this.#rareza =  rareza;
        this.#ataqueEspecial = ataqueEspecial;
    }
    get rareza(){
        return this.#rareza;
    }
    set rareza(nuevaRareza){
        if(nuevaRareza.length >= 3 && nuevaRareza.length <=10){
            this.#rareza = nuevaRareza;
        }else{
            alert(`dato no válido`);
        }
        
    }
    get ataqueEspecial(){
        return this.#ataqueEspecial;
    }
    set ataqueEspecial(nuevoataqueEspecial){
            this.#ataqueEspecial = nuevoataqueEspecial;
    }
    // agregar mas metodos
    mostrarDatosnuevos(){

    }
    // polimorfismo
    mostrarDatos(){
        document.write(`<h2>Pokemon: ${this.nombre} </h2>
        <ul>
            <li>Tipo: ${this.tipo}</li>
            <li>Peso: ${this.peso}</li>
            <li>Altura: ${this.altura}</li>
            <li>Evolución: ${this.evolucion}</li>
            <li>Nro en Pokedex: ${this.numPokedex}</li>
            <li>Rareza: ${this.rareza}</li>
            <li>Ataque Especial: ${this.ataqueEspecial}</li>
        </ul>`);

    }

}
// crear o instanciar un objeto 
const charmander = new Pokemon("Charmander","fuego",15,1.20,["Charmeleon","Charizard"],["blaze","ascuas","lanzallamas"],4,4);
const togepi = new Pokemon("Togepi","hada",1.5,0.3,["Togetic","Togekiss"],["gracia serena","dicha y entusiasmo","placaje"],175,2);
console.log(charmander);
document.write(`<h2>Pokemon: ${charmander.nombre} </h2>`);
document.write(`<p>Tipo: ${charmander.tipo} </p>`);

charmander.tipo = "fuego 2";

document.write(`<p>Tipo: ${charmander.tipo} </p>`);

charmander.mostrarDatos();
togepi.mostrarDatos();

const mewtwo = new PokemonLegendario("Mewtwo","psiquico",122,2,["no evoluciona"],["placaje","confusion","Siniestro"],150,7,"Infrecuente",["bola sombra","charge bean"]);
mewtwo.mostrarDatos();

