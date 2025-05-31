document.addEventListener('DOMContentLoaded', () => {
  /* ———————————
     1) Menu hamburger (inchangé)
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
     2) Accordéon FAQ (inchangé, pour index.html)
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
     3) Fiches détaillées pour les services
     ——————————— */
  const services = document.querySelectorAll('.dashboard-service');
  const detailContainer = document.getElementById('service-detail-container');

  // HTML des différentes fiches, selon data-service
  const serviceForms = {
    distribution: `
      <div class="service-detail-card">
        <h3><i class="fas fa-globe icon-color"></i> Distribution Digitale</h3>
        <form class="distribution-form" style="margin-top: 20px;">
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="track-title">
              <i class="fas fa-music icon-color"></i> Titre de la chanson
            </label>
            <input type="text" id="track-title" name="track-title" placeholder="Entrez le titre" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-name">
              <i class="fas fa-user icon-color"></i> Nom de l'artiste
            </label>
            <input type="text" id="artist-name" name="artist-name" placeholder="Nom de l'artiste" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="album-name">
              <i class="fas fa-compact-disc icon-color"></i> Nom de l'album
            </label>
            <input type="text" id="album-name" name="album-name" placeholder="Nom de l'album (facultatif)" style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="genre">
              <i class="fas fa-music icon-color"></i> Style / Genre
            </label>
            <input type="text" id="genre" name="genre" placeholder="Ex : Pop, Hip-Hop…" style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="language">
              <i class="fas fa-language icon-color"></i> Langue
            </label>
            <input type="text" id="language" name="language" placeholder="Ex : Français, Anglais…" style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="cover-art">
              <i class="fas fa-image icon-color"></i> Photo de l'album
            </label>
            <input type="file" id="cover-art" name="cover-art" accept="image/*" style="width: 100%;" />
          </div>
          <button type="submit" class="primary-button">Distribuer</button>
        </form>
      </div>
    `,
    reservation: `
      <div class="service-detail-card">
        <h3><i class="fas fa-microphone-alt icon-color"></i> Réservation Studio</h3>
        <form class="booking-form" style="margin-top: 20px;">
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-booking-name">
              <i class="fas fa-user icon-color"></i> Nom de l'artiste
            </label>
            <input type="text" id="artist-booking-name" name="artist-booking-name" placeholder="Votre nom" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="contact-email">
              <i class="fas fa-envelope icon-color"></i> Email
            </label>
            <input type="email" id="contact-email" name="contact-email" placeholder="Votre email" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="booking-date">
              <i class="fas fa-calendar-alt icon-color"></i> Date souhaitée
            </label>
            <input type="date" id="booking-date" name="booking-date" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="booking-time">
              <i class="fas fa-clock icon-color"></i> Heure souhaitée
            </label>
            <input type="time" id="booking-time" name="booking-time" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="booking-notes">
              <i class="fas fa-comment icon-color"></i> Commentaires
            </label>
            <textarea id="booking-notes" name="booking-notes" rows="3" placeholder="Ex : J'aimerais enregistrer un single…" style="width: 100%; padding: 8px;"></textarea>
          </div>
          <button type="submit" class="primary-button">Prendre Rendez-vous</button>
        </form>
      </div>
    `,
    accompagnement: `
      <div class="service-detail-card">
        <h3><i class="fas fa-users icon-color"></i> Accompagnement Artistique</h3>
        <form class="apply-form" style="margin-top: 20px;">
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-accomp-name">
              <i class="fas fa-user icon-color"></i> Nom de l'artiste
            </label>
            <input type="text" id="artist-accomp-name" name="artist-accomp-name" placeholder="Votre nom" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-accomp-email">
              <i class="fas fa-envelope icon-color"></i> Email
            </label>
            <input type="email" id="artist-accomp-email" name="artist-accomp-email" placeholder="Votre email" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-accomp-experience">
              <i class="fas fa-info icon-color"></i> Votre expérience
            </label>
            <textarea id="artist-accomp-experience" name="artist-accomp-experience" rows="3" placeholder="Quelques mots sur vous…" style="width: 100%; padding: 8px;"></textarea>
          </div>
          <button type="submit" class="primary-button">Postuler</button>
        </form>
      </div>
    `,
    audiovisuel: `
      <div class="service-detail-card">
        <h3><i class="fas fa-camera-retro icon-color"></i> Production Audiovisuelle</h3>
        <form class="apply-form" style="margin-top: 20px;">
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-audio-name">
              <i class="fas fa-user icon-color"></i> Nom de l'artiste
            </label>
            <input type="text" id="artist-audio-name" name="artist-audio-name" placeholder="Votre nom" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-audio-email">
              <i class="fas fa-envelope icon-color"></i> Email
            </label>
            <input type="email" id="artist-audio-email" name="artist-audio-email" placeholder="Votre email" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-audio-needs">
              <i class="fas fa-pencil-alt icon-color"></i> Besoins spécifiques
            </label>
            <textarea id="artist-audio-needs" name="artist-audio-needs" rows="3" placeholder="Ex : Je veux un clip de 2 min…" style="width: 100%; padding: 8px;"></textarea>
          </div>
          <button type="submit" class="primary-button">Je suis intéressé</button>
        </form>
      </div>
    `,
    droits: `
      <div class="service-detail-card">
        <h3><i class="fas fa-scroll icon-color"></i> Gestion des Droits</h3>
        <form class="apply-form" style="margin-top: 20px;">
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-rights-name">
              <i class="fas fa-user icon-color"></i> Nom de l'artiste
            </label>
            <input type="text" id="artist-rights-name" name="artist-rights-name" placeholder="Votre nom" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-rights-email">
              <i class="fas fa-envelope icon-color"></i> Email
            </label>
            <input type="email" id="artist-rights-email" name="artist-rights-email" placeholder="Votre email" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-rights-details">
              <i class="fas fa-info icon-color"></i> Détails sur vos droits
            </label>
            <textarea id="artist-rights-details" name="artist-rights-details" rows="3" placeholder="Ex : Je souhaite enregistrer mes droits SACEM…" style="width: 100%; padding: 8px;"></textarea>
          </div>
          <button type="submit" class="primary-button">Je suis intéressé</button>
        </form>
      </div>
    `,
    carriere: `
      <div class="service-detail-card">
        <h3><i class="fas fa-project-diagram icon-color"></i> Stratégie de Carrière</h3>
        <form class="apply-form" style="margin-top: 20px;">
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-carriere-name">
              <i class="fas fa-user icon-color"></i> Nom de l'artiste
            </label>
            <input type="text" id="artist-carriere-name" name="artist-carriere-name" placeholder="Votre nom" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-carriere-email">
              <i class="fas fa-envelope icon-color"></i> Email
            </label>
            <input type="email" id="artist-carriere-email" name="artist-carriere-email" placeholder="Votre email" required style="width: 100%; padding: 8px;" />
          </div>
          <div class="form-group" style="margin-bottom: 15px;">
            <label for="artist-carriere-goals">
              <i class="fas fa-bullseye icon-color"></i> Objectifs de carrière
            </label>
            <textarea id="artist-carriere-goals" name="artist-carriere-goals" rows="3" placeholder="Ex : Objectif 2025 : sortir un album…" style="width: 100%; padding: 8px;"></textarea>
          </div>
          <button type="submit" class="primary-button">Je suis intéressé</button>
        </form>
      </div>
    `
  };

  // Au clic sur une carte, injecter la fiche correspondante
  services.forEach((service) => {
    service.addEventListener('click', () => {
      const clé = service.getAttribute('data-service');
      detailContainer.innerHTML = serviceForms[clé] || '';
      detailContainer.scrollIntoView({ behavior: 'smooth' });
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