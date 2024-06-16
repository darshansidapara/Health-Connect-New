/******************* toggle icon navbar ****************/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
  header.classList.toggle("scroll", navbar.classList.contains("active"));
};

/******************* scroll section active link ****************/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let removenav = document.querySelectorAll("section");

navLinks.forEach((links) => {
  links.onclick = () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      menuIcon.classList.toggle("fa-xmark");
    }
  };
});

removenav.forEach((links) => {
  links.onclick = () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      menuIcon.classList.toggle("fa-xmark");
    }
  };
});

navLinks.onclick = () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  }
};
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /******************* sticky navbar ****************/
  header.classList.toggle("sticky", window.scrollY > 100);
  header.classList.toggle("scroll", navbar.classList.contains("active"));
};

/****************** scroll reveal ****************/
// eslint-disable-next-line no-undef
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

// eslint-disable-next-line no-undef
ScrollReveal().reveal(".home-content, heading, .search-content, .controls", {
  origin: "top",
});
// eslint-disable-next-line no-undef
ScrollReveal().reveal(
  ".home-img,  .portfolio-box, .meditation-img, .container",
  {
    origin: "bottom",
  }
);
// eslint-disable-next-line no-undef
ScrollReveal().reveal(
  ".home-content h1, .calories-img, .diet-planner-container, .meditation-container",
  {
    origin: "left",
  }
);
// eslint-disable-next-line no-undef
ScrollReveal().reveal(".home-contact p, .about-content, .contact form", {
  origin: "top",
});

/******************* typed js *****************/

// eslint-disable-next-line no-undef
const typed = new Typed(".multi-text", {
  strings: ["Well-Being", "Health", "Diagnosis", "Mental Health"],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1200,
  loop: true,
});

/**************** breathing exercise JS **************/

const container = document.getElementById("container");
const text = document.getElementById("text");

const totaltime = 7400;
const breathTime = (totaltime / 5) * 2;
const holdTime = totaltime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totaltime);
