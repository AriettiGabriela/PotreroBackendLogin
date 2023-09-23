const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

/* captura de parametro  */
let link = new URL(window.location.href);
var parametro1 = link.searchParams.get("error");
/*  */

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const popupWrong = document.getElementById("wrong");
const reintentar = document.getElementById("again");

reintentar.addEventListener("click", () => {
  popupWrong.classList.remove("show");
});

const popupok = document.getElementById("correct");
const done = document.getElementById("done");

done.addEventListener("click", () => {
  popupok.classList.remove("show");
});

/* funcion */
function popup(param) {
  if (param == 1) {
    popupWrong.classList.add("show");
  } else if (param == 2) {
    popupok.classList.add("show");
  }
}

/* ejecucion al momento de cargar la pagina */
window.onload = popup(parametro1);
