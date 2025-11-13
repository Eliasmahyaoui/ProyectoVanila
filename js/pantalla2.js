//Estas variables seran para la pantalla 2
let mostrarCorreo = document.getElementById("correoMostrado");
let verificaFecha = document.getElementById("verificacion");

document.addEventListener("DOMContentLoaded", () => {
  const correo = localStorage.getItem("correo");
  const mostrarFecha = localStorage.getItem("fechaGuardada");

  const p = document.getElementById("correoMostrado");
  const fecha = document.getElementById("verificacion");

  p.textContent = "Correo guardado: " + correo;
  fecha.textContent = "La ulitma vez que entraste fue el " + mostrarFecha;
});
