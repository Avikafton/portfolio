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
   PORTFOLIO – VISNING OG POPUPS
============================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* -------- LAMPETOGGLE: TÆND / SLUK -------- */
  const toggle = document.getElementById("lamp-toggle");
  const frame = document.getElementById("desktopFrame");
  const dockPanel = document.getElementById("dockPanel");
  const folderIntro = document.querySelector(".folder-intro");

  // Init: skjul frame og dock ved load
  if (frame && dockPanel) {
    frame.style.display = "none";
    dockPanel.style.display = "none";
  }

  toggle?.addEventListener("change", () => {
    const isOn = toggle.checked;

    if (frame) frame.style.display = isOn ? "block" : "none";
    if (dockPanel) dockPanel.style.display = isOn ? "flex" : "none";
    if (folderIntro) folderIntro.style.display = isOn ? "none" : "block";
  });

  /* -------- FOLDERINTRO: SKJUL VED KLIK -------- */
  folderIntro?.addEventListener("click", () => {
    folderIntro.style.display = "none";
  });

  /* -------- ÅBEN POPUP VED KLIK PÅ MAPPE -------- */
  const folders = document.querySelectorAll(".folder");
  folders.forEach((folder) => {
    folder.addEventListener("click", () => {
      const popupId = folder.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      if (popup) {
        popup.classList.remove("hidden");
      }
    });
  });

  /* -------- LUK POPUP -------- */
  const closeButtons = document.querySelectorAll(".close-popup");
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const popup = button.closest(".popup-overlay");
      if (popup) {
        popup.classList.add("hidden");
      }
    });
  });
});


/* ============================================
   PORTFOLIO – VISNING PÅ MOBIL
============================================ */

document.body.addEventListener('click', () => {
  document.querySelectorAll('.dock-icon.active').forEach(icon => icon.classList.remove('active'));
});