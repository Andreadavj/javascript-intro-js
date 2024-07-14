// Precio base
const precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

let cantidad = 0;
precioSpan.innerHTML = precio.toLocaleString('es-ES');

// Función para actualizar el total a pagar
const actualizarTotal = () => {
    const total = cantidad * precio;
    valorTotalSpan.innerHTML = total.toLocaleString('es-ES');
}

// Función para incrementar la cantidad
const incrementar = () => {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}

// Función para disminuir la cantidad
const disminuir = () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
}