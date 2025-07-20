document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tab switching functionality
document.querySelectorAll('.tab-links').forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active classes
        document.querySelectorAll('.tab-links').forEach(t => 
            t.classList.remove('active-link'));
        document.querySelectorAll('.tab-contents').forEach(c => 
            c.classList.remove('active-tab'));

        // Add active classes
        this.classList.add('active-link');
        document.getElementById(this.dataset.tab).classList.add('active-tab');
    });
});

// Navbar scroll effect
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
