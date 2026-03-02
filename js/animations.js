// animations.js

// Intersection Observer for Scroll Reveal Animations

const revealElements = document.querySelectorAll('.reveal');

const options = {
    root: null, // use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // percentage of element to be visible before the callback is executed
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add your animation class
            observer.unobserve(entry.target); // Stop observing the element
        }
    });
};

const observer = new IntersectionObserver(callback, options);

revealElements.forEach(element => {
    observer.observe(element);
});

// Entrance effects can be handled with CSS animations based on the 'animate' class being added.