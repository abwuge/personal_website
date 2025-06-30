const langConfig = {
    zh: {
        downloadText: '您的浏览器不支持PDF预览。',
        downloadLink: '下载PDF'
    },
    en: {
        downloadText: 'Your browser does not support PDF preview.',
        downloadLink: 'Download PDF'
    }
};

function loadPdf(containerId, pdfSrc, language, promptText, buttonText) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <div style="width: 100%; display: flex; justify-content: center; margin: 20px 0;">
            <div style="width: 80%; text-align: center; padding: 20px; border: 2px dashed #ccc; border-radius: 8px; background-color: #f9f9f9;">
                <p style="margin: 0 0 15px 0; color: #666; font-size: 14px;">${promptText}</p>
                <button onclick="showPdf('${containerId}', '${pdfSrc}', '${language}')" 
                        style="padding: 10px 20px; background-color: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    ${buttonText}
                </button>
            </div>
        </div>
    `;
}

function showPdf(containerId, pdfSrc, language) {
    const container = document.getElementById(containerId);
    const lang = langConfig[language];
    
    container.innerHTML = `
        <div style="width: 100%; display: flex; justify-content: center; margin: 20px 0;">
            <iframe src="${pdfSrc}" 
                    style="width: 80%; aspect-ratio: 1 / 1.414; border: 1px solid #ccc;" 
                    type="application/pdf">
                <p>${lang.downloadText} <a href="${pdfSrc}">${lang.downloadLink}</a>.</p>
            </iframe>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-pdf-loader]').forEach(container => {
        const pdfSrc = container.getAttribute('data-pdf-src');
        const language = container.getAttribute('data-language');
        const promptText = container.getAttribute('data-prompt-text');
        const buttonText = container.getAttribute('data-button-text');
        
        if (pdfSrc && language && promptText && buttonText) {
            loadPdf(container.id, pdfSrc, language, promptText, buttonText);
        }
    });
});
