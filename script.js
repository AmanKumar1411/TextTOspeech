document.getElementById('speak-button').addEventListener('click', () => {
  const text = document.querySelector('#text-to-speak').value;

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.pitch = 1; // Pitch (0 to 2, where 1 is normal)
  utterance.rate = 1; // Rate (0.1 to 10, where 1 is normal)

  window.speechSynthesis.speak(utterance);
});

