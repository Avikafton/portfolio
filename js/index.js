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
   ALARMKLOKKEN
============================================ */
const musicApp = document.getElementById('musicApp');
const musicIcon = document.getElementById('musicIcon');
const audio = document.getElementById('hoverSound');
let isPlaying = false;

const playImage = 'img/alarm.png';
const pauseImage = 'img/pause.png';

musicApp?.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    musicIcon.src = playImage;
  } else {
    audio.play();
    musicIcon.src = pauseImage;
  }
  isPlaying = !isPlaying;
});

audio?.addEventListener('ended', () => {
  isPlaying = false;
  musicIcon.src = playImage;
});


/* ============================================
   INSTILLINGER AF LYSFUNKTION
============================================ */
const settingsApp = document.querySelector('.app.indstillinger');
const overlay = document.getElementById('overlay');
const turnOnBtn = document.getElementById('turnOnBtn');

settingsApp?.addEventListener('click', () => {
  overlay.classList.add('active');
});

turnOnBtn?.addEventListener('click', () => {
  overlay.classList.remove('active');
});


/* ============================================
   LINK POP-UP
============================================ */
const popup = document.getElementById('link-popup');
const confirmBtn = document.getElementById('confirm-open');
const cancelBtn = document.getElementById('cancel-open');
let currentLink = '';

document.querySelectorAll('.external-link').forEach(app => {
  app.addEventListener('click', (e) => {
    e.preventDefault();
    // e.stopPropagation(); // Kan evt. fjernes, hvis ikke nødvendigt
    currentLink = app.getAttribute('data-link');
    popup.style.display = 'flex';
  });
});

confirmBtn?.addEventListener('click', () => {
  window.open(currentLink, '_blank');
  popup.style.display = 'none';
});

cancelBtn?.addEventListener('click', () => {
  popup.style.display = 'none';
  currentLink = '';
});


/* ============================================
   FOOTER
============================================ */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("lamp-toggle");
  const footer = document.querySelector(".portfolio-footer");

  if (!footer || !toggle) return;

  toggle.addEventListener("change", () => {
    footer.classList.toggle("visible", toggle.checked);
  });
});