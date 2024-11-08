let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn =  document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider"); 
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let repeatIcon = document.querySelector(".repeat-track i");
let curr_track = document.createElement("audio");


let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;
let isRepeat = false;

const music_list = [
    {
        img:"musica/img/hurt.jpg",
        name:"Hurt",
        artist:"Jhonny Cash",
        music:"musica/music/hurt.mp3",
    },
    {
        img:"musica/img/high.jpg",
        name:"High Hopes",
        artist:"Pink Floyd",
        music:"musica/music/high_hopes.mp3",
    },
    {
        img:"musica/img/led.jpg",
        name:"Stairway to Heaven",
        artist:"Led Zeppelin",
        music:"musica/music/stairway.mp3",
    },
    {
        img:"musica/img/flema.jpg",
        name:"Y aun yo te recuerdo",
        artist:"Flema",
        music:"musica/music/y_aun_yo_te_recuerdo.mp3",
    },
    {
        img:"musica/img/yeah.jpg",
        name:"Cheated Hearts",
        artist:"Yeah Yeah Yeahs",
        music:"musica/music/cheated_hearts.mp3",
    },
    {
        img:"musica/img/suedehead.jpg",
        name:"Suedehead",
        artist:"Morrissey",
        music:"musica/music/suedehead.mp3",
    },

];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();
    
    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;

    now_playing.textContent =
    "Playing music " + (track_index +1) + " of " + music_list.length;
    updateTimer = setInterval (setUpdate, 1000);
    curr_track.addEventListener("ended", function() {
        if (isRepeat) {
            loadTrack(track_index);  // Repite la misma canción
            playTrack();
        } else {
            nextTrack();  // Si no está en modo repetición, pasa a la siguiente
        }
    });


}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}


function randomTrack() {
    isRandom = !isRandom; // Alterna entre true y false
    if (isRandom) {
        randomIcon.classList.add("randomActive");  // Agrega la clase cuando está activado
    } else {
        randomIcon.classList.remove("randomActive");  // Quita la clase cuando está desactivado
    }
}



function repeatTrack() {
    isRepeat = !isRepeat; // Alterna entre true y false

    // Cambia la clase del ícono según el estado de repetición
    if (isRepeat) {
        repeatIcon.classList.add("repeatActive");  // Agrega la clase cuando está activado
    } else {
        repeatIcon.classList.remove("repeatActive");  // Quita la clase cuando está desactivado
    }
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack(); 
}

function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add("rotate");
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove("rotate");
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
    if (isRandom) {
        // Obtener un índice aleatorio diferente al actual
        let random_index;
        do {
            random_index = Math.floor(Math.random() * music_list.length);
        } while (random_index === track_index);  // Evitar repetir la misma canción
        track_index = random_index;
    } else if (track_index < music_list.length - 1) {
        track_index += 1;
    } else {
        track_index = 0;  // Volver al principio si es la última canción
    }
    
    loadTrack(track_index);
    playTrack();
}

function prevTrack(){
    if(track_index > 0 ){
        track_index -=1; 
    }
    else{
        track_index= music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}

function seekTo(){
    let seekTo = curr_track.duration * (seek_slider.value /100); 
    curr_track.currentTime = seekTo;   
}

function setVolume(){
    curr_track.volume = volume_slider.value /100;
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime /60);
        let currentSeconds = Math.floor(
            curr_track.currentTime - currentMinutes * 60
        );

        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(
            (curr_track.duration - durationMinutes * 60)
        );

        if(currentSeconds < 10){
            currentSeconds = "0" + currentSeconds;
        }
        if(durationSeconds < 10){
            durationSeconds = "0" + durationSeconds;
        }
        if(currentMinutes < 10){
            currentMinutes = "0" + currentMinutes;
        }
        if(durationMinutes < 10){
            durationMinutes = "0" + durationMinutes;
        }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
        
    }
}