document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        hamburger.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
            if (!navLinks.classList.contains('hidden')) {
                navLinks.classList.add('hidden');
                hamburger.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // Section Fade-In Animation and Active Nav Link
    const sections = document.querySelectorAll('.section');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Update active nav link
                const sectionId = entry.target.getAttribute('id');
                navLinksItems.forEach(link => {
                    const href = link.getAttribute('href').slice(1);
                    link.setAttribute('data-active', href === sectionId ? 'true' : 'false');
                });
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Testimonial Carousel
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showTestimonial(currentIndex);
    });

    // Contact Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        nameError.classList.add('hidden');
        emailError.classList.add('hidden');
        messageError.classList.add('hidden');

        if (!name.value.trim()) {
            nameError.classList.remove('hidden');
            isValid = false;
        }

        if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            emailError.classList.remove('hidden');
            isValid = false;
        }

        if (!message.value.trim()) {
            messageError.classList.remove('hidden');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        }
        // Allow natural form submission to Formspree if valid
    });

    // Back to Top Button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            projects.forEach(project => {
                const projectCategory = project.getAttribute('data-category');
                project.style.display = (category === 'all' || category === projectCategory) ? 'block' : 'none';
            });
        });
    });
});