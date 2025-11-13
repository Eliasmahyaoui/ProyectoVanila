//Estas variables seran para la pantalla 2
let mostrarCorreo = document.getElementById("correoMostrado");
let verificaFecha


document.addEventListener('DOMContentLoaded',()=>{

  const correo= localStorage.getItem('correo');
  const p= document.getElementById("correoMostrado")

  p.textContent= 'Correo guardado: ' + correo

});
