// script.js

document.getElementById("contacto-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtén los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const correo = document.getElementById("correo").value.trim();

    // Validación básica
    if (!nombre || !motivo || !correo) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return;
    }

    // Simula el envío exitoso
    alert(`Gracias, ${nombre}. Hemos recibido tu mensaje.`);
    document.getElementById("contacto-form").reset(); // Limpia el formulario
});
