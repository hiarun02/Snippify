export default async function exportAsImage(node: HTMLElement) {
    if (!node) {
        return;
    }

    try {
        const { toPng } = await import('html-to-image');
        const dataUrl = await toPng(node, { quality: 0.89 });
        const link = document.createElement("a");
        link.download = "code.png";
        link.href = dataUrl;
        link.click();
    } catch (err) {
        console.error("Could not export as image", err);
    }
};