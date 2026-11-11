// ===== MENÚ ADAPTABLE (hamburguesa) =====
const botonMenu = document.getElementById("menuToggle");
const menu = document.getElementById("nav");

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("activo");
  const abierto = menu.classList.contains("activo");
  botonMenu.setAttribute("aria-expanded", abierto);
  botonMenu.textContent = abierto ? "✕" : "☰";
});

// Cierra el menú al elegir una opción (en celular)
const enlaces = document.querySelectorAll(".nav a");
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menu.classList.remove("activo");
    botonMenu.textContent = "☰";
    botonMenu.setAttribute("aria-expanded", "false");
  });
});

// ===== FORMULARIO DE CONTACTO =====
const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita que la página se recargue

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  respuesta.className = "formulario__respuesta";

  if (nombre === "" || correo === "" || mensaje === "") {
    respuesta.textContent = "Por favor completa todos los campos.";
    respuesta.classList.add("error");
    return;
  }

  respuesta.textContent = "¡Gracias, " + nombre + "! Tu mensaje fue enviado.";
  respuesta.classList.add("exito");
  formulario.reset();
});