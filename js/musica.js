// Listado de my playList

const playlists = {
    1: [
        { title: "Hurt", artist: "Jhonny Cash", cover: "musica/img/hurt.jpg" },
        { title: "High Hopes", artist: "Pink Floyd", cover: "musica/img/high.jpg" },
        { title: "Stairway to Heaven", artist: "Led Zeppelin", cover: "musica/img/led.jpg" },
        { title: "Y aun yo te recuerdo", artist: "Flema", cover: "musica/img/flema.jpg" },
        { title: "Cheated Hearts", artist: "Yeah Yeah Yeahs", cover: "musica/img/yeah.jpg" },
        { title: "Suedehead", artist: "Morrissey", cover: "musica/img/suedehead.jpg" }
    ],
    2: [
        { title: "Piece of my Heart", artist: "Janis Joplin", cover: "img/playlist/2/janis1.jpg" },
        { title: "Cry Baby", artist: "Janis Joplin", cover: "img/playlist/2/janis2.jpg" },
        { title: "Maybe", artist: "Janis Joplin", cover: "img/playlist/2/janis3.jpg" },
        { title: "Kozmic Blues", artist: "Janis Joplin", cover: "img/playlist/2/janis4.jpg" }
    ],
    3: [
        { title: "First Date", artist: "Blink 182", cover: "img/playlist/3/punk1.jpg" },
        { title: "The Kids Aren't Alrigth", artist: "The Offspring", cover: "img/playlist/3/punk2.jpg" },
        { title: "Ya no sos Igual", artist: "2 Minutos", cover: "img/playlist/3/punk3.jpg" },
        { title: "Pet Sematary", artist: "Ramones", cover: "img/playlist/3/punk4.jpg" }
    ],
    4: [
        { title: "Harvest Moon", artist: "Neil Young", cover: "img/playlist/4/folk1.jpg" },
        { title: "Heart of Gold", artist: "Neil Young", cover: "img/playlist/4/folk2.jpg" },
        { title: "Wild Horses", artist: "The Rolling Stones", cover: "img/playlist/4/folk3.jpg" },
        ],
    5: [
        { title: "Black Betty", artist: "Ram Jam", cover: "img/playlist/5/irish1.jpg" },
        { title: "I'm Shipping Up To Boston", artist: "Dropkick Murphys", cover: "img/playlist/5/irish2.jpg" },
        { title: "Rose Tattoo", artist: "Dropkick Murphys", cover: "img/playlist/5/irish3.jpg" }
    ],
};
let currentPlaylistId = null; // Inicializar la variable para guardar el Id de la playlist seleccionado

//----------------------------------------------------------------------------------------------------------

// mostrar los detalles de la playlist seleccionada
function showPlaylist(id) {
    const playlistDetails = document.getElementById("playlist-details");
    const playlistName = document.getElementById("playlist-name");
    const playlistCount = document.getElementById("playlist-count");
    const songsList = document.getElementById("songs-list");

    const playlist = playlists[id];
    playlistName.innerHTML = `Playlist ${id}`;
    playlistCount.innerHTML = `${playlist.length} tracks`;

    songsList.innerHTML = "";
    playlist.forEach(song => {
        const songItem = document.createElement("div");
        songItem.classList.add("song-item");

        songItem.innerHTML = `
            <img src="${song.cover}" alt="Song cover" />
            <div class="song-info">
                <p><strong>${song.title}</strong></p>
                <p>${song.artist}</p>
            </div>
        `;
        songsList.appendChild(songItem);
    });

    playlistDetails.style.display = "block";
    currentPlaylistId = id;
}

//playlist modal para agregar nuevas playlist

// Muestra Playlist Modal
function showAddPlaylistModal() {
    document.getElementById("add-playlist-modal").style.display = "block";
}


//boton cerrar detalles de playlist

function closePlaylistDetails() {
    const playlistDetails = document.getElementById("playlist-details");
    playlistDetails.style.display = "none";  // Ocultar la sección de detalles
    currentPlaylistId = null;  // Limpiar el ID de la playlist actual
}

// Revisar agregado de playlist nuevo vacio (no funciona)
function addNewPlaylist() {
    const playlistName = document.getElementById("newPlaylistName").value;
    
    if (playlistName.trim() === "") {
        alert("Please enter a valid playlist name.");
        return;
    }

    const newPlaylistId = Object.keys(playlists).length + 1;
    playlists[newPlaylistId] = []; 

    alert(`New playlist "${playlistName}" created successfully!`);
    closeAddPlaylistModal();
}

// Boton cancelar para modal agregar playlist

function closeAddPlaylistModal() {
    document.getElementById('add-playlist-modal').style.display = 'none';
}
//-------------------------------------------------------------------------------------------
//agregar canciones a las playlist

// Muestra Modify Playlist Modal
function modifyPlaylist() {
    document.getElementById("modify-playlist-modal").style.display = "block";
  }

// Cierra Modify Playlist Modal
function closeModifyPlaylistModal() {
    document.getElementById("modify-playlist-modal").style.display = "none";
}

// Agrega cancion a Playlist Revisar Funcionaba previo modificaciones 9/11/2024
function addSongToPlaylist(event) {
    event.preventDefault();

    const songTitle = document.getElementById("songTitle").value;
    const songArtist = document.getElementById("songArtist").value;
    const songCover = document.getElementById("songCover").value;
    
    if (songTitle.trim() === "" || songArtist.trim() === "" || songCover.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    const song = {
        title: songTitle,
        artist: songArtist,
        cover: songCover
    };

    const playlistId = document.getElementById("selectedPlaylistId").value; 
    playlists[playlistId].push(song);

    alert(`Song "${songTitle}" added to Playlist ${playlistId}`);
    closeModifyPlaylistModal();
}

//------------------------------------------------------------------------------------

//Reproduce la playlist 1 y redirecciona las otras a la pagina en construccion

function playPlaylist() {
    const redirectUrl = currentPlaylistId === 1
      ? "musica_reproductor.html"
      : "musica_reproductor_construccion.html";
  
    window.location.href = redirectUrl;
  }




//----------------------------------------------------------------------------------------
//Mi Biblioteca

// Función para abrir el modal de subir canción
function openUploadModal() {
    document.getElementById("uploadModal").style.display = "block";
}

// Asocia la función al botón correcto
document.getElementById("openModalBtn").addEventListener("click", openUploadModal);

// Función para cerrar el modal de subir canción
function closeUploadModal() {
    document.getElementById("uploadModal").style.display = "none";
}

// Para cerrar el modal al hacer clic en el icono de cierre
document.getElementById("closeModal").addEventListener("click", closeUploadModal);


// Mensaje de subido correctamente
document.getElementById("submitBtn").addEventListener("click", function() {
  
    // Mensaje de éxito
    alert("Canción subida correctamente!");
});