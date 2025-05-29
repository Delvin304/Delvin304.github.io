// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');
    
    // Burger Animation
    burger.classList.toggle('toggle');
    
    // Animate Links
    navLinksItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s;
        }
    });
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        navLinksItems.forEach(link => {
            link.style.animation = '';
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Form submission (example)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Add animation to skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-bar');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const barWidth = bar.style.width;
        bar.style.width = '0';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bar.style.width = barWidth;
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(bar);
    });
}

// Initialize animations when the page loads
window.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
});