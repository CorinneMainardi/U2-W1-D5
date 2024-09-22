document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const heroSection = document.querySelector(".hero");
  const heroHeight = heroSection.offsetHeight;
  const navButton = document.querySelector(".navButton");

  window.addEventListener("scroll", () => {
    const heroHeightNew = heroHeight - 100;
    if (window.scrollY >= heroHeightNew) {
      header.id = "scroll";
      navButton.id = "navButton";
    } else {
      header.id = "";
      navButton.id = "";
    }
  });
});
