// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const expose = document.getElementById("expose");
  const horn_selection = expose.querySelector("#horn-select");
  const horn_image = expose.querySelector("img");
  const horn_audio = expose.querySelector("audio");

  horn_selection.addEventListener("change",(event) => {
    horn_image.src = "assets/images/" + event.target.value + ".svg";
    horn_audio.src = "assets/audio/" + event.target.value + ".mp3";
  });
  // TODO
}