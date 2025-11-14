//Variables
let introducePregunta = document.getElementById("textoPregunta");
let botonVerdadero = document.getElementById("verdadero");
let botonFalso = document.getElementById("falso");
let atras = document.getElementById("atras");
let puntuacion = document.getElementById("puntuacion");
let p = document.getElementById("verificacionPuntuacion");
let botonGrabar = document.getElementById("grabar");

// Variable para saber si el usuario seleccionó verdadero o falso
let respuestaSeleccionada = null;

// Selección de verdadero
botonVerdadero.addEventListener("click", () => {
  respuestaSeleccionada = "verdadero";
});

// Selección de falso
botonFalso.addEventListener("click", () => {
  respuestaSeleccionada = "falso";
});

// Validación de puntuación
puntuacion.addEventListener("blur", () => {
  if (puntuacion.value < 0 || puntuacion.value > 9) {
    p.textContent = "Deben ser números del 0 al 9";
  } else {
    p.textContent = "Puntuación correcta";
  }
});

// Botón atrás
atras.addEventListener("click", () => {
  window.location.href = "pantalla2.html";
});

// Evento grabar
botonGrabar.addEventListener("click", () => {

  // 1️⃣ Recoger los valores
  let textoPregunta = introducePregunta.value.trim();
  let puntos = puntuacion.value;

  // 2️⃣ Validaciones
  if (textoPregunta === "") {
    alert("La pregunta no puede estar vacía");
    return; 
  }

  if (respuestaSeleccionada === null) {
    alert("Debes seleccionar Verdadero o Falso");
    return;
  }

  if (puntos === "" || puntos < 0 || puntos > 9) {
    alert("La puntuación debe ser un número entre 0 y 9");
    return;
  }

  // 3️⃣ Si todo está bien → Guardar en localStorage
  localStorage.setItem("preguntaGuardada", textoPregunta);
  localStorage.setItem("respuesta", respuestaSeleccionada);
  localStorage.setItem("puntuacion", puntos);

  alert("Pregunta guardada correctamente");
});


