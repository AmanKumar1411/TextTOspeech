// document.getElementById('speak-button').addEventListener('click', () => {
//   const text = document.querySelector('#text-to-speak').value;

//   const utterance = new SpeechSynthesisUtterance(text);

//   utterance.pitch = 1; // Pitch (0 to 2, where 1 is normal)
//   utterance.rate = 1; // Rate (0.1 to 10, where 1 is normal)

//   window.speechSynthesis.speak(utterance);
// });

document.getElementById("start-button").addEventListener("click", () => {
  const output = document.getElementById("output");

  // Check for browser support
  if (
    !("webkitSpeechRecognition" in window) &&
    !("SpeechRecognition" in window)
  ) {
    alert("Your browser does not support speech recognition.");
    return;
  }

  // Create a new instance of the speech recognition object
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // Set recognition properties
  recognition.continuous = false; // Stop after one recognition
  recognition.interimResults = false; // Get only final results

  // Event handler for when recognition produces a result
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.value += transcript + "\n";
  };

  // Event handler for errors
  recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
  };

  // Event handler for when recognition ends
  recognition.onend = () => {
    console.log("Speech recognition service disconnected");
  };

  // Start speech recognition
  recognition.start();
});
