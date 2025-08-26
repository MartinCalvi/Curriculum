
    document.addEventListener('DOMContentLoaded', (event) => {
        const audio = document.getElementById('background-audio');
        const button = document.getElementById('play-button');

        button.addEventListener('click', () => {
            audio.play()
                .then(() => {
                    console.log('Música iniciada correctamente.');
                    // Opcional: puedes ocultar el botón después de que la música empiece
                    button.style.display = 'none';
                })
                .catch(error => {
                    console.error('Error al intentar reproducir la música:', error);
                });
        });
    });
