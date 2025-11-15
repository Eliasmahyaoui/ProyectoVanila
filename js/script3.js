
//Variables
let introducePregunta = document.getElementById("textoPregunta");
let botonVerdadero = document.getElementById("verdadero");
let botonFalso = document.getElementById("falso");
let atras = document.getElementById("atras");
let puntuacion = document.getElementById("puntuacion");
let pPregunta= document.getElementById("verificacionPregunta");
let pVerdaderoFalso= document.getElementById("verificacionVerdaderoFalso");
let pPuntuacion = document.getElementById("verificacionPuntuacion");
let rFinal= document.getElementById("resultadoFinal");
let botonGrabar = document.getElementById("grabar");
let tabla= document.getElementById("tablaPreguntas");
let respuestaSeleccionada = null;


tabla.style.display="none";


// evento de verdadero
botonVerdadero.addEventListener("click", () => {
  respuestaSeleccionada= 'verdadero';
});

// evento de falso
botonFalso.addEventListener("click", () => {
  respuestaSeleccionada= 'falso';
});

// evento boton atrás
atras.addEventListener("click", () => {
  window.location.href = "pantalla2.html";
});

// evento grabar
botonGrabar.addEventListener("click", () => {

  // VALIDACIONES (ya las tienes)
  if (introducePregunta.value === "") {
    pPregunta.textContent= 'La pregunta no puede estar vacía';
    return;
  } else { pPregunta.style.display = "none"; }

  if (respuestaSeleccionada===null) {
    pVerdaderoFalso.textContent= 'Debes seleccionar Verdadero o Falso';
    return;
  } else { pVerdaderoFalso.style.display= "none"; }

  if (puntuacion.value === "" || puntuacion.value < 0 || puntuacion.value > 9) {
    pPuntuacion.textContent= 'La puntuación debe ser un número entre 0 y 9';
    return;
  } else { pPuntuacion.style.display= "none"; }

  // GUARDAR VALORES EN VARIABLES ANTES DE setTimeout
  let preguntaVal = introducePregunta.value;
  let respuestaVal = respuestaSeleccionada;
  let puntuacionVal = puntuacion.value;
  let estadoVal = "Guardando...";
1
  // Guardar en localStorage si quieres
  localStorage.setItem("preguntaGuardada", preguntaVal);
  localStorage.setItem("respuesta", respuestaVal);
  localStorage.setItem("puntuacion", puntuacionVal);

  rFinal.textContent = 'Pregunta guardada correctamente';

  // MOSTRAR LA TABLA
  tabla.style.display = "table";

  // CREAR FILA Y AÑADIR DATOS
  setTimeout(() => {
      let fila = document.createElement("tr");

      let tdPregunta = document.createElement("td");
      tdPregunta.textContent = preguntaVal;
      fila.appendChild(tdPregunta);

      let tdRespuesta = document.createElement("td");
      tdRespuesta.textContent = respuestaVal;
      fila.appendChild(tdRespuesta);

      let tdPuntuacion = document.createElement("td");
      tdPuntuacion.textContent = puntuacionVal;
      fila.appendChild(tdPuntuacion);

      let tdEstado = document.createElement("td");
      tdEstado.textContent = estadoVal;
      fila.appendChild(tdEstado);

      tabla.appendChild(fila);

      // cambiamos el estado despues de 3 segundos
      setTimeout(() => {
          tdEstado.textContent = "OK  ";
      }, 5000);

  }, 5000); // medio segundo para simular retraso
});

