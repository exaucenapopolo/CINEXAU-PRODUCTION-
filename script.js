document.addEventListener('DOMContentLoaded', () => {
  /* ———————————
     1) Accordéon FAQ
     ——————————— */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    const answerDiv   = item.querySelector('.faq-answer');
    const icon        = item.querySelector('.toggle-icon');

    questionBtn.addEventListener('click', () => {
      /* Fermer toutes les autres réponses ouvertes */
      faqItems.forEach((other) => {
        if (other !== item) {
          other.querySelector('.faq-answer').style.display = 'none';
          other.querySelector('.toggle-icon').classList.remove('rotated');
        }
      });

      /* Basculer l’affichage de la réponse courante */
      if (answerDiv.style.display === 'block') {
        answerDiv.style.display = 'none';
        icon.classList.remove('rotated');
      } else {
        answerDiv.style.display = 'block';
        icon.classList.add('rotated');
      }
    });
  });

  /* ———————————
     2) Menu hamburger (mobile)
     ——————————— */
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const navLinks      = document.getElementById('nav-links');

  hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (
      !navLinks.contains(event.target) &&
      !hamburgerIcon.contains(event.target)
    ) {
      navLinks.classList.remove('active');
    }
  });

  /* ———————————
     3) Génération dynamique des nuages
     ——————————— */
  const backgroundAnimation = document.querySelector('.background-animation');
  const numClouds = 5; // Nombre de nuages à générer

  function createCloud() {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');

    // Taille aléatoire entre 80px et 180px
    const size = Math.random() * 100 + 80;
    cloud.style.width = `${size}px`;
    cloud.style.height = `${size * 0.4}px`;

    // Position verticale aléatoire (0% → 80%)
    const topPosition = Math.random() * 80;
    cloud.style.top = `${topPosition}%`;

    // Commencer hors de l'écran à gauche (entre -20% et -50%)
    const startLeft = -20 - Math.random() * 30;
    cloud.style.left = `${startLeft}%`;

    // Durée d’animation aléatoire entre 40s et 100s
    const duration = Math.random() * 60 + 40;
    cloud.style.animationDuration = `${duration}s`;

    // Délai de démarrage aléatoire entre 0s et 30s
    const delay = Math.random() * 30;
    cloud.style.animationDelay = `${delay}s`;

    // Passer la largeur au keyframe
    cloud.style.setProperty('--width', `${size}px`);

    // Facteur d’échelle aléatoire 0.8 → 1.2
    const scaleFactor = Math.random() * 0.4 + 0.8;
    cloud.style.setProperty('--scale', scaleFactor);

    backgroundAnimation.appendChild(cloud);
  }

  for (let i = 0; i < numClouds; i++) {
    createCloud();
  }
});