const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const lines = document.querySelectorAll(".line");
const links = document.querySelectorAll(".nav-links li");

const signatureColor = () => {
  if (navLinks.classList.contains("open")) {
    logo.setAttribute("src", "assets/kiernanSignature200.png");
  } else {
    logo.setAttribute("src", "assets/kiernanSignatureWhite.png");
  }
}

const burgerColor = () => {
  if (navLinks.classList.contains("open")) {
    lines.forEach(line => {
      line.classList.remove("light-line");
    });
  } else {
    lines.forEach(line => {
      line.classList.add("light-line");
    });
  }
}

const toggleScreen = () => {
  signatureColor();
  burgerColor();
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
}

hamburger.addEventListener("click", toggleScreen);
links.forEach(link => {
  link.addEventListener("click", toggleScreen);
})