//Variables para hacer los addeventlistener
let introducePregunta = document.getElementById("pregunta");
let botonVerdadero = document.getElementById("verdadero");
let botonFalso = document.getElementById("falso");
let atras = document.getElementById("atras");
let puntuacion = document.getElementById("puntuacion");
//let listPreguntas = document.getElementById();

//funciones addEventListener

atras.addEventListener("click", () => {
  window.location.href = "pantalla2.html";
});

puntuacion.addEventListener("blur", () => {
 
  if (puntuacion.value) {
     console.log(puntuacion.value);
  }
});
