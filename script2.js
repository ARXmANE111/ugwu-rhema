// Add event listener to Learn More button
document.querySelector('.about-text button').addEventListener('click', () => {
    // Scroll to expertise section
    document.querySelector('.expertise').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to navigation menu items
document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        // Prevent default link behavior
        e.preventDefault();

        // Scroll to corresponding section
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
