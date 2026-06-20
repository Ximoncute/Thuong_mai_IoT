// js/templates/landing-hardware.js
export const hardwareTemplate = `
<section class="section-padding section-bg" id="hardware">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="9" y="9" width="6" height="6" />
                        <line x1="9" y1="1" x2="9" y2="4" />
                        <line x1="15" y1="1" x2="15" y2="4" />
                        <line x1="9" y1="20" x2="9" y2="23" />
                        <line x1="15" y1="20" x2="15" y2="23" />
                        <line x1="20" y1="9" x2="23" y2="9" />
                        <line x1="20" y1="14" x2="23" y2="14" />
                        <line x1="1" y1="9" x2="4" y2="9" />
                        <line x1="1" y1="14" x2="4" y2="14" />
                    </svg>
                    Phần cứng
                </div>
                <h2 class="section-title">Công Nghệ Phần Cứng Đằng Sau Hệ Thống</h2>
                <p class="section-desc">Được xây dựng trên nền tảng phần cứng đáng tin cậy và linh hoạt, tối ưu cho IoT.
                </p>
            </div>

            <div class="hardware-grid">
                <!-- Card 1: ESP32 -->
                <div class="hardware-card reveal">
                    <div class="hardware-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24">
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <rect x="9" y="9" width="6" height="6" />
                                <line x1="9" y1="1" x2="9" y2="4" />
                                <line x1="15" y1="1" x2="15" y2="4" />
                                <line x1="9" y1="20" x2="9" y2="23" />
                                <line x1="15" y1="20" x2="15" y2="23" />
                            </svg>
                            <span>ESP32 Board</span>
                        </div>
                    </div>
                    <div class="hardware-info">
                        <h3>ESP32 Development Board</h3>
                        <p>Vi điều khiển lõi kép WiFi + Bluetooth, xử lý trung tâm cho toàn bộ hệ thống IoT.</p>
                    </div>
                </div>

                <!-- Card 2: PCB -->
                <div class="hardware-card reveal">
                    <div class="hardware-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24">
                                <rect x="2" y="6" width="20" height="12" rx="2" />
                                <line x1="6" y1="10" x2="6" y2="14" />
                                <line x1="10" y1="10" x2="10" y2="14" />
                                <line x1="14" y1="10" x2="14" y2="14" />
                                <line x1="18" y1="10" x2="18" y2="14" />
                            </svg>
                            <span>PCB Board</span>
                        </div>
                    </div>
                    <div class="hardware-info">
                        <h3>PCB Board tự thiết kế</h3>
                        <p>Mạch in tùy chỉnh, thiết kế tối ưu cho kết nối cảm biến và module điều khiển.</p>
                    </div>
                </div>

                <!-- Card 3: Relay -->
                <div class="hardware-card reveal">
                    <div class="hardware-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                            </svg>
                            <span>Relay Module</span>
                        </div>
                    </div>
                    <div class="hardware-info">
                        <h3>Relay Module</h3>
                        <p>Module relay 4 kênh cho phép điều khiển đóng/ngắt thiết bị điện an toàn.</p>
                    </div>
                </div>

                <!-- Card 4: DHT22 -->
                <div class="hardware-card reveal">
                    <div class="hardware-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24">
                                <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
                            </svg>
                            <span>DHT22 Sensor</span>
                        </div>
                    </div>
                    <div class="hardware-info">
                        <h3>DHT22 Sensor</h3>
                        <p>Cảm biến nhiệt độ và độ ẩm chính xác cao, đo liên tục theo thời gian thực.</p>
                    </div>
                </div>

                <!-- Card 5: Smoke -->
                <div class="hardware-card reveal">
                    <div class="hardware-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 3v3m0 4.5V21M4.22 6.22l2.12 2.12m11.32-2.12l-2.12 2.12" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            <span>Smoke Sensor</span>
                        </div>
                    </div>
                    <div class="hardware-info">
                        <h3>Smoke Sensor</h3>
                        <p>Cảm biến phát hiện khói và khí gas, cảnh báo sớm nguy cơ hỏa hoạn.</p>
                    </div>
                </div>

                <!-- Card 6: Camera -->
                <div class="hardware-card reveal">
                    <div class="hardware-img">
                        <div class="hardware-placeholder">
                            <svg viewBox="0 0 24 24">
                                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                                <circle cx="12" cy="13" r="4" />
                            </svg>
                            <span>Camera Module</span>
                        </div>
                    </div>
                    <div class="hardware-info">
                        <h3>Camera Module</h3>
                        <p>Camera OV2640 độ phân giải cao, tích hợp trực tiếp với ESP32 để truyền hình ảnh.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
