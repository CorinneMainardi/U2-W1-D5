document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const heroSection = document.querySelector(".hero");
  const heroHeight = heroSection.offsetHeight;
  const navButton = document.querySelector(".navButton");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= heroHeight) {
      header.id = "scroll";
      navButton.id = "navButton";
    } else {
      header.id = "";
      navButton.id = "";
    }
  });
});
