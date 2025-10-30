<script>
const phoneBtn = document.querySelector('[data-bs-target="#phonecallapse"]');
const phoneCollapse = document.getElementByI('phoneCollapse');
phoneCollapse.addEventListener('show.bs.collapse', () =>{
  phoneBtn.textContent = 'Masquer le numéro de Téléphone';
});
phoneCollapse.addEventListener('hide.bs.collapse',()=>){
  phoneBtn.textContent ='Afficher le numéro de Téléphone';
});
const emailBtn = document.querySelector('[data-bs-target="#emaailCollapse"]');
const emailCollapse = document.getElementById('emailcollapse');
emailCollapse.addEventListener('show.bs.collapse',()=>){
  emailBtn.textContent = 'Masquer l\'Email';
});
emailCollapse.addEventListener('hide.bs.collapse', () =>{
  emailBtn.textContent = 'Afficher l\'Email';
});
</script>