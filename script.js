document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (name && mobile.match(/^[0-9]{10}$/) && password.length >= 6) {
        alert('Signup successful!');
        // Here you can add code to send data to the server
    } else {
        alert('Please fill out the form correctly.');
    }
});