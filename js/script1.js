let resultado = document.getElementById("resultado");
let usuario = document.getElementById("fusuario");
let resultadoEmail = document.getElementById("resultadoEmail");
let botonGuardar= document.getElementById("btnGuardar");
resultado.style.display = "none";

  
  setTimeout(() => {
    resultado.style.display = "block";
  }, 5000);

  // evento para  Ctrl + b
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "b") {
      resultado.style.display = "block";
    }
  });

  //evento para boton guardar + condciones
  botonGuardar.addEventListener("click", () => {
    if (usuario.value.includes("@")) {
      let fecha = new Date(); //Aqui con el obejto date devuelvo la fecha 
      localStorage.setItem('fechaGuardada', fecha); //Guardo la fecha 
      localStorage.setItem("correo", usuario.value); //Aqui guardo el correo que se introduce en el input
     
      resultadoEmail.textContent = "Usuario correcto!";
      window.location.href = "pantalla2.html";
    } else {
      resultadoEmail.textContent = "Introduce un correo valido!";
    }
  });

