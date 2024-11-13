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
        img:"amigos/1/musica/lista2.jpg",
        name:"Sirena Varada",
        artist:"Heroes del Silencio",
        music:"musica/music/01.mp3",
    },
    {
        img:"amigos/1/cancion2.jpg",
        name:"Love Song",
        artist:"The Cure",
        music:"musica/music/02.mp3",
    },
    {
        img:"amigos/1/cancion3.jpg",
        name:"Back to School",
        artist:"Deftones",
        music:"musica/music/03.mp3",
    },
    {
        img:"amigos/1/musica/img/nirvana.jpg",
        name:"Something In The Way",
        artist:"Nirvana",
        music:"musica/music/04.mp3",
    },
    {
        img:"amigos/1/musica/img/nirvana.jpg",
        name:"Smells Like Teen Spirit",
        artist:"Nirvana",
        music:"musica/music/05.mp3",
    },
    {
        img:"amigos/1/musica/lista2.jpg",
        name:"Entre dos tierras",
        artist:"Heroes del Silencio",
        music:"musica/music/06.mp3",
    },
    {
        img:"amigos/1/musica/lista2.jpg",
        name:"Maldito duende",
        artist:"Heroes del Silencio",
        music:"musica/music/07.mp3",
    },
    {
        img:"amigos/1/musica/lista2.jpg",
        name:"Oración",
        artist:"Heroes del Silencio",
        music:"musica/music/08.mp3",
    },
    {
        img:"amigos/1/musica/img/iorio.jpg",
        name:"Hace Casi 2000 Años",
        artist:"Iorio",
        music:"musica/music/09.mp3",
    },
    {
        img:"amigos/1/musica/img/almafuerte.jpg",
        name:"Por Ser Yo",
        artist:"Almafuerte",
        music:"musica/music/10.mp3",
    },
    {
        img:"amigos/1/musica/img/atesorando.jpg",
        name:"Justo Que Te Vas",
        artist:"Iorio",
        music:"musica/music/11.mp3",
    },
    {
        img:"amigos/1/musica/img/oconnor.jpg",
        name:"Yo canibal",
        artist:"O Connor",
        music:"musica/music/12.mp3",
    },
    {
        img:"amigos/1/musica/img/joy.jpg",
        name:"Love Will Tear Us Apart",
        artist:"Joy Division",
        music:"musica/music/13.mp3",
    },
    {
        img:"amigos/1/musica/img/sacrilege.jpg",
        name:"Sacrilege",
        artist:"Yeah Yeah Yeahs",
        music:"musica/music/14.mp3",
    },
    {
        img:"amigos/1/musica/img/maria.jpg",
        name:"Girassóis de van gogh",
        artist:"Mari Froes",
        music:"musica/music/15.mp3",
    },
    {
        img:"amigos/1/musica/img/zaz.jpg",
        name:"Le long de la route",
        artist:"Zaz",
        music:"musica/music/16.mp3",
    },
    {
        img:"amigos/1/musica/img/pod.jpg",
        name:"Alive",
        artist:"P.o.d",
        music:"musica/music/17.mp3",
    },
    {
        img:"amigos/1/musica/img/pixies.jpg",
        name:"Hey",
        artist:"Pixies",
        music:"musica/music/18.mp3",
    },
    {
        img:"amigos/1/musica/img/ELEANOR.jpg",
        name:"Eleanor Rigby",
        artist:"The Beatles",
        music:"musica/music/19.mp3",
    },
    {
        img:"amigos/1/musica/img/feel.jpg",
        name:"Feel Good Inc.",
        artist:"Gorillaz",
        music:"musica/music/20.mp3",
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