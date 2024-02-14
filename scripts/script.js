document.addEventListener("DOMContentLoaded", nav);
function nav() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");
  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
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