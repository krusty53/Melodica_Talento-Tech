const canciones = document.querySelectorAll('.cancion'); // Seleccionamos todos los divs con la clase "cancion"

canciones.forEach(cancion => {
  cancion.addEventListener('click', () => {
    window.location.href = 'musica.html';
  });
});