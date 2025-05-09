// explore.js

window.addEventListener('DOMContentLoaded', init);

function fillVoicesList(){
  const voices = speechSynthesis.getVoices();
  const explore = document.getElementById("explore");
  const voiceSelection = explore.querySelector("#voice-select");
  const speakingImage = explore.querySelector("img");


  voices.forEach(function(voice){
    const voice_option = document.createElement('option');
    voice_option.value = voice.name;
    voice_option.text = voice.name;
    voiceSelection.appendChild(voice_option);
    console.log(voice.name);
  });

  const speechButton = explore.querySelector('button');
  const speechTextbox = explore.querySelector('#text-to-speak');

  let voice = voices[0];
  let speechText = new SpeechSynthesisUtterance(speechTextbox.value);
  speechText.voice = voice;

  speechText.onend = () => {
    speakingImage.src = "assets/images/smiling.png";
  };

  voiceSelection.addEventListener("change",(event)=>{
    voice = voices.find(function(voice){
      return voice.name === event.target.value;
    });
    speechText.voice = voice;
  });

  speechTextbox.addEventListener("input",(event) => {
    speechText = new SpeechSynthesisUtterance(event.target.value);
    speechText.voice = voice;
    speechText.onend = () => {
      speakingImage.src = "assets/images/smiling.png";
    };
  })


  speechButton.addEventListener("click",(event) => {
    speakingImage.src = "assets/images/smiling-open.png";
    speechSynthesis.speak(speechText);
  });

}

function init() {
  speechSynthesis.onvoiceschanged = fillVoicesList;
  speechSynthesis.getVoices();
  fillVoicesList();
}