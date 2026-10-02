# Tarea 2 - Navegadores, motores y mi primera página interactiva

## 1. Descripción del proyecto

En esta tarea he creado una página web utilizando HTML, Bootstrap y JavaScript. 
El proyecto está formado por dos páginas principales: `index.html` e 
`interaccion.html`.

En `index.html` se muestra información sobre los principales navegadores web 
y los motores que utilizan. También se incluye una tabla con Chrome, Firefox, 
Safari, Edge y Opera, indicando la empresa, el motor de renderizado, el motor 
JavaScript y si utilizan Chromium.

En `interaccion.html` se han añadido diferentes elementos para probar la 
interacción con JavaScript mediante botones.

## 2. HTML y Bootstrap

HTML se utiliza para crear la estructura de las páginas y organizar su 
contenido.

Para mejorar el diseño y conseguir una página adaptable se ha utilizado 
Bootstrap. Se han utilizado clases como `container`, `row` y `col-12` para 
organizar el contenido.

También se ha utilizado una `card` de Bootstrap en la página de interacción 
para agrupar el contenido y los botones.

Las dos páginas tienen una barra de navegación común que permite acceder a 
`index.html` y `interaccion.html`.

## 3. JavaScript

El código JavaScript está separado del HTML y se encuentra en:

`js/app.js`

Se han creado tres funciones diferentes.

La función `saludar()` utiliza `alert()` para mostrar un saludo y 
`console.log()` para dejar una traza en la consola.

La función `simularError()` utiliza `console.error()` para mostrar un mensaje 
de error en la consola sin utilizar una ventana emergente.

La función `queNavegadorSoy()` utiliza `navigator.userAgent` para obtener 
información sobre el navegador utilizado. Esta información se muestra mediante 
`alert()` y también se escribe en la consola.

## 4. Pruebas realizadas

He comprobado el funcionamiento de los botones de la página de interacción y 
he revisado la consola del navegador para comprobar las diferentes trazas.

También he probado la página en diferentes navegadores para observar el 
`User-Agent` y comprobar el comportamiento de la página.

## 5. Fuentes consultadas

- [Can I Use](https://caniuse.com/)
- [Bootstrap](https://getbootstrap.com/)

## 6. Uso de inteligencia artificial

He utilizado ChatGPT como herramienta de apoyo durante el desarrollo de esta 
tarea, principalmente para resolver dudas sobre HTML, Bootstrap, JavaScript 
y Git.

Después he escrito, probado y revisado el código en Visual Studio Code y he 
comprobado el funcionamiento de las páginas en el navegador. También he 
revisado el resultado para poder comprender y explicar el código utilizado 
en la tarea.