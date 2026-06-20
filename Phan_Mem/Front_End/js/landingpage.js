// js/landingpage.js
import { navTemplate } from './templates/landing-nav.js';
import { heroTemplate } from './templates/landing-hero.js';
import { statsTemplate } from './templates/landing-stats.js';
import { problemsTemplate } from './templates/landing-problems.js';
import { featuresTemplate } from './templates/landing-features.js';
import { hardwareTemplate } from './templates/landing-hardware.js';
import { architectureTemplate } from './templates/landing-architecture.js';
import { dashboardTemplate } from './templates/landing-dashboard.js';
import { benefitsTemplate } from './templates/landing-benefits.js';
import { howitworksTemplate } from './templates/landing-howitworks.js';
import { galleryTemplate } from './templates/landing-gallery.js';
import { testimonialsTemplate } from './templates/landing-testimonials.js';
import { faqTemplate } from './templates/landing-faq.js';
import { contactTemplate } from './templates/landing-contact.js';
import { footerTemplate } from './templates/landing-footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = `
            ${navTemplate}
            ${heroTemplate}
            ${statsTemplate}
            ${problemsTemplate}
            ${featuresTemplate}
            ${hardwareTemplate}
            ${architectureTemplate}
            ${dashboardTemplate}
            ${benefitsTemplate}
            ${howitworksTemplate}
            ${galleryTemplate}
            ${testimonialsTemplate}
            ${faqTemplate}
            ${contactTemplate}
            ${footerTemplate}
        `;
    }

    initLandingPageLogic();
});

function initLandingPageLogic() {
    /* ============================================
       1. MOBILE NAVIGATION TOGGLE
       ============================================ */
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Close mobile menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    /* ============================================
       2. NAVBAR SCROLL EFFECT
       ============================================ */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    /* ============================================
       3. SCROLL REVEAL ANIMATION
       ============================================ */
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ============================================
       4. COUNTER ANIMATION
       ============================================ */
    function animateCounters() {
        const counters = document.querySelectorAll('[data-target]');
        counters.forEach(counter => {
            if (counter.dataset.animated) return;

            const target = parseFloat(counter.getAttribute('data-target'));
            const suffix = counter.getAttribute('data-suffix') || '';
            const isDecimal = counter.getAttribute('data-decimal') === 'true';
            const duration = 2000;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = eased * target;

                if (isDecimal) {
                    counter.textContent = current.toFixed(1) + suffix;
                } else {
                    counter.textContent = Math.floor(current).toLocaleString() + suffix;
                }

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    if (isDecimal) {
                        counter.textContent = target.toFixed(1) + suffix;
                    } else {
                        counter.textContent = Math.floor(target).toLocaleString() + suffix;
                    }
                }
            }

            counter.dataset.animated = 'true';
            requestAnimationFrame(updateCounter);
        });
    }

    // Observe stats sections for counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    }, { threshold: 0.3 });

    const statsBar = document.getElementById('statsBar');
    const heroSection = document.getElementById('hero');
    if (statsBar) statsObserver.observe(statsBar);
    if (heroSection) statsObserver.observe(heroSection);

    /* ============================================
       5. FAQ ACCORDION
       ============================================ */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all
                faqItems.forEach(i => {
                    i.classList.remove('active');
                    const ans = i.querySelector('.faq-answer');
                    const q = i.querySelector('.faq-question');
                    if (ans) ans.style.maxHeight = null;
                    if (q) q.setAttribute('aria-expanded', 'false');
                });

                // Open clicked if it was closed
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });

    /* ============================================
       6. SMOOTH SCROLL FOR ANCHOR LINKS
       ============================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}
