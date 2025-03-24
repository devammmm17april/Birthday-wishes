function playSong() {
    let song = document.getElementById("song");
    song.play();

    // 🎊 Create Confetti Effect
    let confettiInterval = setInterval(() => {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }, 200);
    
    setTimeout(() => clearInterval(confettiInterval), 5000);

    // 🎈 Floating Balloons
    let balloonsContainer = document.getElementById("balloons-container");
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDuration = Math.random() * 4 + 3 + "s";
        balloonsContainer.appendChild(balloon);
        setTimeout(() => balloon.remove(), 6000);
    }

    // 🎆 Fireworks
    let fireworksContainer = document.getElementById("fireworks-container");
    for (let i = 0; i < 10; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 50 + 30 + "vh";
        firework.style.animationDuration = Math.random() * 1 + 1 + "s";
        fireworksContainer.appendChild(firework);
        setTimeout(() => firework.remove(), 1500);
    }
}

function createFirework() {
    let firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 50 + "vh"; 
    document.getElementById("fireworks").appendChild(firework);

    setTimeout(() => firework.remove(), 1500); // Remove after explosion
}

// Launch fireworks every 1 second
function startFireworks() {
    setInterval(createFirework, 1000); // Start fireworks every second
}

// 🎨 Generate Random Color for Balloons
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createHearts() {
    for (let i = 0; i < 20; i++) {  // Adjust number of hearts
        let heart = document.createElement("div");
        heart.classList.add("heart-float");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000); // Remove after animation
    }
}

// Generate hearts every 2 seconds
setInterval(createHearts, 2000);

function openMemories() {
    window.open("memories.html", "_blank"); // Opens in a new tab
}

document.addEventListener("DOMContentLoaded", function () {
    let candle = document.querySelector(".flame");
    let birthdaySong = document.getElementById("song");

    // Blow the candle on click
    document.querySelector(".candle").addEventListener("click", function () {
        candle.style.animation = "fadeOut 1s forwards"; // Extinguish candle flame
        birthdaySong.play(); // Play birthday song
        startFireworks(); // Start fireworks effect
    });

    // Fireworks effect
    function startFireworks() {
        let fireworksContainer = document.getElementById("fireworks-container");
        for (let i = 0; i < 10; i++) {
            let firework = document.createElement("div");
            firework.classList.add("firework");
            fireworksContainer.appendChild(firework);

            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight / 2;
            firework.style.left = `${x}px`;
            firework.style.top = `${y}px`;

            setTimeout(() => firework.remove(), 2000);
        }
    }
});

function createBalloons() {
    let container = document.getElementById("balloons-container");
    for (let i = 0; i < 15; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = Math.random() * 3 + 2 + "s";
        container.appendChild(balloon);

        setTimeout(() => balloon.remove(), 5000);
    }
}

setInterval(createBalloons, 2000);
document.querySelector("button").addEventListener("click", function () {
    let confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => confettiContainer.remove(), 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    let flame = document.querySelector(".flame");
    let birthdaySong = document.getElementById("birthday-song");

    document.querySelector(".candle").addEventListener("click", function () {
        flame.style.animation = "fadeOut 1s forwards"; // Extinguish candle
        birthdaySong.play(); // Play birthday song
        startFireworks(); // Start fireworks
    });

    // Fireworks Effect
    function startFireworks() {
        let fireworksContainer = document.getElementById("fireworks-container");

        for (let i = 0; i < 10; i++) {
            let firework = document.createElement("div");
            firework.classList.add("firework");
            fireworksContainer.appendChild(firework);

            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight / 2;
            firework.style.left = `${x}px`;
            firework.style.top = `${y}px`;

            setTimeout(() => firework.remove(), 2000);
        }
    }
});
