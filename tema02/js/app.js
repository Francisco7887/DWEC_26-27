function saludar() {
    alert("Hola, soy Francisco Fernández Ortega");
    console.log("Se ha pulsado el botón Saludar.");
}

function simularError() {
    alert("Abre la consola para ver el error");
    console.error("Se ha simulado un error.");
}

function queNavegadorSoy() {
    const userAgent = navigator.userAgent;

    alert(userAgent);
    console.log("User Agent:", userAgent);
}