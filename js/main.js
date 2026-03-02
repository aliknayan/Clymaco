'use strict';

// Navigation functionality
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Modal functionality
const modal = document.querySelector('.modal');
const modalOpenBtn = document.querySelector('.modal-open');
const modalCloseBtn = document.querySelector('.modal-close');

modalOpenBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Scroll handling
const scrollToTopBtn = document.querySelector('.scroll-to-top');

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
});
