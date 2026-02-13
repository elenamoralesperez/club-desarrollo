console.log("Aprendiendo JavaScript");

let nombre = "Elena";
let edad = 23;
let ciudad = "Yecla";
let soltera = false;
console.log(soltera);

console.log("Mi nombre es " + nombre + ", tengo " + edad + " años, vivo en " + ciudad);

console.log(`Mi nombre es ${nombre}, tengo ${edad} años, vivo en ${ciudad}`);


const fruits = ["apples", "oranges", "pears", "grapes"];
fruits[4] = "blueberries"; //# Agrega un nuevo elemento al array en la posición 4
fruits.push("strawberries");  //# push() agrega un elemento al final del array
fruits.unshift("mangos");  //# unshift() agrega un elemento al inicio del array
fruits.shift();  //# shift() elimina el primer elemento del array
fruits.pop();   //# pop() elimina el último elemento del array
console.log(fruits.indexOf("oranges")); 


const compras = ["pan", "leche", "huevos"];
compras[3] = "frutas";
compras.unshift("verduras");
compras.pop();
console.log(compras.indexOf("pan"));
console.log(compras);


const peliculas = {
    titulo: "Titanic",
    año: 1997,
    generos: ["drama", "romance"],
    director: "James Cameron",
    actores : [{
        nombre: "Leonardo DiCaprio",
        edad: 29
    },
    {
        nombre: "Kate Winslet",
        edad: 22
    }
    ]
}

console.log("La pelicula " + peliculas.titulo + " dirigida por " + peliculas.director + " se estrenó en el año " + peliculas.año + " y pertenece al género " + peliculas.generos[0]);

