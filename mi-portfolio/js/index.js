function zoomCarousel(containerId) {
    const container = document.getElementById(containerId);

    // Comprobar si el contenedor ya está "zoomed"
    if (container.classList.contains("zoomed")) {
        // Vuelve al tamaño normal
        container.classList.remove("zoomed");
    } else {
        // Quitar el zoom de otros contenedores si es necesario
        const allContainers = document.querySelectorAll('.carousel-container');
        allContainers.forEach(c => c.classList.remove("zoomed")); // Vuelve a su tamaño normal
        
        // Aplicar zoom al contenedor seleccionado
        container.classList.add("zoomed"); // Añade la clase zoomed
    }
}
