const roles = ["web developer", "web designer", "seo specialist", "programmatore"];
const typingText = document.querySelector(".typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  const visibleText = currentRole.substring(0, charIndex);

  typingText.textContent = visibleText;

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typeEffect, 800);
  }
}

typeEffect();

//navbar
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

//Bottone gotop
const mybutton = document.getElementById("gotop");
const navbar = document.querySelector("nav");

function scrollFunction() {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const isDesktop = window.innerWidth >= 1024;

  // Mostra o nasconde il bottone "go to top"
  if (scrollTop > 20) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }

  // Gestisci la navbar normale visibilità (nascondila se scrolli > 0 su tutti i dispositivi tranne PC)
  if (scrollTop > 0 && !isDesktop) {
    navbar.classList.add("hidden-normal");
  } else {
    navbar.classList.remove("hidden-normal");
  }

  // Aggiunge o rimuove la classe "scrolled" solo su desktop
  if (scrollTop > 50 && isDesktop) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Scroll verso l'alto al click del bottone
mybutton.addEventListener("click", function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Altri browser
});

// Listener per lo scroll
window.onscroll = scrollFunction;
// Listener per resize finestra
window.onresize = handleResize;