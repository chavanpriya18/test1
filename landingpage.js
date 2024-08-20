
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            let valid = true;
            
            // Name validation
            const name = document.getElementById('name');
            const nameError = document.getElementById('name-error');
            if (name.value.trim() === '') {
                nameError.textContent = 'Name is required.';
                valid = false;
            } else if (name.value.length < 2) {
                nameError.textContent = 'Name must be at least 2 characters long.';
                valid = false;
            } else {
                nameError.textContent = '';
            }
            
            // Email validation
            const email = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                emailError.textContent = 'Email is required.';
                valid = false;
            } else if (!emailPattern.test(email.value)) {
                emailError.textContent = 'Enter a valid email address.';
                valid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Message validation
            const message = document.getElementById('message');
            const messageError = document.getElementById('message-error');
            if (message.value.trim() === '') {
                messageError.textContent = 'Message is required.';
                valid = false;
            } else {
                messageError.textContent = '';
            }
            
            if (!valid) {
                event.preventDefault();
            }
        });
    