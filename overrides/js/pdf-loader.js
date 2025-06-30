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

function loadPdf(containerId, pdfSrc, language, promptText, previewButtonText, downloadButtonText) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const previewPdfSrc = pdfSrc.replace('.pdf', '_small.pdf');

    container.innerHTML = `
        <div style="width: 100%; display: flex; justify-content: center; margin: 20px 0;">
            <div style="width: 80%; text-align: center; padding: 20px; border: 2px dashed #ccc; border-radius: 8px; background-color: #f9f9f9;">
                <p style="margin: 0 0 15px 0; color: #666; font-size: 14px;">${promptText}</p>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button onclick="showPdf('${containerId}', '${previewPdfSrc}', '${language}')" 
                            style="padding: 10px 20px; background-color: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        ${previewButtonText}
                    </button>
                    <button onclick="downloadPdf('${pdfSrc}')" 
                            style="padding: 10px 20px; background-color: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        ${downloadButtonText}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function showPdf(containerId, pdfSrc, language) {
    const container = document.getElementById(containerId);
    const lang = langConfig[language];
    
    const absolutePdfSrc = new URL(pdfSrc, window.location.href).href;
    const viewerUrl = `/pdfjs-5.3.31-dist/web/viewer.html?file=${encodeURIComponent(absolutePdfSrc)}`;
    
    container.innerHTML = `
        <div style="width: 100%; display: flex; justify-content: center; margin: 20px 0;">
            <iframe src="${viewerUrl}" 
                    style="width: 80%; aspect-ratio: 1 / 1.414; border: 1px solid #ccc;" 
                    frameborder="0">
                <p>${lang.downloadText} <a href="${pdfSrc}">${lang.downloadLink}</a></p>
            </iframe>
        </div>
    `;
}

function downloadPdf(pdfSrc) {
    const link = document.createElement('a');
    link.href = pdfSrc;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-pdf-loader]').forEach(container => {
        const pdfSrc = container.getAttribute('data-pdf-src');
        const language = container.getAttribute('data-language');
        const promptText = container.getAttribute('data-prompt-text');
        const previewButtonText = container.getAttribute('data-preview-button-text');
        const downloadButtonText = container.getAttribute('data-download-button-text');
        
        if (pdfSrc && language && promptText && previewButtonText && downloadButtonText) {
            loadPdf(container.id, pdfSrc, language, promptText, previewButtonText, downloadButtonText);
        }
    });
});
