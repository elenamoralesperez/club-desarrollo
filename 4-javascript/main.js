console.log("Aprendiendo JavaScript");

let nombre = "Elena";
let edad = 23;
let ciudad = "Yecla";
let soltera = false;
console.log(soltera);

console.log("Mi nombre es " + nombre + ", tengo " + edad + " años, vivo en " + ciudad);

console.log(`Mi nombre es ${nombre}, tengo ${edad} años, vivo en ${ciudad}`);


const fruits = ["apples", "oranges", "pears", "grapes"];
fruits[4] = "blueberries"; // Agrega un nuevo elemento al array en la posición 4
fruits.push("strawberries");  // push() agrega un elemento al final del array
fruits.unshift("mangos");  // unshift() agrega un elemento al inicio del array
fruits.shift();  // shift() elimina el primer elemento del array
fruits.pop();   // pop() elimina el último elemento del array
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



// Clase 2 JavaScript

// Condicionales

let age = 18;

if (age >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
// En javascript da igual la cantidad de espacios que pongas, el código se ejecutará igual. 
// Sin embargo, es importante mantener una buena indentación para que el código sea legible y fácil de entender.
// Objeto en JS es diccionario en Python, es decir, una colección de pares clave-valor.

let person = {
    age:17,
    sonOfBoss: true
}

if (person.age >= 18) {
    console.log("Eres mayor de edad");
} else if (person.sonOfBoss == true) {
    console.log("No eres mayor de edad pero eres el hijo del jefe");
} else {
    console.log("Eres menor de edad");
}


// if (car.hasPolicePermission == true) {
//     console.log("Excedes el límite, pero tienes permiso policial");
// } else if  (car.speed <= 120) {
//     console.log("Tu velocidad es adecuada");
// } else {
//     console.log("Vas demasiado rápido, reduce la velocidad");
// }


// Operadores

// && es el operador lógico AND, que devuelve true si ambas condiciones son verdaderas.

// || es el operador lógico OR, que devuelve true si al menos una de las condiciones es verdadera.

// ! es el operador lógico NOT, que invierte el valor de una condición. Si la condición es verdadera, devuelve false, y viceversa.

// 7 == "7"; // true, porque el operador == realiza una conversión de tipo antes de comparar los valores. 
// En este caso, convierte la cadena "7" a un número antes de compararlo con el número 7, lo que resulta en true.

// 7 === "7"; // false, porque el operador === no realiza una conversión de tipo y compara tanto el valor como el tipo de los operandos. 
// En este caso, el número 7 y la cadena "7" son de tipos diferentes, por lo que devuelve false.

const age1 = 17

const firstName = "Iván"

if (age1 <= 17 || firstName === "Iván") console.log('Eres menor de edad o te llamas '+ firstName)
if (age1 <= 17 && firstName === "Iván") console.log('Eres menor de edad y te llamas '+ firstName)


// Bucles

// Muestra por consola el nombre de cada producto

const productos = [
{nombre: "Laptop", categoria: "Electrónica", precio: 799.99, stock: 25},
{nombre: "Auriculares Bluetooth", categoria: "Accesorios", precio: 59.99, stock: 50},
{nombre: "Cámara Digital",categoria: "Fotografía",precio: 399.99,stock: 10},
{nombre: "Smartwatch",categoria: "Relojes",precio: 149.99,stock: 75},
{nombre: "Teclado Mecánico", categoria: "Accesorios",precio: 89.99,stock: 30}
];

for (let producto of productos) {
    console.log(producto.nombre);
}

// DOM
// El DOM (Document Object Model) es una representación estructurada de un documento HTML o XML que permite a los desarrolladores interactuar con él mediante JavaScript.

// El DOM representa la estructura del documento como un árbol de nodos, donde cada nodo corresponde a un elemento HTML, un atributo o un fragmento de texto. 
// Esto permite a los desarrolladores acceder y manipular el contenido, la estructura y el estilo de una página web de manera dinámica utilizando JavaScript. 
// A través del DOM, los desarrolladores pueden agregar, eliminar o modificar elementos HTML, cambiar estilos CSS, manejar eventos y realizar otras operaciones para crear experiencias web interactivas.

const boton = document.querySelector("#boton");
// const boton = document.getElementById("boton"); // Otra forma de seleccionar el botón por su ID
console.log(boton);

function saludar() {
    console.log("¡Hola! Has hecho clic en el botón.");
    boton.style.background = "pink"; // Cambia el color de fondo del botón a rosa
    texto.innerHTML = "Adiós"; // Cambia el contenido del elemento con id "texto"
}

boton.addEventListener("click", saludar); // Agrega un evento de clic al botón que ejecuta la función saludar cuando se hace clic en él.


const texto = document.querySelector("#texto");














