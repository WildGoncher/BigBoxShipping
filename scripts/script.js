document.addEventListener("DOMContentLoaded", nav);
function nav() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");
  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !burger.contains(event.target)) {
      nav.classList.remove("show");
    }
  });
}

document.addEventListener("DOMContentLoaded", phone);
function phone() {
  const phoneBtn = document.getElementById("header-btn");
  phoneBtn.onmouseover = () => {
    phoneBtn.innerHTML = "8-800-250-28-42";
  };
  phoneBtn.onmouseout = () => {
    phoneBtn.innerHTML = "Позвонить";
  };
}


function mailTo() {
  const mailBtn = document.getElementById("headerMailBtn");
  mailBtn.onmouseover = () => {
    mailBtn.innerHTML = "info@bbship.ru";
  };
  mailBtn.onmouseout = () => {
    mailBtn.innerHTML = "Написать";
  };
}
document.addEventListener("DOMContentLoaded", mailTo);

//smooth scrolling
// Define your section IDs
const sectionIds = ['greetings', 'stages', 'containers', 'services', 'about'];
const sections = sectionIds.map(id => document.getElementById(id));

// Function to find the nearest section based on scroll direction
function findNearestSection(scrollDirection) {
    const visibleSection = sections.find(section =>
        section.getBoundingClientRect().top >= 0 &&
        section.getBoundingClientRect().bottom <= window.innerHeight
    );

    const visibleIndex = sections.indexOf(visibleSection);

    if (scrollDirection === 1) {
        // Scroll down: Go to the next section
        return (visibleIndex + 1) % sections.length;
    } else {
        // Scroll up: Go to the previous section
        return (visibleIndex - 1 + sections.length) % sections.length;
    }
}

// Smooth scroll function
function smoothScrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

// Listen for the wheel event
document.addEventListener('wheel', (event) => {
    const scrollDirection = event.deltaY > 0 ? 1 : -1;
    const nearestSectionIndex = findNearestSection(scrollDirection);
    smoothScrollToSection(nearestSectionIndex);
});


