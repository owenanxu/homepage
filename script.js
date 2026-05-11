// Smooth scrolling when clicking navigation links
document.querySelectorAll('nav a[href^="#"]:not([href="#"])').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}
