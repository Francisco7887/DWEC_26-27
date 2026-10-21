/*
  Tarea 4 · DWEC · [Tu nombre y apellidos]
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  // TODO: como sumar(), con el operador -
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  // TODO: como sumar(), con el operador *
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  // TODO: como sumar(), con el operador /
  // TODO: si el número 2 es 0, muestra un error en rojo. Ojo: en JavaScript, 5 / 0 no da error, da Infinity.
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta algún número");
  } else if (n2 === 0){
    mostrar("no se puede dividir entre cero.", "danger");
    console.warn("Dividir: el segundo numero es 0");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  // TODO: como sumar(), con el operador **
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  // TODO: el resto de la división, con el operador %
  // TODO: si el número 2 es 0, muestra un error en rojo (5 % 0 da NaN).
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");


  } else if(n2 === 0){
    mostrar("no se puede calcular el módulo entre cero.", "danger");
    console.warn("Módulo: el segundo numero es 0");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  // TODO: con if, else if y else, di cuál de los dos números es mayor o si son iguales.
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de comparar.", "danger");
    console.warn("Comparación: falta algún número");
  } else if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}.`);
    console.log(`${n1} es mayor que ${n2}`);
  } else if (n1 < n2) {
    mostrar(`${n2} es mayor que ${n1}.`);
    console.log(`${n2} es mayor que ${n1}`);
  } else {
    mostrar(`Los dos números son iguales: ${n1}.`);
    console.log("Los dos números son iguales");
  }
}

function parOImpar() {
  // TODO: solo con el número 1. Usa el operador % y el ternario ( condición ? "par" : "impar" ).
  // TODO: si el número tiene decimales, avisa de que no es ni par ni impar.
  const n1 = leerNumero("numero1");

  if (Number.isNaN(n1)) {
    mostrar("Escribe el primer número.", "danger");
    console.warn("Par o impar: falta el primer número");
  } else if (n1 % 1 !== 0) {
    mostrar(`${n1} tiene decimales: no es par ni impar.`, "warning");
    console.log(`${n1} tiene decimales`);
  } else {
    const resultado = n1 % 2 === 0 ? "par" : "impar";

    mostrar(`${n1} es ${resultado}.`);
    console.log(`${n1} es ${resultado}`);
  }
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();
  
  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Introduce un número entero que no supere 20.", "danger");
    console.warn("for: número no válido");
  } else {
    let contador = 0;

    for (let i = 1; i <= veces; i++) {
      anadirLinea(`for · repetición ${i} de ${veces}`);
      contador++;
    }

    const texto = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${texto}`);
    console.log(`for: ${contador} repeticiones`);
  }

  // TODO: si el número falta, tiene decimales o pasa de MAXIMO_REPETICIONES, muestra un error en rojo.
  // TODO: si no, repite con un for tantas veces como diga «veces». En cada vuelta:
  //         anadirLinea(`for · repetición ${i} de ${veces}`);
  //       y cuenta las vueltas en una variable contador.
  // TODO: al terminar, añade una línea con el total: «Total: 5 repeticiones» o «Total: 1 repetición».
}

function bucleWhile() {
  // TODO: lo mismo que bucleFor(), con un while.
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Introduce un número entero que no supere 20.", "danger");
    console.warn("while: número no válido");
  } else {
    let contador = 0;
    let i = 1;

    while (i <= veces) {
      anadirLinea(`while · repetición ${i} de ${veces}`);
      contador++;
      i++;
    }

    const texto = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${texto}`);
    console.log(`while: ${contador} repeticiones`);
  }
}

function bucleDoWhile() {
  // TODO: lo mismo que bucleFor(), con un do…while. Pruébalo con 0 y con un negativo: ¿qué pasa?
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Introduce un número entero que no supere 20.", "danger");
    console.warn("do...while: número no válido");
  } else {
    let contador = 0;
    let i = 1;

    do {
      anadirLinea(`do...while · repetición ${i} de ${veces}`);
      contador++;
      i++;
    } while (i <= veces);

    const texto = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${texto}`);
    console.log(`do...while: ${contador} repeticiones`);
  }
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  // TODO: como bucleFor(), pero cada vuelta añade un badge con el número de la repetición:
  //         anadirBadge(i, "primary");
  // TODO: los pares, de un color y los impares, de otro. Elige el color con el operador ternario.
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Introduce un número entero que no supere 20.", "danger");
    console.warn("badgesFor: número no válido");
  } else {
    let contador = 0;

    for (let i = 1; i <= veces; i++) {
      const color = i % 2 === 0 ? "success" : "primary";
      anadirBadge(i, color);
      contador++;
    }

    const texto = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${texto}`);
    console.log(`badgesFor: ${contador} repeticiones`);
  }
}

function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Introduce un número entero que no supere 20.", "danger");
    console.warn("badgesWhile: número no válido");
  } else {
    let contador = 0;
    let i = 1;

    while (i <= veces) {
      const color = i % 2 === 0 ? "success" : "primary";
      anadirBadge(i, color);
      contador++;
      i++;
    }

    const texto = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${texto}`);
    console.log(`badgesWhile: ${contador} repeticiones`);
  }
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Introduce un número entero que no supere 20.", "danger");
    console.warn("badgesDoWhile: número no válido");
  } else {
    let contador = 0;
    let i = 1;

    do {
      const color = i % 2 === 0 ? "success" : "primary";
      anadirBadge(i, color);
      contador++;
      i++;
    } while (i <= veces);

    const texto = contador === 1 ? "repetición" : "repeticiones";
    anadirLinea(`Total: ${contador} ${texto}`);
    console.log(`badgesDoWhile: ${contador} repeticiones`);
  }
}
