
document.addEventListener("DOMContentLoaded", () => {
  const phoneBtn = document.querySelector('[data-bs-target="#phoneCollapse"]');
  const phoneCollapse = document.getElementById('phoneCollapse');

  if (phoneBtn && phoneCollapse) {
    phoneCollapse.addEventListener('show.bs.collapse', () => {
      phoneBtn.textContent = 'Masquer le numéro de Téléphone';
    });

    phoneCollapse.addEventListener('hide.bs.collapse', () => {
      phoneBtn.textContent = 'Afficher le numéro de Téléphone';
    });
  }

  const emailBtn = document.querySelector('[data-bs-target="#emailCollapse"]');
  const emailCollapse = document.getElementById('emailCollapse');

  if (emailBtn && emailCollapse) {
    emailCollapse.addEventListener('show.bs.collapse', () => {
      emailBtn.textContent = 'Masquer l\'Email';
    });

    emailCollapse.addEventListener('hide.bs.collapse', () => {
      emailBtn.textContent = 'Afficher  l\'Email';
    });
  }
});

