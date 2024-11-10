document.getElementById('menu-icon').addEventListener('click', function() {
    toggleSidebar();
});

 function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const body = document.body;

        // Alternar la clase para abrir y cerrar la sidebar
        sidebar.classList.toggle('open');
        body.classList.toggle('sidebar-open');
    }

    // Cerrar la sidebar cuando se hace clic fuera de ella
    window.addEventListener('click', function(event) {
        const sidebar = document.getElementById('sidebar');
        const menuIcon = document.querySelector('.menu-icon');
        
        // Si se hace clic fuera de la sidebar y el ícono, cerramos la sidebar
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove('open');
            document.body.classList.remove('sidebar-open');
        }
    });
