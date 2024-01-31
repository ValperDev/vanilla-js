const audioElement = document.querySelector(".js-audio");
const btnAudio = document.querySelector(".js-button-audio");
const resetButton = document.querySelector(".js-button-reset");
const volumeAudio = document.querySelector(".js-volume-audio");
const progressBar = document.querySelector(".progress-bar");

btnAudio.addEventListener("click", ()=> {
    if(btnAudio.hasAttribute("data-paused")) {
        btnAudio.textContent = "Pause";
        btnAudio.removeAttribute("data-paused");
        btnAudio.setAttribute("data-play", "");
        audioElement.play();
    } else if (btnAudio.hasAttribute("data-play")) {
        btnAudio.textContent = "Play";
        btnAudio.removeAttribute("data-play");
        btnAudio.setAttribute("data-paused", "");
        audioElement.pause();
    }
})

resetButton.addEventListener("click", ()=> {
    audioElement.currentTime = 0;
    audioElement.pause();
    btnAudio.textContent = "Play";
    btnAudio.removeAttribute("data-play");
    btnAudio.setAttribute("data-paused", "");
})

volumeAudio.addEventListener("input", (e)=> {
    audioElement.volume = e.target.value;
})

audioElement.addEventListener("canplaythrough", ()=> {
    audioElement.addEventListener("timeupdate", ()=> {
        const audioTotalTime = Math.floor(audioElement.duration);
        progressBar.style.width = `${Math.floor(audioElement.currentTime) * 100 / audioTotalTime}%`
    })
})