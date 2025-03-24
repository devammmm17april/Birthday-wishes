// Fireworks Effect
function createFirework() {
    let firework = document.createElement("div");
    firework.classList.add("firework");

    // Random Position
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 50 + "vh"; 

    document.getElementById("fireworks").appendChild(firework);

    // Remove after explosion
    setTimeout(() => firework.remove(), 1500);
}

// Start fireworks every 1 second
setInterval(createFirework, 1000);

// Balloon Effect
function createBalloon() {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor = getRandomColor();
    document.querySelector(".balloon-container").appendChild(balloon);

    // Remove balloon after floating
    setTimeout(() => balloon.remove(), 8000);
}

// Generate random colors for balloons
function getRandomColor() {
    let colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Start floating balloons every 2 seconds
setInterval(createBalloon, 2000);

// Go back to main page
function goBack() {
    window.location.href = "wishes.html";
}

function goBack() {
    window.location.href = "wishes.html"; // Redirects to the main page
}
