// ==========================
// SMOOTH SCROLL ACTIVE NAVIGATION
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document.querySelectorAll(".section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// ==========================
// TYPING EFFECT
// ==========================

const typingElement = document.querySelector(".hero h3");

const texts = ["Full Stack Developer", "Web Application Developer"];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (!deleting) {
    typingElement.textContent = currentText.substring(0, charIndex++);
  } else {
    typingElement.textContent = currentText.substring(0, charIndex--);
  }

  let speed = deleting ? 50 : 100;

  if (!deleting && charIndex === currentText.length + 1) {
    deleting = true;
    speed = 1500;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    textIndex++;

    if (textIndex >= texts.length) {
      textIndex = 0;
    }
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

// ==========================
// LOADING ANIMATION
// ==========================

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ==========================
// PROJECT CARD HOVER EFFECT
// ==========================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(59,130,246,.25),
        #1e293b 60%)
        `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "#1e293b";
  });
});

// ==========================
// NAVBAR SHADOW
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
  } else {
    header.style.boxShadow = "none";
  }
});

// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;

      const target = +counter.dataset.target;

      let count = 0;

      const speed = target / 100;

      const update = () => {
        count += speed;

        if (count < target) {
          counter.innerText = Math.ceil(count);

          requestAnimationFrame(update);
        } else {
          counter.innerText = target + "+";
        }
      };

      update();

      counterObserver.unobserve(counter);
    }
  });
});

counters.forEach((counter) => counterObserver.observe(counter));
