// Mobile Navigation Toggle
document.getElementById('menu-button').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('open');
    mobileMenu.style.display = 'block'; // Ensure it's visible
});

document.getElementById('close-menu').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('open');
    setTimeout(() => {
        mobileMenu.style.display = 'none'; // Hide after transition
    }, 300); // Match this with CSS transition duration
});

// Hero Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 5000);



// Show Products Functionality
const productButtons = document.querySelectorAll('.view-products');

productButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        const productSection = document.getElementById(`${category}-products`);
        
        // Hide all product sections
        const allSections = document.querySelectorAll('.product-section');
        allSections.forEach(section => {
            section.style.display = 'none'; // Hide sections by setting display to none
        });
        
        // Show the clicked category's product section
        productSection.style.display = 'block'; // Show clicked section
        
        // Scroll to the product section
        productSection.scrollIntoView({ behavior: 'smooth' });
    });
});

//JavaScript to fade in the services section when in view

document.addEventListener('scroll', () => {
    const servicesSection = document.getElementById('services');
    const servicesPosition = servicesSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (servicesPosition < screenPosition) {
        servicesSection.classList.add('fade-in');
    }
});



// JavaScript to fade in the Appointment section when in view
document.addEventListener('DOMContentLoaded', () => {
    const showAppointmentBtn = document.getElementById('show-appointment');
    const appointmentSection = document.getElementById('appointment');
    const form = document.querySelector('form');  // Assuming you have a form element
    const dateTimeInput = document.getElementById('appointment-date');  // Update ID here

    // Show appointment section and hide the button
    showAppointmentBtn.addEventListener('click', () => {
        // Make the section visible before triggering the fade-in effect
        appointmentSection.style.display = 'block';

        // Allow a tiny delay to ensure the display is set before the fade-in transition starts
        setTimeout(() => {
            appointmentSection.classList.add('fade-in');
        }, 10);

        showAppointmentBtn.style.display = 'none';  // Hide the button after it's clicked
    });

    // Reset the form after submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent default form submission for testing

        // Simulate form submission to Formspree
        setTimeout(() => {
            alert('Form submitted successfully!');

            // Clear the input field after form submission
            dateTimeInput.value = '';

            // Optionally, reset the form entirely
            form.reset();
        }, 1000);
    });
});
//form validation
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const form = document.querySelector('form');

    // Regular Expressions for validation
    const phoneRegex = /^[0-9]{10}$/;  // Example: 10-digit phone number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email pattern

    // Phone number validation
    phoneInput.addEventListener('input', () => {
        if (!phoneRegex.test(phoneInput.value)) {
            phoneInput.setCustomValidity('Please enter a valid 10-digit phone number');
            phoneInput.reportValidity();
        } else {
            phoneInput.setCustomValidity('');
        }
    });

    // Email validation
    emailInput.addEventListener('input', () => {
        if (!emailRegex.test(emailInput.value)) {
            emailInput.setCustomValidity('Please enter a valid email address');
            emailInput.reportValidity();
        } else {
            emailInput.setCustomValidity('');
        }
    });

    // Prevent form submission if inputs are invalid
    form.addEventListener('submit', (event) => {
        if (!phoneRegex.test(phoneInput.value)) {
            event.preventDefault();
            phoneInput.reportValidity();
        } else if (!emailRegex.test(emailInput.value)) {
            event.preventDefault();
            emailInput.reportValidity();
        } else {
            // Form can be submitted, proceed with success modal
            alert('Form submitted successfully!');
        }
    });
});
//sticky cta 

document.getElementById('sticky-cta').addEventListener('click', () => {
    const appointmentSection = document.getElementById('appointment');
    appointmentSection.scrollIntoView({ behavior: 'smooth' });
});

//faq functionality 

document.querySelectorAll('.faq-title').forEach(title => {
    title.addEventListener('click', function () {
        const faqItem = this.parentElement;
        const faqContent = faqItem.querySelector('.faq-content');
        const faqIcon = faqItem.querySelector('.faq-toggle-icon');

        // Toggle the display of the content
        faqContent.classList.toggle('hidden');
        
        // Change the icon between '+' and '-'
        if (faqContent.classList.contains('hidden')) {
            faqIcon.textContent = '+';
        } else {
            faqIcon.textContent = '-';
        }
    });
});


//javascript for testimonials Carousel Animation

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');

function showNextTestimonial() {
    // Hide the current testimonial
    testimonials[currentTestimonial].classList.remove('opacity-100');
    testimonials[currentTestimonial].classList.add('opacity-0');
    
    // Move to the next testimonial
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;

    // Show the next testimonial
    testimonials[currentTestimonial].classList.remove('opacity-0');
    testimonials[currentTestimonial].classList.add('opacity-100');
}

// Start the carousel
setInterval(showNextTestimonial, 5000);

// Initially display the first testimonial
testimonials[0].classList.remove('opacity-0');
testimonials[0].classList.add('opacity-100');
