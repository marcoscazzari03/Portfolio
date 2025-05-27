const roles = ["web developer", "web designer", "freelancer", "programmatore"];
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