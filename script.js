

// Add event listener to submit button
document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display form data in console
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Send form data to server (e.g., using Fetch API)
    fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

// Add event listener to Learn More button
document.querySelector('#about button').addEventListener('click', () => {
    // Scroll to services section
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
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
