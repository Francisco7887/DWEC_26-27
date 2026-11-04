# Tarea 5 · Manipular el DOM

**Autor:** Francisco Fernández Ortega · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

Descripción

En esta tarea he trabajado con JavaScript para manipular el DOM de una página web. He practicado cómo seleccionar elementos HTML, modificar sus textos y clases, crear y eliminar párrafos, añadir eventos al ratón, gestionar una lista de tareas y consultar información de la ventana y del navegador.

Para ejecutar la página, he abierto el proyecto en Visual Studio Code y he utilizado la extensión Live Server. También he comprobado el funcionamiento de los botones y los mensajes de la consola con las herramientas de desarrollador (F12).

## Capturas

### a) La página recién cargada

<img src="capturas/a-pagina.png" alt="La página recién cargada con mi nombre en la navbar" width="600">

En esta captura se muestra la página al iniciarse, con mi nombre en la barra de navegación y los tres párrafos originales.

### b) Ejercicios 1 y 2

<img src="capturas/b-ej1-ej2.png" alt="Los párrafos después de aplicar los cambios y añadir dos párrafos" width="600">

He modificado el primer párrafo con getElementById, resaltado el segundo con querySelector y puesto el tercero en rojo con querySelectorAll. También he añadido dos párrafos nuevos al final del contenido.

### c) Ejercicio 3: resaltado al pasar el ratón

![Un párrafo resaltado con el ratón encima](capturas/c-ej3-resaltado.png)

He utilizado los eventos mouseenter y mouseleave para añadir y quitar el fondo gris al pasar el ratón por encima de los párrafos. Los párrafos creados después necesitan que vuelva a pulsar el botón de activar resaltado para recibir los eventos.

### d) Ejercicio 4: `<b>hola</b>` con innerHTML

<img src="capturas/d-ej4-innerhtml.png" alt="El primer párrafo tras usar innerHTML" width="600">

He probado a escribir <b>hola</b> en el campo de texto. Con innerHTML, la palabra «hola» aparece en negrita porque interpreta las etiquetas HTML.

### e) Ejercicio 5: la lista de tareas

![La lista con tres tareas y una marcada](capturas/e-ej5-lista.png)

He añadido tres tareas a la lista y he marcado una casilla de verificación. La aplicación permite eliminar las tareas completadas y actualiza el contador de tareas restantes.

### f) Ejercicio 6: los datos de la ventana en el móvil

<img src="capturas/f-ej6-movil.png" alt="Los datos de la ventana en el modo móvil" width="300">

He consultado el tamaño de la ventana, el punto de corte de Bootstrap, la resolución de la pantalla, la URL y el idioma del navegador. En el modo móvil, el punto de corte depende del ancho disponible.

## Reflexión

La propiedad textContent introduce el contenido como texto, mientras que innerHTML interpreta las etiquetas HTML. Por ejemplo, al escribir <b>hola</b>, con textContent se muestran las etiquetas y con innerHTML la palabra aparece en negrita. Aunque innerHTML permite insertar contenido HTML, puede ser peligroso si se utiliza directamente con datos escritos por el usuario. Un usuario podría introducir código HTML malicioso o etiquetas de script. Esto podría provocar ataques como el XSS. Por eso, para mostrar texto introducido por el usuario, es más seguro utilizar textContent.

## Fuentes

- [w3schools](https://www.w3schools.com/)
- [chatGPT](https://chatgpt.com/)

## Uso de IA

He utilizado ChatGPT como apoyo para revisar y completar el código JavaScript y preparar la documentación de la práctica. Después he revisado las soluciones y debo comprobar el funcionamiento del código en mi equipo para entenderlo y poder explicarlo durante la defensa en clase.
