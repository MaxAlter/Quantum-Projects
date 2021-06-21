"use strict";

const acc = document.querySelectorAll(".accordion");
const plus = document.querySelectorAll(".plus");

let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    const currentPlus = this.previousElementSibling;
    const panel = this.nextElementSibling;

    this.classList.toggle("activ");
    currentPlus.classList.toggle("active-plus");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.textContent = "How do I change my details?";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.textContent = "What platforms will I be able to use?";
    }
  });
}
