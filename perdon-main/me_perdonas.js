document.addEventListener('DOMContentLoaded', () => {
    const siButton = document.getElementById('Si');
    const noButton = document.getElementById('No');
    const questionText = document.getElementById('question');
    const confettiCanvas = document.getElementById('confetti-canvas');

    noButton.addEventListener('mouseenter', () => {
        const container = noButton.parentElement.parentElement;
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const newTop = Math.random() * (containerRect.height - buttonRect.height);
        const newLeft = Math.random() * (containerRect.width - buttonRect.width);

        noButton.style.position = 'absolute';
        noButton.style.top = `${newTop}px`;
        noButton.style.left = `${newLeft}px`;

        // Incrementar tamaño del botón "Sí"
        const currentSize = parseInt(window.getComputedStyle(siButton).fontSize);
        siButton.style.fontSize = `${currentSize + 2}px`;
        siButton.style.padding = `${parseInt(window.getComputedStyle(siButton).paddingTop) + 2}px ${parseInt(window.getComputedStyle(siButton).paddingLeft) + 2}px`;
    });

    siButton.addEventListener('click', () => {
        questionText.textContent = 'Me gusta molestarte hermosa 💕';
        siButton.style.display = 'none';
        noButton.style.display = 'none';

        confettiCanvas.style.display = 'block';
        confettiCanvas.style.position = 'fixed';
        confettiCanvas.style.top = '0';
        confettiCanvas.style.left = '0';
        confettiCanvas.style.width = '100%';
        confettiCanvas.style.height = '100%';

        confetti({
            particleCount: 200,
            spread: 60,
            origin: { y: 0.6 }
        });
    });
});
