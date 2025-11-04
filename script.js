
document.addEventListener("DOMContentLoaded", () => {
  const phoneBtn = document.querySelector('[data-bs-target="#phoneCollapse"]');
  const phoneCollapse = document.getElementById('phoneCollapse');

  if (phoneBtn && phoneCollapse) {
    phoneCollapse.addEventListener('show.bs.collapse', () => {
      phoneBtn.textContent = 'Masquer mon numéro de Téléphone';
    });

    phoneCollapse.addEventListener('hide.bs.collapse', () => {
      phoneBtn.textContent = 'Afficher mon numéro de Téléphone';
    });
  }

  const emailBtn = document.querySelector('[data-bs-target="#emailCollapse"]');
  const emailCollapse = document.getElementById('emailCollapse');

  if (emailBtn && emailCollapse) {
    emailCollapse.addEventListener('show.bs.collapse', () => {
      emailBtn.textContent = 'Masquer mon Email';
    });

    emailCollapse.addEventListener('hide.bs.collapse', () => {
      emailBtn.textContent = 'Afficher  mon Email';
    });
  }
});


