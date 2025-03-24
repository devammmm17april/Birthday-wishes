function blowCandle() {
    let flame = document.querySelector(".flame");
    let cake = document.querySelector(".cake-emoji");
    let message = document.getElementById("birthday-message");
    let audio = document.getElementById("birthday-audio");
    let fireworks = document.querySelector(".fireworks");

    // Smoothly fade out the flame
    flame.style.animation = "none";
    flame.style.opacity = "0";

    // Cake grows bigger after blowing the candle
    cake.classList.add("enlarged");

    // Show Birthday Message
    message.classList.add("show-message");

    // Play Birthday Song
    audio.play();

    // Show Fireworks
    fireworks.classList.add("show-fireworks");

    // Create Floating Hearts with Different Colors
    let heartEmojis = ["❤️", "💙", "💚", "💛", "💜", "🧡"];
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}

// OPTIONAL: Blow on Microphone to Extinguish Candle
window.addEventListener("load", () => {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = function (event) {
        let transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
        if (transcript.includes("blow") || transcript.includes("happy birthday")) {
            blowCandle();
        }
    };

    recognition.start();
});
