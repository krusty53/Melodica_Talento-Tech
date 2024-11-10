// Playlist Data (example)
const playlists = {
    1: [
        { title: "Song 1", artist: "Artist 1", cover: "img/song1.jpg" },
        { title: "Song 2", artist: "Artist 2", cover: "img/song2.jpg" },
        { title: "Song 3", artist: "Artist 3", cover: "img/song3.jpg" },
        { title: "Song 4", artist: "Artist 4", cover: "img/song4.jpg" },
        { title: "Song 5", artist: "Artist 5", cover: "img/song5.jpg" },
        { title: "Song 6", artist: "Artist 6", cover: "img/song6.jpg" }
    ],
    2: [
        { title: "Song A", artist: "Artist A", cover: "img/songA.jpg" },
        { title: "Song B", artist: "Artist B", cover: "img/songB.jpg" }
    ],
    // More playlists can be added here
};

// Show playlist details
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
}

// Show Add Playlist Modal
function showAddPlaylistModal() {
    document.getElementById("add-playlist-modal").style.display = "block";
}

// Close Add Playlist Modal
function closeAddPlaylistModal() {
    document.getElementById("add-playlist-modal").style.display = "none";
}

// Add new Playlist
function addNewPlaylist() {
    const playlistName = document.getElementById("newPlaylistName").value;
    
    if (playlistName.trim() === "") {
        alert("Please enter a valid playlist name.");
        return;
    }

    const newPlaylistId = Object.keys(playlists).length + 1;
    playlists[newPlaylistId] = []; // Create an empty playlist

    alert(`New playlist "${playlistName}" created successfully!`);
    closeAddPlaylistModal();
}

// Show Modify Playlist Modal (Add Song to Playlist)
function showModifyPlaylistModal() {
    document.getElementById("modify-playlist-modal").style.display = "block";
}

// Close Modify Playlist Modal
function closeModifyPlaylistModal() {
    document.getElementById("modify-playlist-modal").style.display = "none";
}

// Add Song to Playlist
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

    const playlistId = 1; // Example, change it dynamically based on your requirement
    playlists[playlistId].push(song);

    alert(`Song "${songTitle}" added to Playlist ${playlistId}`);
    closeModifyPlaylistModal();
}
