/* obteniendo los id de las variables */
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');

/* botones */

const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);


/* cada vez que se presione un boton el display agregue un numero */
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));

});

/* computando las operaciones */
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});