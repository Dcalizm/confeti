// JavaScript para manejar la lógica de los botones

document.getElementById('Si').addEventListener('click', function() {
    // Ocultar el contenido principal
    document.getElementById('content').style.display = 'none';
    // Mostrar el mensaje de la serpiente
    document.getElementById('snake').style.display = 'block';
    // Lluvia de confeti
    launchConfetti();
});

document.getElementById('No').addEventListener('mouseover', function() {
    moveButton();
});

function moveButton() {
    const button = document.getElementById('No');
    const container = button.parentElement;

    // Obtener el tamaño del contenedor y el botón
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calcular nuevas posiciones para el botón
    const newLeft = Math.random() * (containerRect.width - buttonRect.width);
    const newTop = Math.random() * (containerRect.height - buttonRect.height);

    // Aplicar nuevas posiciones al botón
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
}

// Mover el botón "No" constantemente
setInterval(moveButton, 1000);

// Función para lanzar confeti
function launchConfetti() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;
    const canvas = document.getElementById('confetti-canvas');
    const myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true
    });

    (function frame() {
        myConfetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        myConfetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
