

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    emailjs.sendForm('service_3ps78n6', 'template_6ijvvh4', formData)
        .then(function() {
            alert('Message sent successfully!');
            form.reset(); // Reset form after submission
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
        });
});
