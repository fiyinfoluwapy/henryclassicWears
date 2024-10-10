document.addEventListener('DOMContentLoaded', () => {
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
        }, 300); 
    });

    // Hero Carousel
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000);

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

    // Scroll-triggered fade-in for services section
    const servicesSection = document.getElementById('services');
    window.addEventListener('scroll', () => {
        const servicesPosition = servicesSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (servicesPosition < screenPosition) {
            servicesSection.classList.add('fade-in');
        }
    });

    // Appointment section functionality
    const showAppointmentBtn = document.getElementById('show-appointment');
    const appointmentSection = document.getElementById('appointment');
    const form = document.querySelector('form');
    const dateTimeInput = document.getElementById('appointment-date');

    showAppointmentBtn.addEventListener('click', () => {
        appointmentSection.style.display = 'block';
        setTimeout(() => {
            appointmentSection.classList.add('fade-in');
        }, 10);

        showAppointmentBtn.style.display = 'none';
    });

    // Form submission simulation
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Simulate form submission
        setTimeout(() => {
            alert('Form submitted successfully!');
            dateTimeInput.value = '';
            form.reset();
        }, 1000);
    });

    // Form validation
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const phoneRegex = /^[0-9]{11}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    phoneInput.addEventListener('input', () => {
        if (!phoneRegex.test(phoneInput.value)) {
            phoneInput.setCustomValidity('Please enter a valid 11-digit phone number');
        } else {
            phoneInput.setCustomValidity('');
        }
        phoneInput.reportValidity();
    });

    emailInput.addEventListener('input', () => {
        if (!emailRegex.test(emailInput.value)) {
            emailInput.setCustomValidity('Please enter a valid email address');
        } else {
            emailInput.setCustomValidity('');
        }
        emailInput.reportValidity();
    });

    // Sticky CTA
    document.getElementById('sticky-cta').addEventListener('click', () => {
        appointmentSection.scrollIntoView({ behavior: 'smooth' });
    });

    // FAQ functionality
    document.querySelectorAll('.faq-title').forEach(title => {
        title.addEventListener('click', function () {
            const faqItem = this.parentElement;
            const faqContent = faqItem.querySelector('.faq-content');
            const faqIcon = faqItem.querySelector('.faq-toggle-icon');

            faqContent.classList.toggle('hidden');
            faqIcon.textContent = faqContent.classList.contains('hidden') ? '+' : '-';
        });
    });

    // Testimonials Carousel Animation
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial-slide');

    function showNextTestimonial() {
        testimonials[currentTestimonial].classList.remove('opacity-100');
        testimonials[currentTestimonial].classList.add('opacity-0');

        currentTestimonial = (currentTestimonial + 1) % testimonials.length;

        testimonials[currentTestimonial].classList.remove('opacity-0');
        testimonials[currentTestimonial].classList.add('opacity-100');
    }

    setInterval(showNextTestimonial, 4000);
    testimonials[0].classList.add('opacity-100');
});
