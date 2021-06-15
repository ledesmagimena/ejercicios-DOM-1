const enlaces = document.querySelectorAll("a");
console.log(enlaces);
const arrayEnlaces = [...enlaces];
console.log(arrayEnlaces);
const informacion = document.querySelector("#informacion");
const totalEnlaces = arrayEnlaces.length;
const cantidadEnlaces = document.createElement("h3");
cantidadEnlaces.textContent = `La cantidad de enlaces es ${totalEnlaces}`;
informacion.appendChild(cantidadEnlaces);

const penultimoEnlace = enlaces[arrayEnlaces.length - 2];
const pEnlace = document.createElement("h3");
pEnlace.textContent = `El penultimo enlace es: ${penultimoEnlace}`;
informacion.appendChild(pEnlace);

let cantidad = 0;
for (let i = 0; i < totalEnlaces; i++) {
  if (arrayEnlaces[i].href === "http://prueba/") {
    cantidad++;
  }
}
const cantidadPrueba = document.createElement("h3");
cantidadPrueba.textContent = `La cantidad de pruebas es: ${cantidad}`;
informacion.appendChild(cantidadPrueba);

const parrafos = document.querySelectorAll("p");
console.log(parrafos);
const arrayParrafos = [...parrafos];
arrayParrafos[2].className = "tercer-parrafo";
console.log(arrayParrafos);
const enlacesTercerParrafo = document.querySelectorAll(".tercer-parrafo a");
console.log(enlacesTercerParrafo);
const arrayEnlacesTP = [...enlacesTercerParrafo];
console.log(arrayEnlacesTP);
const totalTercerParrafo = arrayEnlacesTP.length;
console.log(totalTercerParrafo);
const cantidadETP = document.createElement("h3");
cantidadETP.textContent = `La cantidad de enlaces del tercer parrafo es:${totalTercerParrafo}`;
informacion.appendChild(cantidadETP);
