// Función para mostrar los detalles de la playlist al hacer clic
function showPlaylist(playlistId) {
    const detailsContainer = document.getElementById('playlist-details');
    const playlistName = document.getElementById('playlist-name');
    const playlistCount = document.getElementById('playlist-count');
    const songsList = document.getElementById('songs-list');

    // Simulación de canciones para la demo
    const songs = [
        { title: 'Song 1', artist: 'Artist 1' },
        { title: 'Song 2', artist: 'Artist 2' },
        { title: 'Song 3', artist: 'Artist 3' },
        { title: 'Song 4', artist: 'Artist 4' },
        { title: 'Song 5', artist: 'Artist 5' },
        { title: 'Song 6', artist: 'Artist 6' }
    ];

    // Actualiza el nombre de la playlist y la cantidad de canciones
    playlistName.textContent = `Playlist ${playlistId}`;
    playlistCount.textContent = `${songs.length} tracks`;

    // Limpia la lista de canciones y agrega las canciones de la playlist
    songsList.innerHTML = '';
    songs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.innerHTML = `
            <img src="img/song-cover.jpg" alt="Song Cover">
            <div>
                <p><strong>${song.title}</strong></p>
                <p>${song.artist}</p>
            </div>
        `;
        songsList.appendChild(songItem);
    });

    // Muestra los detalles
    detailsContainer.style.display = 'block';
}

// Función para cerrar los detalles de la playlist
function closePlaylistDetails() {
    const detailsContainer = document.getElementById('playlist-details');
    detailsContainer.style.display = 'none';
}

function showModifyPlaylistModal() {
    const modifyPlaylistModal = document.getElementById('modify-playlist-modal');
    modifyPlaylistModal.style.display = 'block';
}

