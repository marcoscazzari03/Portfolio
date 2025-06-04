document.addEventListener("DOMContentLoaded", () => {
  const myButton = document.getElementById("gotop");
  const navbar = document.querySelector("nav");

  // Gestisce la visibilità del bottone "Go to Top"
  function toggleGoTopButton() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 20) {
      myButton.classList.add("show");
    } else {
      myButton.classList.remove("show");
    }
  }

  // Ascolta lo scroll della pagina
  window.addEventListener("scroll", toggleGoTopButton);

  // (Opzionale) Scroll verso l'alto al click del bottone
  myButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});