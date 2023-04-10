document.addEventListener('DOMContentLoaded', () => {
  const btnReproducir = document.querySelector('#btn-reproducir');
  const btnEscuchar = document.querySelector('#btn-escuchar');

  btnReproducir.addEventListener('click', reproducirTexto);
  btnEscuchar.addEventListener('click', escuchar);
})

function reproducirTexto() {
  // Crear un objeto SpeechSynthesisUtterance con el texto a reproducir
  const texto = '¡Hola! Para recomendarle un pantalón para hombre necesito conocer un poco más sus preferencias y necesidades. ¿Podría indicarme qué tipo de pantalón está buscando? ¿Algo casual o formal? ¿Deportivo o elegante? Además, ¿cuál es su talla y color preferido? Con esta información, puedo ayudarle a encontrar una opción que se ajuste a sus necesidades.';

  const mensaje = new SpeechSynthesisUtterance(texto);

  // Establecer el idioma y el acento de la voz
  mensaje.lang = 'es-CO'; // colombiano
  mensaje.voiceURI = 'Google español de Colombia'; // voz de Google para Colombia

  // Reproducir el mensaje en voz alta
  window.speechSynthesis.speak(mensaje);
}

async function escuchar() {
  const inputVoice = document.querySelector('#input-voice');

  // Crear un nuevo objeto de reconocimiento de voz
  const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // Configurar el idioma
  recognition.lang = 'es-CO';

  // Empezar a escuchar la voz del usuario
  recognition.start();
  console.log('Ready to receive a message.');

  // Capturar el texto cuando el usuario hable
  recognition.onresult = await function(event) {
    const texto = event.results[0][0].transcript;
    inputVoice.textContent = `Result received: ${texto}.`;
    console.log(texto); // Imprimir el texto en la consola
  };
  console.log('termina');
}