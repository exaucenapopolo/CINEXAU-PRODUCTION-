document.addEventListener('DOMContentLoaded', () => {
    const backgroundAnimation = document.querySelector('.background-animation');
    const numClouds = 5; // Nombre de nuages à générer

    function createCloud() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        
        // Taille et position aléatoires
        const size = Math.random() * 100 + 80;            // entre 80px et 180px
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size * 0.4}px`;           // nuages plus larges que hauts
        
        const topPosition = Math.random() * 80;           // Position verticale entre 0% et 80%
        cloud.style.top = `${topPosition}%`;
        
        // Commencer les nuages en dehors de l'écran à gauche
        const startLeft = -20 - (Math.random() * 30);      // Entre -20% et -50%
        cloud.style.left = `${startLeft}%`;

        // Durée et délai d'animation aléatoires
        const duration = Math.random() * 60 + 40;          // entre 40s et 100s
        cloud.style.animationDuration = `${duration}s`;
        const delay = Math.random() * 30;                  // Délai entre 0s et 30s
        cloud.style.animationDelay = `${delay}s`;

        // Transmettre la variable CSS pour la largeur dans l'animation
        cloud.style.setProperty('--width', `${size}px`);
        
        // Transmettre une échelle aléatoire (pour varier la taille)
        const scaleFactor = Math.random() * 0.4 + 0.8;     // entre 0.8 et 1.2
        cloud.style.setProperty('--scale', scaleFactor);

        backgroundAnimation.appendChild(cloud);
    }

    for (let i = 0; i < numClouds; i++) {
        createCloud();
    }
});