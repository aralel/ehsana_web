/**
 * Formspree Waitlist Handler for Ehsana
 * Vanilla JavaScript - No jQuery dependency
 */

const FormspreeHandler = {
    // Formspree endpoint
    endpoint: 'https://formspree.io/f/xbdazakn',
    
    // Initialize the form handler
    init: function() {
        const form = document.getElementById('signup-form');
        if (form) {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    },
    
    // Validate email format
    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email && emailRegex.test(email.trim());
    },
    
    // Handle form submission
    handleSubmit: async function(event) {
        event.preventDefault();
        
        const form = event.target;
        const emailInput = document.getElementById('email');
        const submitBtn = form.querySelector('button[type="submit"]');
        const successMessage = document.getElementById('signup-success');
        const email = emailInput ? emailInput.value.trim() : '';
        
        // Validate email
        if (!this.validateEmail(email)) {
            this.showError(emailInput, 'Please enter a valid email address');
            return;
        }
        
        // Clear any previous errors
        this.clearError(emailInput);
        
        // Disable button and show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Joining...';
        
        try {
            const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email: email })
            });
            
            if (response.ok) {
                // Hide form and show success message
                form.classList.add('hidden');
                if (successMessage) {
                    successMessage.classList.remove('hidden');
                }
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Submission failed');
            }
        } catch (error) {
            // Reset button on error
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            this.showError(emailInput, 'Something went wrong. Please try again.');
            console.error('Formspree error:', error);
        }
    },
    
    // Show error message
    showError: function(input, message) {
        this.clearError(input);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'formspree-error text-red-300 text-sm mt-2';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
        input.classList.add('border-red-400');
    },
    
    // Clear error message
    clearError: function(input) {
        const existingError = input.parentNode.querySelector('.formspree-error');
        if (existingError) {
            existingError.remove();
        }
        input.classList.remove('border-red-400');
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    FormspreeHandler.init();
});