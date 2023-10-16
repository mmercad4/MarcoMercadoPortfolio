const hamburger = document.getElementById("hamburger");
const displayNav = () => {
  const navLinks = document.querySelector(".nav__links");
  const navHyperLinks = document.querySelector(".nav__hyperlinks");
  const imageContainer = document.querySelector(".nav__image-container");
  const nameContainer = document.querySelector(".nav__name");
  const nav = document.querySelector(".nav");

  navLinks.style.display =
    navLinks.style.display === "block" ? "none" : "block";
  navHyperLinks.style.display =
    navHyperLinks.style.display === "block" ? "none" : "block";
  imageContainer.style.display =
    imageContainer.style.display === "block" ? "none" : "block";
  nameContainer.style.display =
    nameContainer.style.display === "block" ? "none" : "block";
  nav.style.height = nav.style.height === "100vh" ? "0vh" : "100vh";

  console.log(nav.style.height);
};

hamburger.addEventListener("click", displayNav);
