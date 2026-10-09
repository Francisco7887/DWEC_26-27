# Tarea 3 · Variables, tipos y conversiones

**Autor:** Francisco Fernández Ortega · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

> **Plantilla de la tarea 3.** Cómo usarla:
>
> 1. Copia esta carpeta en tu repositorio de DWEC y cámbiale el nombre a `tema03`.
> 2. `index.html` trae la card del ejercicio 1 como modelo: cópiala para los ejercicios 2, 3 y 4.
> 3. `js/app.js` trae una función por ejercicio: escribe tu código donde pone `TODO`.
> 4. Sustituye las imágenes de `capturas/` por las tuyas, **con el mismo nombre**.
> 5. Todo lo que va entre [corchetes] es un hueco: cámbialo por lo tuyo. Al terminar, borra este aviso.

[Una o dos líneas: qué hay en esta carpeta y cómo se ve. Por ejemplo: abrir la carpeta en VS Code, pulsar **Go Live**, abrir la consola con F12 y pulsar «Ejecutar» en cada ejercicio.]

## Capturas

### a) La página entera

<img src="capturas/captura a.png" alt="La página entera con mi nombre en la navbar" width="600">

Se ve mi nombre en la barra de navegación y las cuatro tarjetas de ejercicios. Cada tarjeta contiene el código de ejemplo y una tabla con las predicciones y los resultados.

### b) Consola del ejercicio 1

![Consola del ejercicio 1](capturas/captura%20b.png)

Se muestran los valores de las variables y sus tipos mediante typeof. También se comprueba el caso especial de typeof null, que devuelve "object", y el tipo bigint.

### c) Consola del ejercicio 2

![Consola del ejercicio 2](capturas/captura%20c.png)

Se muestran los resultados de las conversiones con String(), Number() y Boolean(), junto con el tipo de cada resultado. Por ejemplo, Number("12abc") devuelve NaN, cuyo tipo sigue siendo number.

### d) Consola del ejercicio 3

![Consola del ejercicio 3](capturas/captura%20d.png)

Se observan expresiones que mezclan cadenas, números y booleanos, además de comparaciones con == y ===. Los resultados permiten comprobar las diferencias entre la igualdad flexible y la igualdad estricta.

### e) Consola del ejercicio 4, con el error de la const

![Consola del ejercicio 4 con el error de la const](capturas/captura%20e.png)

Se muestra la ficha personal creada con una plantilla de cadena y se comprueba que la concatenación con + produce el mismo texto. También se incluye la prueba del error que se genera al intentar reasignar una constante.

## Reflexión

En esta tarea he aprendido a distinguir los tipos de datos de JavaScript usando typeof. Me ha llamado la atención que typeof null devuelva "object", aunque null representa la ausencia de un valor. También he comprobado que Number("") devuelve 0 y que Number("12abc") devuelve NaN. En las expresiones mixtas, el operador + puede concatenar texto, mientras que operadores como - convierten cadenas numéricas en números. He visto que == permite conversiones de tipo, pero === compara también el tipo de los valores. Por último, he practicado la diferencia entre let, que permite reasignar una variable, y const, que no permite asignarle otro valor.

## Fuentes

ChatGPT (OpenAI)(https://chatgpt.com/)
w3schools.com(https://www.w3schools.com/bootstrap5/index.php)

## Uso de IA

He utilizado ChatGPT como apoyo para comprender y revisar partes de la tarea, resolver dudas sobre JavaScript, comprobar las conversiones y corregir la estructura del HTML. Después he revisado y adaptado las propuestas a mis archivos, y he probado los ejercicios en el navegador para comprobar los resultados.
