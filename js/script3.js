//Variables para hacer los addeventlistener
let introducePregunta = document.getElementById("pregunta");
let botonVerdadero = document.getElementById("verdadero");
let botonFalso = document.getElementById("falso");
let atras = document.getElementById("atras");
let puntuacion = document.getElementById("puntuacion");
let  p= document.getElementById("verificacionPuntuacion")


//funciones addEventListener

//Evento para ir atras 
atras.addEventListener("click", () => {
  window.location.href = "pantalla2.html";
});

//Evento para puntuacion 
puntuacion.addEventListener("blur", () => {


    if (puntuacion.value < 0 || puntuacion.value>9 ) {
      p.textContent= 'Deben ser numeros del 0 al 9 '; 
    } else {
      p.textContent= 'puntuacion correcta';
    }

  });