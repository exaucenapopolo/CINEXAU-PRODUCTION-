document.addEventListener('DOMContentLoaded', () => {
    // Sélectionnez tous les éléments que vous souhaitez animer
    // Par exemple, les sections, les titres, les paragraphes
    const animatedElements = document.querySelectorAll('#hero, #about, #featured-projects h2, #featured-projects .project-item, footer p');

    // Ajoutez la classe 'hidden' à tous les éléments au chargement
    animatedElements.forEach(element => {
        element.classList.add('hidden');
    });

    // Fonction pour vérifier si un élément est dans la vue
    const checkVisibility = () => {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            // Si le haut de l'élément est dans la vue et que le bas n'est pas encore sorti de la vue
            if (elementTop < window.innerHeight - 50 && elementBottom > 50) {
                element.classList.add('visible');
                element.classList.remove('hidden');
            } else {
                // Optionnel : si vous voulez qu'ils disparaissent en sortant de la vue
                // element.classList.remove('visible');
                // element.classList.add('hidden');
            }
        });
    };

    // Écoutez l'événement de scroll
    window.addEventListener('scroll', checkVisibility);

    // Vérifiez la visibilité une première fois au chargement de la page
    checkVisibility();
});
