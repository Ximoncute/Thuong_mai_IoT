// js/templates/landing-problems.js
export const problemsTemplate = `
<section class="section-padding section-bg" id="problems">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Vấn đề hiện tại
                </div>
                <h2 class="section-title">Bạn Đang Gặp Phải Những Vấn Đề Này?</h2>
                <p class="section-desc">Hàng triệu hộ gia đình đang phải đối mặt với các thách thức trong quản lý ngôi
                    nhà mỗi ngày.</p>
            </div>

            <div class="problems-grid">
                <div class="problem-card reveal">
                    <div class="problem-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                    </div>
                    <h3>Tốn điện năng</h3>
                    <p>Hóa đơn tiền điện tăng cao vì quên tắt thiết bị và không có hệ thống quản lý năng lượng thông
                        minh.</p>
                </div>
                <div class="problem-card reveal">
                    <div class="problem-icon">
                        <svg viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                    </div>
                    <h3>Khó quản lý thiết bị</h3>
                    <p>Quá nhiều thiết bị phân tán, không có cách nào quản lý tập trung và tự động hóa hiệu quả.</p>
                </div>
                <div class="problem-card reveal">
                    <div class="problem-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <h3>Lo lắng về an ninh</h3>
                    <p>Không thể giám sát ngôi nhà liên tục, lo lắng mất trộm khi vắng nhà hoặc đi công tác.</p>
                </div>
                <div class="problem-card reveal">
                    <div class="problem-icon">
                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                            <line x1="9" y1="9" x2="9.01" y2="9" />
                            <line x1="15" y1="9" x2="15.01" y2="9" />
                        </svg>
                    </div>
                    <h3>Không thể giám sát từ xa</h3>
                    <p>Bạn không biết điều gì đang xảy ra trong nhà khi bạn đang ở nơi làm việc hoặc đi du lịch.</p>
                </div>
            </div>
        </div>
    </section>
`;
