const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const container = document.getElementById("buttons");

let currentAudio = null;

function stopAll() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

// Create sound buttons
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = sound;

    btn.addEventListener("click", () => {
        stopAll();
        currentAudio = new Audio(`./sounds/${sound}.mp3`);
        currentAudio.play();
    });

    container.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.textContent = "stop";

stopBtn.addEventListener("click", stopAll);

container.appendChild(stopBtn);
