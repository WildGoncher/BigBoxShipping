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
const sectionIds = ['greetings', 'stages', 'containers', 'services', 'about'];
const sections = sectionIds.map(id => document.getElementById(id));

document.addEventListener('wheel', (event) => {
    const scrollDirection = event.deltaY > 0 ? 1 : -1;

    const visibleSection = sections.find(section =>
        section.getBoundingClientRect().top >= 0 &&
        section.getBoundingClientRect().bottom <= window.innerHeight
    );

    const visibleIndex = sections.indexOf(visibleSection);

    if (scrollDirection === 1) {
        const nextIndex = (visibleIndex + 1) % sections.length;
        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
    } else {
        const prevIndex = (visibleIndex - 1 + sections.length) % sections.length;
        sections[prevIndex].scrollIntoView({ behavior: 'smooth' });
    }
});
