document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add your form submission logic, e.g., sending data to a server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Clear the form fields after submission
    document.getElementById('contact-form').reset();
});