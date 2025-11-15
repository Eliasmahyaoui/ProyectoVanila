//Variables
let introducePregunta = document.getElementById("textoPregunta");
let botonVerdadero = document.getElementById("verdadero");
let botonFalso = document.getElementById("falso");
let atras = document.getElementById("atras");
let puntuacion = document.getElementById("puntuacion");
let pPregunta = document.getElementById("verificacionPregunta");
let pVerdaderoFalso = document.getElementById("verificacionVerdaderoFalso");
let pPuntuacion = document.getElementById("verificacionPuntuacion");
let rFinal = document.getElementById("resultadoFinal");
let botonGrabar = document.getElementById("grabar");
let tabla = document.getElementById("tablaPreguntas");
let respuestaSeleccionada = null;

tabla.style.display = "none";
let puedeSalir = true;

// evento de verdadero
botonVerdadero.addEventListener("click", () => {
  respuestaSeleccionada = 'verdadero';
});

// evento de falso
botonFalso.addEventListener("click", () => {
  respuestaSeleccionada = 'falso';
});

// evento boton atrás
atras.addEventListener("click", () => {

  if (!puedeSalir) {
    atras.textContent = "No puedes salir todavia.."
    return;
  } else {
    window.location.href = "pantalla2.html";
  }


});

// evento grabar
botonGrabar.addEventListener("click", () => {

  //  Aqui tambien esta en false porque realemnete tampoco podrias salir
  //mientras se carga el estado hasta que no deje de poner "guardando" por ejmplo.
  puedeSalir = false;

  if (introducePregunta.value === "") {
    pPregunta.textContent = 'La pregunta no puede estar vacía';
    return;
  } else {
    pPregunta.style.display = "none";
  }

  if (respuestaSeleccionada === null) {
    pVerdaderoFalso.textContent = 'Debes seleccionar Verdadero o Falso';
    return;
  } else {
    pVerdaderoFalso.style.display = "none";
  }

  if (puntuacion.value === "" || puntuacion.value < 0 || puntuacion.value > 9) {
    pPuntuacion.textContent = 'La puntuación debe ser un número entre 0 y 9';
    return;
  } else {
    pPuntuacion.style.display = "none";
  }

  // Guardar valores de varibales antes de setTimeout
  let preguntaValor = introducePregunta.value;
  let respuestaValor = respuestaSeleccionada;
  let puntuacionValor = puntuacion.value;
  let estadoValor = "Guardando...";
  
  // Guardar en localStorage
  localStorage.setItem("preguntaGuardada", preguntaValor);
  localStorage.setItem("respuesta", respuestaValor);
  localStorage.setItem("puntuacion", puntuacionValor);

  rFinal.textContent = 'Pregunta guardada correctamente';

  //Guardamos en la cookies
  document.cookie= "preguntaGuardada=" + preguntaValor;
  document.cookie= "respuesta=" + respuestaValor;
  document.cookie= "puntuacion=" + puntuacionValor;


  tabla.style.display = "table";

  // dentro de setTimeOut creamos fila y todo lo que tiene que ver con la tabla
  setTimeout(() => {
    let fila = document.createElement("tr");

    let tdPregunta = document.createElement("td");
    tdPregunta.textContent = preguntaValor;
    fila.appendChild(tdPregunta);

    let tdRespuesta = document.createElement("td");
    tdRespuesta.textContent = respuestaValor;
    fila.appendChild(tdRespuesta);

    let tdPuntuacion = document.createElement("td");
    tdPuntuacion.textContent = puntuacionValor;
    fila.appendChild(tdPuntuacion);

    let tdEstado = document.createElement("td");
    tdEstado.textContent = estadoValor;
    fila.appendChild(tdEstado);

    tabla.appendChild(fila);


    setTimeout(() => {
      tdEstado.textContent = "OK  ";
      puedeSalir = true; //Aqui ya si que sales cuando el estado esta en OK 
    }, 5000);

  });

});