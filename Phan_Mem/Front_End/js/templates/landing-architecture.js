// js/templates/landing-architecture.js
export const architectureTemplate = `
<section class="section-padding" id="architecture">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                    </svg>
                    Kiến trúc
                </div>
                <h2 class="section-title">Kiến Trúc Hệ Thống SmartHome IoT</h2>
                <p class="section-desc">Hệ thống được thiết kế theo mô hình phân lớp, đảm bảo hiệu năng và khả năng mở
                    rộng.</p>
            </div>

            <div class="arch-flow reveal">
                <div class="arch-node">
                    <div class="arch-node-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
                        </svg>
                    </div>
                    <span class="arch-node-label">Sensors</span>
                </div>
                <span class="arch-arrow">→</span>

                <div class="arch-node">
                    <div class="arch-node-icon">
                        <svg viewBox="0 0 24 24">
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <rect x="9" y="9" width="6" height="6" />
                        </svg>
                    </div>
                    <span class="arch-node-label">ESP32</span>
                </div>
                <span class="arch-arrow">→</span>

                <div class="arch-node">
                    <div class="arch-node-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <span class="arch-node-label">MQTT Broker</span>
                </div>
                <span class="arch-arrow">→</span>

                <div class="arch-node">
                    <div class="arch-node-icon">
                        <svg viewBox="0 0 24 24">
                            <rect x="2" y="2" width="20" height="8" rx="2" />
                            <rect x="2" y="14" width="20" height="8" rx="2" />
                            <line x1="6" y1="6" x2="6.01" y2="6" />
                            <line x1="6" y1="18" x2="6.01" y2="18" />
                        </svg>
                    </div>
                    <span class="arch-node-label">Backend Server</span>
                </div>
                <span class="arch-arrow">→</span>

                <div class="arch-node">
                    <div class="arch-node-icon">
                        <svg viewBox="0 0 24 24">
                            <ellipse cx="12" cy="5" rx="9" ry="3" />
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </svg>
                    </div>
                    <span class="arch-node-label">Database</span>
                </div>
                <span class="arch-arrow">→</span>

                <div class="arch-node">
                    <div class="arch-node-icon">
                        <svg viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                    </div>
                    <span class="arch-node-label">Web Dashboard</span>
                </div>
            </div>
        </div>
    </section>
`;
