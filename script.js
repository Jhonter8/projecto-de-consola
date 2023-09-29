// function saludo() {
//     let nombre = prompt("como te llamas?");
//     alert(`hola ${nombre}!`)
// }

// saludo();

// ------------- replce() -----------------

// const miTexto = "soy un lindo texto";

// const nuevoTexto = miTexto.replace("lindo","feo");

// console.log(nuevoTexto);


// ---------------- join() -----------------

// const myArray = ["I", "love", "chocolate"];
// const madeAString = myArray.join(", ");
// console.log(madeAString);

// const madeAnotherString = myArray.join();
// console.log(madeAnotherString);

// --------- parametro por defecto ---------

// function salute (nombre = "") {
//     alert(`hola ${nombre}`)
// }

// salute("francheska")

// ------ funcion flecha -----

// const textBox = document.querySelector("input");

// textBox.addEventListener("keydown",(event)=>{
//     console.log(`vos apretaste ${event.key}.`)
// });

// ------------- funcion flecha anonima ----------

// const originals = [1, 2, 3];

// const doubled = originals.map((item) => item * 2);

// console.log(doubled);

// // OR

// const originals2 = [1, 2, 3];
// const doubled2 = originals.map(function doubleItem2(item) {
//     return item * 2;
//   });

// console.log(doubled2);

// ------ funcion flecha pt 2 -----

const textBox = document.querySelector(".input");
const paragraph = document.querySelector("p");

textBox.addEventListener("keydown",(e)=>{
    paragraph.textContent = (`vos apretaste ${e.key}.`)
});