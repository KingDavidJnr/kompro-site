// Set the footer year from the browser's current date.
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile hamburger menu.
var navToggle = document.querySelector('.nav-toggle');
var navEl = document.getElementById('nav');
if (navToggle && navEl) {
  navToggle.addEventListener('click', function () {
    var open = navEl.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navEl.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navEl.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll reveal animations for each section.
var revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function (el) { io.observe(el); });
} else {
  revealEls.forEach(function (el) { el.classList.add('in-view'); });
}
