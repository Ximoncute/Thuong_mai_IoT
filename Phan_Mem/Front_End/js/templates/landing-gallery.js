// js/templates/landing-gallery.js
export const galleryTemplate = `
<section class="section-padding" id="gallery">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                    </svg>
                    Gallery
                </div>
                <h2 class="section-title">Hệ Thống Được Triển Khai Trên Phần Cứng Thực Tế</h2>
                <p class="section-desc">Xem hình ảnh thực tế về phần cứng và hệ thống đang được lắp đặt, vận hành.</p>
            </div>

            <div class="masonry-grid reveal">
                <div class="masonry-item">
                    <div class="masonry-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24" stroke="#CBD5E1" fill="none" stroke-width="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <span>PCB thực tế</span>
                        </div>
                    </div>
                    <div class="masonry-caption">PCB Board tự thiết kế và in ấn</div>
                </div>
                <div class="masonry-item">
                    <div class="masonry-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24" stroke="#CBD5E1" fill="none" stroke-width="1.5">
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <rect x="9" y="9" width="6" height="6" />
                            </svg>
                            <span>ESP32 Module</span>
                        </div>
                    </div>
                    <div class="masonry-caption">ESP32 DevKit V1 kết nối cảm biến</div>
                </div>
                <div class="masonry-item">
                    <div class="masonry-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24" stroke="#CBD5E1" fill="none" stroke-width="1.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                            </svg>
                            <span>Mạch điều khiển</span>
                        </div>
                    </div>
                    <div class="masonry-caption">Mạch điều khiển relay 4 kênh</div>
                </div>
                <div class="masonry-item">
                    <div class="masonry-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24" stroke="#CBD5E1" fill="none" stroke-width="1.5">
                                <rect x="2" y="6" width="20" height="12" rx="2" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span>Thiết bị hoàn chỉnh</span>
                        </div>
                    </div>
                    <div class="masonry-caption">Sản phẩm sau khi lắp ráp hoàn chỉnh</div>
                </div>
                <div class="masonry-item">
                    <div class="masonry-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24" stroke="#CBD5E1" fill="none" stroke-width="1.5">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                            </svg>
                            <span>Hệ thống đang hoạt động</span>
                        </div>
                    </div>
                    <div class="masonry-caption">Hệ thống vận hành trong thực tế</div>
                </div>
                <div class="masonry-item">
                    <div class="masonry-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24" stroke="#CBD5E1" fill="none" stroke-width="1.5">
                                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            <span>Lắp đặt trong nhà</span>
                        </div>
                    </div>
                    <div class="masonry-caption">Thiết bị lắp đặt trong nhà thực tế</div>
                </div>
            </div>
        </div>
    </section>
`;
