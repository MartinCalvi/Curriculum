
   /* document.addEventListener('DOMContentLoaded', (event) => {
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
*/

    document.addEventListener('DOMContentLoaded', (event) => {
        const audio = document.getElementById('background-audio');
        const playButton = document.getElementById('play-button');
        const pauseButton = document.getElementById('pause-button');

        // Escucha el clic en el botón de "Reproducir"
        playButton.addEventListener('click', () => {
            audio.play()
                .then(() => {
                    console.log('Música iniciada correctamente.');
                    playButton.style.display = 'none'; // Oculta el botón de reproducir
                    pauseButton.style.display = 'inline-block'; // Muestra el botón de pausa
                })
                .catch(error => {
                    console.error('Error al intentar reproducir la música:', error);
                });
        });

        // Escucha el clic en el botón de "Pausar"
        pauseButton.addEventListener('click', () => {
            audio.pause();
            console.log('Música pausada.');
            playButton.style.display = 'inline-block'; // Vuelve a mostrar el botón de reproducir
            pauseButton.style.display = 'none'; // Oculta el botón de pausa
        });

        // Oculta el botón de pausa al inicio
        pauseButton.style.display = 'none';
    });
