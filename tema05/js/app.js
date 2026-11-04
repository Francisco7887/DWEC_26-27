/*
  Tarea 5 · DWEC · [Francisco Fernández Ortega]
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  const tercero = document.querySelectorAll("#contenido p")[2];
  tercero.classList.add("text-danger");

  console.log("Se han aplicado los cambios.");
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {

  const contenido = document.querySelector("#contenido");
  const parrafo = document.createElement("p");

  //       (pista: document.querySelector("#contenido").children.length).

  parrafo.textContent = "Párrafo nuevo " + (contenido.children.length + 1);
  contenido.append(parrafo);

  console.log("Se ha añadido un párrafo");
}

function eliminarUltimo() {

  const contenido = document.querySelector("#contenido");
  const ultimo = contenido.lastElementChild;

  if (ultimo === null) {
    document.querySelector("#aviso2").classList.remove("d-none");
    console.log("No quedan párrafos para eliminar");
  } else {
    ultimo.remove();
    console.log("Se ha eliminado el último párrafo");
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // addEventListener("mouseenter", ...) ejecuta la función cuando el ratón entra en el párrafo.
    // Los eventos los veremos a fondo en el tema 9: de momento, copia este modelo.
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  console.log("Resaltado activado en " + parrafos.length + " párrafos");
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {

  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");

  if (texto === "") {
    error.classList.remove("d-none");
    console.log("Error: el texto está vacío");
    return;
  }

  document.querySelector("#contenido p").textContent = texto;
  error.classList.add("d-none");

  console.log("Texto cambiado con textContent");
}

function cambiarConHtml() {

  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");

  if (texto === "") {
    error.classList.remove("d-none");
    console.log("Error: el texto está vacío");
    return;
  }

  document.querySelector("#contenido p").innerHTML = texto;
  error.classList.add("d-none");

  console.log("Texto cambiado con innerHTML");
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  const entrada = document.querySelector("#tareaInput");
  const texto = entrada.value.trim();
  const error = document.querySelector("#error5");

  if (texto === "") {
    error.classList.remove("d-none");
    error.textContent = "Escribe una tarea antes de añadirla.";
    console.log("Error: la tarea está vacía");
    return;
  }

  const li = document.createElement("li");
  li.classList.add("list-group-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("form-check-input");

  const span = document.createElement("span");
  span.textContent = " " + texto;

  li.append(checkbox, span);
  document.querySelector("#listaTareas").append(li);

  entrada.value = "";
  error.classList.add("d-none");

  document.querySelector("#totalTareas").textContent = document.querySelectorAll("#listaTareas li").length;

  console.log("Tarea añadida: " + texto);
}

function borrarCompletadas() {
  const marcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.querySelector("#error5");

  if (marcadas.length === 0) {
    error.classList.remove("d-none");
    error.textContent = "No hay tareas completadas para borrar.";
    console.log("No hay tareas marcadas");
    return;
  }

  for (const casilla of marcadas) {
    casilla.parentElement.remove();
  }

  error.classList.add("d-none");

  document.querySelector("#totalTareas").textContent = document.querySelectorAll("#listaTareas li").length;

  console.log("Se han borrado las tareas completadas");
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  let punto;

  if (ancho >= 1400) {
    punto = "xxl";
  } else if (ancho >= 1200) {
    punto = "xl";
  } else if (ancho >= 992) {
    punto = "lg";
  } else if (ancho >= 768) {
    punto = "md";
  } else if (ancho >= 576) {
    punto = "sm";
  } else {
    punto = "xs";
  }

  document.querySelector("#datoPunto").textContent = punto;

  document.querySelector("#datoPantalla").textContent = `${screen.width} × ${screen.height} px`;

  document.querySelector("#datoUrl").textContent = location.href;

  document.querySelector("#datoIdioma").textContent = navigator.language;

  console.log("Se han mostrado los datos de la ventana y del navegador");
}
