document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const containerHh = document.querySelector(".containerHh");
  const heroSection = document.querySelector(".hero");
  const heroHeight = heroSection.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= heroHeight) {
      header.classList.add("scroll");
      containerHh.classList.add("scroll-background");
    } else {
      header.classList.remove("scroll");
      containerHh.classList.remove("scroll-background");
    }
  });
});
