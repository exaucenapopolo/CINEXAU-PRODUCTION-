document.addEventListener('DOMContentLoaded', () => {
  /* ———————————
     1) Accordéon FAQ (inchangé, reste pour index.html)
     ——————————— */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    const answerDiv   = item.querySelector('.faq-answer');
    const icon        = item.querySelector('.toggle-icon');

    questionBtn.addEventListener('click', () => {
      faqItems.forEach((other) => {
        if (other !== item) {
          other.querySelector('.faq-answer').style.display = 'none';
          other.querySelector('.toggle-icon').classList.remove('rotated');
        }
      });

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
     2) Menu hamburger (mobile) (inchangé)
     ——————————— */
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const navLinks      = document.getElementById('nav-links');

  if (hamburgerIcon && navLinks) {
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
  }

  /* ———————————
     3) Affichage / masquage des détails de chaque service
     ——————————— */
  const services = document.querySelectorAll('.dashboard-service');

  services.forEach((service) => {
    const header = service.querySelector('.service-header');
    const detail = service.querySelector('.service-detail');

    // Masquer tous les détails au démarrage
    if (detail) {
      detail.style.display = 'none';
    }

    header.addEventListener('click', () => {
      // Fermer tous les autres détails
      services.forEach((other) => {
        if (other !== service) {
          const otherDetail = other.querySelector('.service-detail');
          if (otherDetail) {
            otherDetail.style.display = 'none';
          }
        }
      });

      // Basculer le détail courant
      if (detail.style.display === 'block') {
        detail.style.display = 'none';
      } else {
        detail.style.display = 'block';
      }
    });
  });

  /* ———————————
     4) Génération dynamique des nuages (inchangé)
     ——————————— */
  const backgroundAnimation = document.querySelector('.background-animation');
  const numClouds = 5;

  function createCloud() {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');

    const size = Math.random() * 100 + 80;
    cloud.style.width = `${size}px`;
    cloud.style.height = `${size * 0.4}px`;

    const topPosition = Math.random() * 80;
    cloud.style.top = `${topPosition}%`;

    const startLeft = -20 - Math.random() * 30;
    cloud.style.left = `${startLeft}%`;

    const duration = Math.random() * 60 + 40;
    cloud.style.animationDuration = `${duration}s`;

    const delay = Math.random() * 30;
    cloud.style.animationDelay = `${delay}s`;

    cloud.style.setProperty('--width', `${size}px`);
    const scaleFactor = Math.random() * 0.4 + 0.8;
    cloud.style.setProperty('--scale', scaleFactor);

    backgroundAnimation.appendChild(cloud);
  }

  for (let i = 0; i < numClouds; i++) {
    createCloud();
  }
});