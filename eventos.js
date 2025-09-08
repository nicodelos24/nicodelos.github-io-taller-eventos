const div = document.querySelector(".container");
const button = document.querySelector("button");

div.addEventListener("click", (evento) => {
  if (evento.target === button){
  alert("Hola!");
  } else {
    alert("Hola! Soy el div")
  }
});
