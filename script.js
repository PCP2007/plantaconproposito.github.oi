        const panels = document.querySelectorAll('.panel');

        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                removeActiveClasses();
                panel.classList.add('active');
                
                // Manejar videos
                const video = panel.querySelector('video');
                if (video) {
                    // Pausar todos los otros videos
                    document.querySelectorAll('video').forEach(v => {
                        if (v !== video) {
                            v.pause();
                        }
                    });
                    // Reproducir el video del panel activo
                    video.play();
                }
            });
        });

        function removeActiveClasses() {
            panels.forEach(panel => {
                panel.classList.remove('active');
                // Pausar videos cuando se desactiva el panel
                const video = panel.querySelector('video');
                if (video) {
                    video.pause();
                }
            });
        }

        // Efecto de precarga suave
        document.addEventListener('DOMContentLoaded', function() {
            panels.forEach((panel, index) => {
                setTimeout(() => {
                    panel.style.opacity = '1';
                    panel.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });