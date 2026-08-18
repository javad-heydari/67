document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const messageStatus = document.getElementById('message-status');
    const learnMoreBtn = document.getElementById('learn-more-btn');

    // Event listener for the 'Learn More' button
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            // Smooth scroll to the about section
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Event listener for the contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation (can be expanded)
            if (!name || !email || !message) {
                messageStatus.textContent = 'Please fill in all fields.';
                messageStatus.style.color = 'red';
                return;
            }

            // Construct the payload for the API call
            const formData = {
                name: name,
                email: email,
                message: message
            };

            try {
                // Make a POST request to your backend API endpoint
                // Replace '/api/contact' with your actual backend endpoint URL
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    // If the server responded with an error status
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Something went wrong.');
                }

                // If the submission was successful
                const result = await response.json();
                messageStatus.textContent = result.message || 'Message sent successfully!';
                messageStatus.style.color = 'green';

                // Clear the form
                contactForm.reset();

            } catch (error) {
                // Handle any errors that occurred during the fetch operation
                messageStatus.textContent = `Error: ${error.message}`;
                messageStatus.style.color = 'red';
                console.error('Error sending message:', error);
            }
        });
    }
});
