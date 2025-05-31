document.addEventListener('DOMContentLoaded', () => {
    const backgroundAnimation = document.querySelector('.background-animation');
    const numClouds = 5; // Nombre de nuages à générer

    function createCloud() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        
        // Taille et position aléatoires
        const size = Math.random() * 100 + 80; // entre 80px et 180px
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size * 0.4}px`; // les nuages sont plus larges que hauts
        
        const top = Math.random() * 80; // Position verticale aléatoire
        cloud.style.top = `${top}%`;
        
        // Commencer les nuages en dehors de l'écran à gauche
        const startLeft = -20 - (Math.random() * 30); // Entre -20% et -50%
        cloud.style.left = `${startLeft}%`;

        // Durée et délai d'animation aléatoires
        const duration = Math.random() * 60 + 40; // entre 40s et 100s
        cloud.style.animationDuration = `${duration}s`;
        const delay = Math.random() * 30; // Délai de démarrage aléatoire
        cloud.style.animationDelay = `${delay}s`;

        // Appliquer la variable CSS pour la largeur du nuage dans l'animation
        cloud.style.setProperty('--width', `${size}px`);

        backgroundAnimation.appendChild(cloud);
    }

    for (let i = 0; i < numClouds; i++) {
        createCloud();
    }
});
