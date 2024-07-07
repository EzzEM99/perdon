const card = document.querySelector('.card');

card.addEventListener('click', function() {
  this.classList.toggle('is-flipped');
  
  const message = document.getElementById('message');
  
  if (message.textContent === 'hola abrilc1ta') {
    message.textContent = 'chau abrilc1ta';
  } else {
    message.textContent = 'hola abrilc1ta';
  }
  
  message.style.opacity = 1;
  setTimeout(() => {
    message.style.opacity = 0;
  }, 2000);
});
