// Add event listener to service cards
document.querySelectorAll('.service-card').forEach((card) => {
    card.addEventListener('click', () => {
        // Toggle active class
        card.classList.toggle('active');
    });
});
