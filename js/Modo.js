const toggleButton = document.getElementById('toggle-theme');
const body = document.body;
const themeIcon = toggleButton.querySelector('img'); 

toggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    themeIcon.src = 'img/lun.png';
  } else {
    // Si el tema es oscuro, mostramos el sol
    themeIcon.src = 'img/Sol.png'; // Cambia la imagen a Sol
  }
});
