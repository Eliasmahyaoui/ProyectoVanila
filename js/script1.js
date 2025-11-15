let resultado = document.getElementById("resultado");
let usuario = document.getElementById("fusuario");
let resultadoEmail = document.getElementById("resultadoEmail");
let botonGuardar= document.getElementById("btnGuardar");

//Este evento es para todo el documento 
document.addEventListener("DOMContentLoaded", () => {

  resultado.style.display = "none";

  // 2. Mostrar después de 5 segundos
  setTimeout(() => {
    resultado.style.display = "block";
  }, 5000);

  // 3. Mostrar con Ctrl + F10
  event.preventDefault(); //Esto lo que hace es que quitae pr defecto la funcion por defecto en esa tecla
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "b") {
      resultado.style.display = "block";
    }
  });

  //los addEcventListener lo que hace es "Escuchar" es decir primero ve el tipo de cosa q tiene que hacer un clic un input etcc y luego ejecuta la funcion de dentro
  botonGuardar.addEventListener("click", () => {
    if (usuario.value.includes("@")) {
      let fecha = new Date();
      localStorage.setItem('fechaGuardada', fecha);
      localStorage.setItem("correo", usuario.value); //Aqui guardo el correo que se introduce en el input
     
      
      resultadoEmail.textContent = "Usuario correcto!";
      window.location.href = "pantalla2.html";
    } else {
      resultadoEmail.textContent = "Introduce un correo valido!";
    }
  });
});
