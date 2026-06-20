// js/templates/landing-nav.js
export const navTemplate = `
<nav class="navbar" id="navbar">
        <div class="container">
            <a href="#" class="nav-logo">
                <div class="nav-logo-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                        <path d="M9 21V12h6v9" fill="none" stroke="#fff" stroke-width="2" />
                    </svg>
                </div>
                SmartHome IoT
            </a>

            <div class="nav-links" id="navLinks">
                <a href="#features">Tính năng</a>
                <a href="#hardware">Phần cứng</a>
                <a href="#architecture">Kiến trúc</a>
                <a href="#dashboard">Dashboard</a>
                <a href="#faq">FAQ</a>
                <a href="index.html" class="nav-cta">Trải Nghiệm Ngay</a>
            </div>

            <button class="hamburger" id="hamburger" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>
`;
