//Variables para hacer los addeventlistener
let introducePregunta = document.getElementById("textoPregunta");
let botonVerdadero = document.getElementById("verdadero");
let botonFalso = document.getElementById("falso");
let atras = document.getElementById("atras");
let puntuacion = document.getElementById("puntuacion");
let  p= document.getElementById("verificacionPuntuacion");
let botonGrabar= document.getElementById("grabar");

//funciones addEventListener

//Evento para ir atras 
atras.addEventListener("click", () => {
  window.location.href = "pantalla2.html";
});

//Evento para puntuacion 
puntuacion.addEventListener("blur", () => {


    if (puntuacion.value < 0 || puntuacion.value>9) {
      p.textContent= 'Deben ser numeros del 0 al 9 '; 
    } else {
      p.textContent= 'puntuacion correcta';
    }
  });

  //Evento para grabar 

  botonGrabar.addEventListener('click',()=>{

    //Primero guardamos todos los requisitos que ponga el usuario: la pregunta, verdadero o falso y la puntuacion
    const preguntas= localStorage.setItem("preguntaGuardada", preguntas);
    const verdaderas= localStorage.setItem("opcionVerdadera", verdaderas);
    const falsas = localStorage.setItem("opcionFalsa", falsas);
    const puntuacion= localStorage.setItem("puntuacionGuardada", puntuacion);


    //Si todo esto se cumple.....
    if (introducePregunta!=null && (botonVerdadero== "onclick" ||botonFalso== "onclick") && puntuacion.value!=null) {
      localStorage.getItem('preguntaGuardada');
    }



  });

