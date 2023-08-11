// data theme
const themeSelect = document.getElementById("theme-select");

themeSelect.addEventListener('change', (event) => {
    const theme = event.target.value;

    document.body.classList.add('animate-all');
    document.documentElement.setAttribute('data-bs-theme', theme);
     // Almacenar preferencia
    localStorage.setItem('theme', theme);
    //animacion
    setTimeout(_ => document.body.classList.remove('animate-all'), 500);
});

// Recuperar la preferencia del tema del almacenamiento local
const preferenciaTema = localStorage.getItem('theme');

// Aplicar la preferencia del tema si está almacenada
if (preferenciaTema) {
    document.documentElement.setAttribute('data-bs-theme', preferenciaTema);
}
