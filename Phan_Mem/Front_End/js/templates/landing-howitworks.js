// js/templates/landing-howitworks.js
export const howitworksTemplate = `
<section class="section-padding section-bg" id="howitworks">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                    </svg>
                    Quy trình
                </div>
                <h2 class="section-title">Hệ Thống Hoạt Động Như Thế Nào?</h2>
                <p class="section-desc">Quy trình 6 bước từ thu thập dữ liệu đến tự động điều khiển thiết bị thông minh.
                </p>
            </div>

            <div class="timeline reveal">
                <div class="timeline-item">
                    <div class="timeline-marker">1</div>
                    <div class="timeline-content">
                        <h3>Kết nối thiết bị</h3>
                        <p>Các cảm biến và thiết bị IoT được kết nối với vi điều khiển ESP32 qua GPIO và giao thức
                            truyền thông.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-marker">2</div>
                    <div class="timeline-content">
                        <h3>Thu thập dữ liệu</h3>
                        <p>ESP32 liên tục đọc dữ liệu từ cảm biến nhiệt độ, độ ẩm, ánh sáng, chuyển động và khói.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-marker">3</div>
                    <div class="timeline-content">
                        <h3>Truyền dữ liệu MQTT</h3>
                        <p>Dữ liệu được gửi lên MQTT Broker qua WiFi với độ trễ cực thấp, đảm bảo thời gian thực.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-marker">4</div>
                    <div class="timeline-content">
                        <h3>Phân tích dữ liệu</h3>
                        <p>Backend Server xử lý, lưu trữ và phân tích dữ liệu để đưa ra insights và cảnh báo.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-marker">5</div>
                    <div class="timeline-content">
                        <h3>Ra quyết định</h3>
                        <p>Hệ thống tự động đưa ra quyết định dựa trên quy tắc, ngưỡng cảnh báo và AI.</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-marker">6</div>
                    <div class="timeline-content">
                        <h3>Tự động điều khiển</h3>
                        <p>Lệnh điều khiển được gửi ngược lại ESP32 để bật/tắt thiết bị, kích hoạt cảnh báo.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
