/*
  Tarea 6 · DWEC · [Tu nombre y apellidos]
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {
  nombre: "Francisco",
  apellidos: "Fernández Ortega",
  edad: 27,
  curso: "DWEC",

  presentarse: function () {
    return "Soy " + this.nombre + " " + this.apellidos + ", tengo " + this.edad + " años y estudio " + this.curso + ".";
  },

  esMayorDeEdad: function () {
  if (this.edad >= 18){
    return "Sí";
  } else {
    return "No";
  }
}

};

function verFicha() {
  const salida = document.querySelector("#salida1");
  salida.textContent = "";

  const lista = document.createElement("ul");
  lista.classList.add("list-group");

  const claves = ["nombre", "apellidos", "edad", "curso"];

  claves.forEach(function (clave) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = clave + ": " + estudiante[clave];
    lista.append(li);
  });

  const presentacion = document.createElement("p");
  presentacion.textContent = estudiante.presentarse();

  const mayorEdad = document.createElement("p");
  mayorEdad.textContent = "Es mayor de edad: " + estudiante.esMayorDeEdad();

  salida.append(lista, presentacion, mayorEdad);
  console.log("Ejercicio 1:", estudiante);
}

function cumplirAnios() {
  estudiante.edad++;
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;
  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push: ", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No hay colores que quitar.");
    return;
  }

  const colorQuitado = colores.pop();

  mostrarColores();
  console.log("Ejercicio 2: pop → eliminado: ", colorQuitado);
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No hay colores que quitar.");
    return;
  }

  const colorQuitado = colores.shift();

  mostrarColores();
  console.log("Ejercicio 2: shift → eliminado: ", colorQuitado);
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  // TODO: pinta todos los productos con pintarProductos() y escribe en #mensaje3 cuántos hay.
  pintarProductos(productos);
  const mensaje = document.querySelector("#mensaje3");
  mensaje.textContent = "Hay " + productos.length + " productos.";
}

function ordenarPorPrecio() {
  const copiaProductos = [...productos];
  copiaProductos.sort(function (a, b) {
    return a.precio - b.precio;
  });

  pintarProductos(copiaProductos);

  const mensaje = document.querySelector("#mensaje3");
  mensaje.textContent = "Productos ordenados por precio (de más barato a más caro).";
  console.log("Ejercicio 3: ordenados por precio:", copiaProductos);

}

function filtrarCaros() {
  const productosFiltrados = productos.filter(function (producto) {
    return producto.categoria === "Periféricos";
  });

  pintarProductos(productosFiltrados);

  const mensaje = document.querySelector("#mensaje3");
  mensaje.textContent = "Hay " + productosFiltrados.length + " productos de la categoría Periféricos.";

  console.log("Productos filtrados:", productosFiltrados);
}

function buscarProducto() {
  const texto = document.querySelector("#buscarProducto").value
    .trim()
    .toLowerCase();

  const mensaje = document.querySelector("#mensaje3");

  if (texto === "") {
    mensaje.textContent = "Escribe el nombre de un producto.";
    return;
  }

  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(texto);
  });

  if (encontrado === undefined) {
    mensaje.textContent = "No se ha encontrado ningún producto.";
    pintarProductos([]);
  } else {
    pintarProductos([encontrado]);
    mensaje.textContent = "Producto encontrado: " + encontrado.nombre;
  }

  console.log("Ejercicio 3: búsqueda", encontrado);
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Francisco",
  notas: [],

  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }

    this.notas.push(nota);
    return true;
  },

  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }

    const suma = this.notas.reduce(function (acumulador, nota) {
      return acumulador + nota;
    }, 0);

    return suma / this.notas.length;
  },

  notaMalAlta: function () {
    if (this.notas.length === 0){
      return null;
    }
    return Math.max (...this.notas);
  }
};

function mostrarNotas() {
  const salida = document.querySelector("#notas");
  salida.textContent = "";

  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.classList.add("badge");

    if (nota >= 5) {
      badge.classList.add("text-bg-success");
    } else {
      badge.classList.add("text-bg-danger");
    }

    badge.textContent = nota;
    salida.append(badge);
  });

  const media = document.querySelector("#media");

  if (alumno.notas.length === 0) {
    media.textContent = "Todavía no hay notas.";
  } else {
    media.textContent =
      "Media de " + alumno.notas.length +
      " notas: " + alumno.media().toFixed(2);
  }

  console.log("Ejercicio 4: notas", alumno.notas);
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");
  const valor = casilla.value.trim();

  if (valor === "") {
    error.textContent = "Introduce una nota.";
    error.classList.remove("d-none");
    return;
  }

  const nota = Number(valor);

  if (alumno.anadirNota(nota) === false) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    return;
  }

  error.classList.add("d-none");
  casilla.value = "";

  mostrarNotas();
}

function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const dobles = numeros.map(function (numero) {
    return numero * 2;
  });

  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  salida.textContent =
    "Dobles: " + comoTexto(dobles) +
    "\nArray original: " + comoTexto(numeros);

  console.log("Ejercicio 5: dobles", dobles);
}

function verPares() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });

  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  salida.textContent =
    "Pares: " + comoTexto(pares) +
    "\nArray original: " + comoTexto(numeros);

  console.log("Ejercicio 5: pares", pares);
}

function verSuma() {
  const suma = numeros.reduce(function (acumulador, numero) {
    return acumulador + numero;
  }, 0);

  const salida = document.querySelector("#salida5");
  salida.textContent = "Suma de todos los números: " + suma;

  console.log("Ejercicio 5: suma", suma);
}

function verCadena() {
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });

  const dobles = pares.map(function (numero) {
    return numero * 2;
  });

  const suma = dobles.reduce(function (acumulador, numero) {
    return acumulador + numero;
  }, 0);

  const salida = document.querySelector("#salida5");
  salida.textContent =
    "Pares: " + comoTexto(pares) +
    "\nDobles de los pares: " + comoTexto(dobles) +
    "\nSuma de los dobles: " + suma;

  console.log("Ejercicio 5: cadena", pares, dobles, suma);
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const salida = document.querySelector("#ciudades");
  salida.textContent = "";

  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-primary");
    badge.textContent = posicion + " · " + ciudad;
    salida.append(badge);
  });

  console.log("Ejercicio 6: ciudades", ciudades);
}

function verSlice() {
  const resultado = ciudades.slice(2, 5);

  document.querySelector("#salida6").textContent =
    "slice(2, 5) devuelve: " + comoTexto(resultado) +
    "\nSiguen quedando " + ciudades.length + " ciudades en el array.";

  console.log("Ejercicio 6: slice", resultado);
}

function hacerSplice() {
  if (ciudades.length < 3) {
    document.querySelector("#salida6").textContent =
      "Quedan menos de 3 ciudades. Debes restaurar la lista.";
    return;
  }

  const eliminadas = ciudades.splice(2, 2);

  document.querySelector("#salida6").textContent =
    "splice(2, 2) devuelve: " + comoTexto(eliminadas) +
    "\nQuedan " + ciudades.length + " ciudades.";

  mostrarCiudades();

  console.log("Ejercicio 6: splice", eliminadas);
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];

  mostrarCiudades();

  document.querySelector("#salida6").textContent =
    "Las ciudades se han restaurado.";
}

function buscarCiudad() {
  const nombre = document.querySelector("#buscarCiudad").value.trim();

  if (nombre === "") {
    document.querySelector("#salida6").textContent =
      "Escribe el nombre de una ciudad.";
    return;
  }

  const contiene = ciudades.includes(nombre);
  const posicion = ciudades.indexOf(nombre);

  document.querySelector("#salida6").textContent =
    "includes(): " + contiene +
    "\nindexOf(): " + posicion;

  console.log("Ejercicio 6: búsqueda", contiene, posicion);
}

mostrarCiudades();
