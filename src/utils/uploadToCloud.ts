export default async function uploadToCloud(node: HTMLElement) {
    if (!node) {
        return;
    }

    try {
        const { toPng } = await import('html-to-image');
        const dataUrl = await toPng(node);
        const blob = await fetch(dataUrl).then((res) => res.blob());

        const formData = new FormData();
        formData.append("file", blob);
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || "");

        const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        if (response.ok) {
            return result.secure_url;
        }
        throw new Error("Image upload failed");
    } catch (err) {
        console.error("Could not export as image or upload to Cloud", err);
        throw err;
    }
};