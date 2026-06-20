// js/templates/landing-faq.js
export const faqTemplate = `
<section class="section-padding" id="faq">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    FAQ
                </div>
                <h2 class="section-title">Câu Hỏi Thường Gặp</h2>
                <p class="section-desc">Giải đáp những thắc mắc phổ biến về hệ thống SmartHome IoT.</p>
            </div>

            <div class="faq-list reveal">
                <div class="faq-item">
                    <button class="faq-question" id="faq-btn-1" aria-expanded="false">
                        SmartHome IoT hoạt động như thế nào?
                        <span class="faq-icon"><svg viewBox="0 0 24 24">
                                <polyline points="6 9 12 15 18 9" />
                            </svg></span>
                    </button>
                    <div class="faq-answer" id="faq-answer-1">
                        <div class="faq-answer-inner">Hệ thống sử dụng vi điều khiển ESP32 kết nối với các cảm biến và
                            thiết bị trong nhà. Dữ liệu được truyền qua WiFi thông qua giao thức MQTT đến Server, sau đó
                            hiển thị trên Web Dashboard để bạn giám sát và điều khiển từ xa.</div>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" id="faq-btn-2" aria-expanded="false">
                        Tôi có cần kiến thức kỹ thuật để sử dụng không?
                        <span class="faq-icon"><svg viewBox="0 0 24 24">
                                <polyline points="6 9 12 15 18 9" />
                            </svg></span>
                    </button>
                    <div class="faq-answer" id="faq-answer-2">
                        <div class="faq-answer-inner">Không! SmartHome IoT được thiết kế với giao diện Plug and Play cực
                            kỳ thân thiện. Bạn chỉ cần kết nối thiết bị với WiFi và mọi thứ sẽ tự động hoạt động. Đội
                            ngũ kỹ thuật sẽ hỗ trợ bạn trong quá trình cài đặt ban đầu.</div>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" id="faq-btn-3" aria-expanded="false">
                        Hệ thống có an toàn và bảo mật không?
                        <span class="faq-icon"><svg viewBox="0 0 24 24">
                                <polyline points="6 9 12 15 18 9" />
                            </svg></span>
                    </button>
                    <div class="faq-answer" id="faq-answer-3">
                        <div class="faq-answer-inner">Tuyệt đối an toàn. SmartHome IoT sử dụng mã hóa SSL/TLS cho mọi
                            kết nối, xác thực đa lớp, và lưu trữ dữ liệu trên server bảo mật. Hệ thống được thiết kế
                            theo tiêu chuẩn bảo mật IoT quốc tế.</div>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" id="faq-btn-4" aria-expanded="false">
                        Chi phí triển khai là bao nhiêu?
                        <span class="faq-icon"><svg viewBox="0 0 24 24">
                                <polyline points="6 9 12 15 18 9" />
                            </svg></span>
                    </button>
                    <div class="faq-answer" id="faq-answer-4">
                        <div class="faq-answer-inner">Chi phí phụ thuộc vào quy mô và nhu cầu cụ thể. Gói cơ bản cho hộ
                            gia đình bắt đầu từ 2 triệu đồng bao gồm phần cứng và phần mềm. Liên hệ với chúng tôi để
                            được tư vấn gói phù hợp nhất.</div>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" id="faq-btn-5" aria-expanded="false">
                        Có hỗ trợ tích hợp với thiết bị sẵn có không?
                        <span class="faq-icon"><svg viewBox="0 0 24 24">
                                <polyline points="6 9 12 15 18 9" />
                            </svg></span>
                    </button>
                    <div class="faq-answer" id="faq-answer-5">
                        <div class="faq-answer-inner">Có! SmartHome IoT hỗ trợ tích hợp với hầu hết các thiết bị điện
                            hiện có thông qua module relay. Bạn không cần thay thế toàn bộ thiết bị, chỉ cần thêm module
                            điều khiển là có thể biến thiết bị thường thành thiết bị thông minh.</div>
                    </div>
                </div>

                <div class="faq-item">
                    <button class="faq-question" id="faq-btn-6" aria-expanded="false">
                        Nếu mất WiFi thì hệ thống có còn hoạt động không?
                        <span class="faq-icon"><svg viewBox="0 0 24 24">
                                <polyline points="6 9 12 15 18 9" />
                            </svg></span>
                    </button>
                    <div class="faq-answer" id="faq-answer-6">
                        <div class="faq-answer-inner">Hệ thống vẫn hoạt động cục bộ khi mất WiFi. ESP32 sẽ tiếp tục chạy
                            các kịch bản tự động hóa đã được cấu hình sẵn. Khi WiFi được khôi phục, dữ liệu sẽ tự động
                            đồng bộ lại với server.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;
