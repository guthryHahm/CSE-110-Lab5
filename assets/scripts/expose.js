// expose.js
const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {
  const expose = document.getElementById("expose");
  ////////////////////////// Horn ///////////////////////////
  const horn_selection = expose.querySelector("#horn-select");
  const horn_image = expose.querySelector("img");
  const horn_audio = expose.querySelector("audio");

  horn_selection.addEventListener("change",(event) => {
    horn_image.src = "assets/images/" + event.target.value + ".svg";
    horn_audio.src = "assets/audio/" + event.target.value + ".mp3";
  });

  ////////////////////////// Volume ///////////////////////////
  const volume_controls = expose.querySelector("#volume-controls");
  const volume = volume_controls.querySelector("#volume");
  const volume_img = volume_controls.querySelector("img");
  volume.addEventListener("input",(event) => {
    const volume_value = event.target.value;
    let level;
    if (volume_value == 0){
      level = 0;
    } else if (volume_value < 33) {
      level = 1;
    } else if (volume_value < 67) {
      level = 2;
    } else {
      level = 3;
    }
    volume_img.src = "assets/icons/volume-level-" + level + ".svg";
    horn_audio.volume = volume_value /volume.max;
  })

  ////////////////////////// Audio ///////////////////////////
  const play_sound_button = expose.querySelector("button");
  play_sound_button.addEventListener("click",(event) => {
    if (horn_selection.value == "party-horn"){
      jsConfetti.addConfetti();
    }
    horn_audio.play();
  })


}