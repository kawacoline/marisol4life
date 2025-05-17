// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Podrías agregar funcionalidades como:
    // - Smooth scroll para enlaces internos (si añades un menú de navegación fijo)
    // - Animaciones al hacer scroll
    // - Validaciones de formularios (si añades alguno)

    // Ejemplo: Log a consola para confirmar que el script se cargó.
    console.log("Landing page de Marisol Meléndez cargada.");

    // Ejemplo de smooth scroll para enlaces que apuntan a secciones (si los tuvieras en un menú)
    // Supongamos que tienes enlaces con la clase .nav-link que apuntan a secciones como #products
    /*
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Ajusta el offset si tienes un header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
    */
});