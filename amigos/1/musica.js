// Listado de my playList

const playlists = {
    1: [
        { title: "Sirena Varada", artist: "Heroes del Silencio", cover: "amigos/1/musica/lista2.jpg" },
        { title: "Love Song", artist: "The Cure", cover: "amigos/1/cancion2.jpg" },
        { title: "Back to School", artist: "Deftones", cover: "amigos/1/cancion3.jpg" },
        { title: "Something In The Way", artist: "Nirvana", cover: "amigos/1/musica/img/nirvana.jpg" },
        { title: "Smells Like Teen Spirit", artist: "Nirvana", cover: "amigos/1/musica/img/nirvana.jpg" },
        { title: "Entre dos tierras", artist: "Heroes del Silencio", cover: "amigos/1/musica/lista2.jpg"},
        { title: "Maldito duende", artist: "Heroes del Silencio", cover: "amigos/1/musica/lista2.jpg"},
        { title: "Oración", artist: "Heroes del Silencio", cover: "amigos/1/musica/lista2.jpg"},
        { title: "Hace Casi 2000 Años", artist: "Iorio", cover: "amigos/1/musica/img/iorio.jpg"},
        { title: "Por Ser Yo", artist: "Almafuerte", cover: "amigos/1/musica/img/almafuerte.jpg"},
        { title: "Justo Que Te Vas", artist: "Iorio", cover: "amigos/1/musica/img/atesorando.jpg"},
        { title: "Yo Canibal", artist: "O'Connor", cover: "amigos/1/musica/img/oconnor.jpg"},
        { title: "Love Will Tear Us Apart", artist: "Joy Division", cover: "amigos/1/musica/img/joy.jpg"},
        { title: "Sacrilege", artist: "Yeah Yeah Yeahs", cover: "amigos/1/musica/img/sacrilege.jpg"},
        { title: "Girassóis de van gogh", artist: "Mari Froes ", cover: "amigos/1/musica/img/maria.jpg"},
        { title: "Le long de la route", artist: "Zaz", cover: "amigos/1/musica/img/zaz.jpg"},
        { title: "Alive", artist: "P.o.d", cover: "amigos/1/musica/img/pod.jpg"},
        { title: "Hey", artist: "Pixies", cover: "amigos/1/musica/img/pixies.jpg "},
        { title: "Eleanor Rigby", artist: "The Beatles", cover: "amigos/1/musica/img/ELEANOR.jpg"},
        { title: "Feel Good Inc.", artist: "Gorillaz", cover: "amigos/1/musica/img/feel.jpg"}
    ],
    2: [
        { title: "Sirena Varada", artist: "Heroes del Silencio", cover: "amigos/1/musica/lista2.jpg" },
        { title: "Entre dos tierras", artist: "Heroes del Silencio", cover: "amigos/1/musica/lista2.jpg" },
        { title: "Maldito duende", artist: "Heroes del Silencio", cover: "amigos/1/musica/lista2.jpg" },
        { title: "Oracion", artist: "Heroes del Silencio", cover: "amigos/1/musica/lista2.jpg" }
    ],
    3: [
        { title: "Hace Casi 2000 Años", artist: "Iorio", cover: "amigos/1/musica/img/iorio.jpg" },
        { title: "Por Ser Yo", artist: "Almafuerte", cover: "amigos/1/musica/img/almafuerte.jpg" },
        { title: "Justo Que Te Vas", artist: "Iorio", cover: "amigos/1/musica/img/atesorando.jpg" },
        { title: "Yo Canibal", artist: "O'Connor", cover: "amigos/1/musica/img/oconnor.jpg" }
    ],
    4: [
        { title: "Love Song", artist: "The Cure", cover: "amigos/1/cancion2.jpg" },
        { title: "Back to School", artist: "Deftones", cover: "amigos/1/cancion3.jpg" },
        { title: "Something In The Way", artist: "Nirvana", cover: "amigos/1/musica/img/nirvana.jpg" },
        { title: "Smells Like Teen Spirit", artist: "Nirvana", cover: "amigos/1/musica/img/nirvana.jpg" },
        { title: "Love Will Tear Us Apart", artist: "Joy Division", cover: "amigos/1/musica/img/joy.jpg" },
        { title: "Alive", artist: "P.o.d", cover: "amigos/1/musica/img/pod.jpg" },
        { title: "Feel Good Inc", artist: "Gorillaz", cover: "amigos/1/musica/img/feel.jpg" },
        ],
    5: [
        { title: "Sacrilege", artist: "Yeah Yeah Yeahs", cover: "amigos/1/musica/img/sacrilege.jpg" },
        { title: "Girassóis de van gogh", artist: "Mari Froes", cover: "amigos/1/musica/img/maria.jpg" },
        { title: "Le long de la route", artist: "Zaz", cover: "amigos/1/musica/img/zaz.jpg" }
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


//boton cerrar detalles de playlist

function closePlaylistDetails() {
    const playlistDetails = document.getElementById("playlist-details");
    playlistDetails.style.display = "none";  // Ocultar la sección de detalles
    currentPlaylistId = null;  // Limpiar el ID de la playlist actual
}


//Reproduce la playlist 1 y redirecciona las otras a la pagina en construccion

function playPlaylist() {
    const redirectUrl = currentPlaylistId === 1
      ? "amigo1musica_reproductor.html"
      : "musica_reproductor_construccion2.html";
  
    window.location.href = redirectUrl;
  }

//----------------------------------------------------------------------------------------