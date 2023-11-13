//===============================================================
// boton up
document.getElementById("btn-up").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    //window.requestAnimationFrame (scrollUp);//doy animacion al efecto, esta complementa la velocidad de retroceso
    window.scrollTo(0, 0); //obtengo la velocidad de retroceso (0, currentScroll - (currentScroll/1))
  }
}

buttonUP = document.getElementById("btn-up");

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;
  if (scroll > 50) {
    buttonUP.style.transform = "scale(1)";//Transforma la escala visible
  } else if (scroll < 50) {
    buttonUP.style.transform = "scale(0)";
  }
};
//===============================================================


