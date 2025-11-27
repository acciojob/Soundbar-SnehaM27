const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const container = document.getElementById("buttons");

let currentAudio = null;

function stopAll() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

sounds.forEach(sound => {
    // create button
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = sound;

    // create audio tag so Cypress can detect it
    const audio = document.createElement("audio");
    audio.src = `./sounds/${sound}.mp3`;
    audio.id = sound; // optional but helps debugging
    document.body.appendChild(audio);

    btn.addEventListener("click", () => {
        stopAll();
        currentAudio = audio;
        audio.play();
    });

    container.appendChild(btn);
});

// STOP button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.textContent = "stop";

stopBtn.addEventListener("click", stopAll);

container.appendChild(stopBtn);
