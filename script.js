//your JS code here. If required.
// List of audio names
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Create container section
const section = document.createElement("section");
section.id = "buttons";
document.body.appendChild(section);

// Add sound buttons
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = sound;

    btn.addEventListener("click", () => {
        stopSound(); // stop any playing audio
        const audio = new Audio(`./sounds/${sound}.mp3`);
        audio.play();
        current = audio; // store reference
    });

    section.appendChild(btn);
});

// Add stop button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.textContent = "stop";

let current = null; // currently playing audio

function stopSound() {
    if (current) {
        current.pause();
        current.currentTime = 0;
    }
}

stopBtn.addEventListener("click", stopSound);

section.appendChild(stopBtn);
