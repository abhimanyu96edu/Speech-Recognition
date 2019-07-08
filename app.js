const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const greetings = ["I am good", "mein badiya hu", "majama", "changa ji changa"];
const weather = ["Rainny", "Pakodi wala", "cool"];

recognition.onstart = function() {
    console.log("Microphoen Activated");
};

recognition.onresult = function(event) {
    console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();


    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    if (message.includes("how are you")) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    window.speechSynthesis.speak(speech);
}

//Add Listener to Button
btn.addEventListener("click", () => {
    recognition.start();
});