/* ============================================
   GENERELLE FUNKTIONER
============================================ */

// BURGERMENU
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* ============================================
   FLIP-EFFEKT PÅ BILLEDER OG MAPPE-INTRO
============================================ */

document.addEventListener("DOMContentLoaded", () => {
  let flipListenersAdded = false;

  const addFlipListeners = () => {
    if (flipListenersAdded) return;
    const flipCards = document.querySelectorAll(".like-container");
    flipCards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
    });
    flipListenersAdded = true;
  };

  const folderIntro = document.getElementById("folder-intro");
  const mainContent = document.getElementById("main-content");
  const showBtn = document.getElementById("show-content-btn");
  const closeBtn = document.getElementById("close-content-btn");

  if (mainContent && getComputedStyle(mainContent).display !== "none") {
    addFlipListeners();
  }

  if (showBtn && closeBtn && folderIntro && mainContent) {
    showBtn.addEventListener("click", () => {
      folderIntro.style.display = "none";
      mainContent.style.display = "block";
      showBtn.setAttribute("aria-expanded", "true");
      addFlipListeners();
    });

    closeBtn.addEventListener("click", () => {
      mainContent.style.display = "none";
      folderIntro.style.display = "block";
      showBtn.setAttribute("aria-expanded", "false");
    });
  }
});