/* captura de parametro  */
let link = new URL(window.location.href);
var parametro2 = link.searchParams.get("error");
/*  */

const popupok = document.getElementById("correct");
const done = document.getElementById("done");

done.addEventListener("click", () => {
  popupok.classList.remove("show");
});

/* funcion */
function popup(param) {
  if (param == 2) {
    popupok.classList.add("show");
  }
}

/* ejecucion al momento de cargar la pagina */
window.onload = popup(parametro2);
