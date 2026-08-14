  document.getElementById('year').textContent = new Date().getFullYear();

  // Header scroll state
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  navToggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', open);
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  }));

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el => io.observe(el));

  // Contact form -> mailto
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const anliegen = document.getElementById('anliegen').value;
    const nachricht = document.getElementById('nachricht').value;
    const subject = encodeURIComponent('Anfrage über Website: ' + anliegen);
    const body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'E-Mail: ' + email + '\n' +
      'Anliegen: ' + anliegen + '\n\n' +
      nachricht
    );
    window.location.href = 'mailto:perscraftde@gmail.com?subject=' + subject + '&body=' + body;
  });
