const langConfig = {
    zh: {
        downloadText: "您的浏览器不支持PDF预览。",
        downloadLink: "下载PDF",
    },
    en: {
        downloadText: "Your browser does not support PDF preview.",
        downloadLink: "Download PDF",
    },
};

function loadPdf(
    containerId,
    pdfSrc,
    language,
    promptText,
    previewButtonText,
    downloadButtonText
) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const previewPdfSrc = downloadButtonText ? pdfSrc.replace(".pdf", "_small.pdf") : pdfSrc;

    let buttonsHtml = `
        <button onclick="showPdf('${containerId}', '${previewPdfSrc}', '${language}')" 
                style="padding: 10px 20px; background-color: var(--md-primary-fg-color, #1976d2); color: white; border: none; border-radius: 4px; cursor: pointer;">
            ${previewButtonText}
        </button>
    `;

    if (downloadButtonText) {
        buttonsHtml += `
            <button onclick="downloadPdf('${pdfSrc}')" 
                    style="padding: 10px 20px; background-color: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer;">
                ${downloadButtonText}
            </button>
        `;
    }

    container.innerHTML = `
    <div style="width: 80%; margin: 20px auto; text-align: center; padding: 20px; border: 2px dashed var(--md-default-fg-color--lighter, #ccc); border-radius: 8px; background-color: transparent;">
        <p style="margin: 0 0 15px 0; color: var(--md-default-fg-color--light, #666); font-size: 14px;">${promptText}</p>
        <div style="display: flex; gap: 15px; justify-content: center;">
            ${buttonsHtml}
        </div>
    </div>
`;
}

function showPdf(containerId, pdfSrc, language) {
    const container = document.getElementById(containerId);
    const lang = langConfig[language];

    const absolutePdfSrc = new URL(pdfSrc, window.location.href).href;
    const viewerUrl = `/pdfjs-5.3.31-dist/web/viewer.html?file=${encodeURIComponent(
        absolutePdfSrc
    )}`;

    container.innerHTML = `
    <iframe src="${viewerUrl}" 
            style="width: 80%; aspect-ratio: 1 / 1.414; border: 1px solid var(--md-default-fg-color--lighter, #ccc); margin: 20px auto; display: block;" 
            frameborder="0">
        <p>${lang.downloadText} <a href="${pdfSrc}">${lang.downloadLink}</a></p>
    </iframe>
`;
}

function downloadPdf(pdfSrc) {
    const link = document.createElement("a");
    link.href = pdfSrc;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-pdf-loader]").forEach((container) => {
        const pdfSrc = container.getAttribute("data-pdf-src");
        const language = container.getAttribute("data-language");
        const promptText = container.getAttribute("data-prompt-text");
        const previewButtonText = container.getAttribute(
            "data-preview-button-text"
        );
        const downloadButtonText = container.getAttribute(
            "data-download-button-text"
        );

        if (pdfSrc && language && promptText && previewButtonText) {
            loadPdf(
                container.id,
                pdfSrc,
                language,
                promptText,
                previewButtonText,
                downloadButtonText
            );
        }
    });
});
