document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle hamburger icon to X
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when clicking a link
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Optional: Smooth reveal animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Find elements to animate
    const animateElements = document.querySelectorAll(
        '.category-item, .trending-card, .package-card, .about-container, .booking-form, .feature-card, .testimonial-card, .stat-item, .faq-item'
    );

    animateElements.forEach(el => {
        // Set initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        // Add to observer
        observer.observe(el);
    });

    // ---------------------------------------------------------------
    // WHATSAPP FLOATING BUTTON — injected on every page automatically
    // ---------------------------------------------------------------
    const waBtn = document.createElement('a');
    waBtn.href = 'https://wa.me/94123456789?text=Hi%20Ceylon%20Serenity%2C%20I%27d%20like%20to%20enquire%20about%20a%20tour%20package!';
    waBtn.target = '_blank';
    waBtn.rel = 'noopener noreferrer';
    waBtn.className = 'whatsapp-float';
    waBtn.setAttribute('aria-label', 'Chat with us on WhatsApp');
    waBtn.innerHTML = `
        <i class="fab fa-whatsapp"></i>
        <span class="whatsapp-tooltip">Chat with us!</span>
    `;
    // ---------------------------------------------------------------
    // PACKAGE COMPARISON LOGIC
    // ---------------------------------------------------------------
    const compareCheckboxes = document.querySelectorAll('.compare-checkbox');
    const compareBar = document.getElementById('compare-bar');
    const compareCountEl = document.getElementById('compare-count');
    let selectedPackages = [];

    if (compareCheckboxes.length > 0 && compareBar && compareCountEl) {
        compareCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const packageName = checkbox.getAttribute('data-name');

                if (checkbox.checked) {
                    if (!selectedPackages.includes(packageName)) {
                        selectedPackages.push(packageName);
                    }
                } else {
                    selectedPackages = selectedPackages.filter(name => name !== packageName);
                }

                // Update UI
                const count = selectedPackages.length;
                compareCountEl.textContent = count;

                if (count > 0) {
                    compareBar.classList.add('active');
                } else {
                    compareBar.classList.remove('active');
                }
            });
        });
    }
});


