
document.addEventListener("DOMContentLoaded", () => {
  let resultado = document.getElementById("resultado");

  // 1. Ocultar al iniciar
  resultado.style.display = "none";

  // 2. Mostrar después de 5 segundos
  setTimeout(() => {
    resultado.style.display = "block";
  }, 5000);

  // 3. Mostrar con Ctrl + F10
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "F10") {
      resultado.style.display = "block";
    }
  });
});






















/*let resultado = document.getElementById("resultado");//Declaramos variables y le metemos el valor del id 



resultado.style.display= "none";      //Aqui lo que hago es decirle a resultado que no aparezca con resultado.style.display= none



setTimeout(()=>{
resultado.style.display= "block" //ESto es lo mismo que antes, pero simplemente si que se va a mostrar una vez pase 5 segundos.

}),5000;*/




