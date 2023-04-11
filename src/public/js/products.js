document.addEventListener('DOMContentLoaded', () => {
  const btnPlay = document.querySelector('#btn-play');
  const btnHear = document.querySelector('#btn-hear');

  btnPlay.addEventListener('click', playText);
  btnHear.addEventListener('click', hear);
})

function playText() {
  // Create a SpeechSynthesisUtterance object with the text to be played
  const text = 'Hello! To recommend a pair of pants for men, I need to know a little more about your preferences and needs. Could you tell me what kind of pants you are looking for? Something casual or formal? Sporty or elegant? Also, what is your preferred size and color? With this information, I can help you find an option that fits your needs.';

  const message = new SpeechSynthesisUtterance(text);

  // Set the language and accent of the voice
  message.lang = 'es-CO'; // colombian
  message.voiceURI = 'Google español de Colombia'; // Google voice for Colombia

  // Play the message out loud
  window.speechSynthesis.speak(message);
}

function hear() {
  const inputVoice = document.querySelector('#input-voice');

  // Create a new speech recognition object
  const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // Set language
  recognition.lang = 'es-CO';

  // Start listening to the user's voice
  recognition.start();

  // Capture the text when the user speaks
  recognition.onresult = function(event) {
    const text = event.results[0][0].transcript;
    inputVoice.textContent = `Result received: ${text}.`;
  };
}