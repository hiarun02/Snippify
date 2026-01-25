import { useContext } from "react";
import { CodePreviewContext } from "@/context/codePreviewContext";

export const useCodePreview = () => {
    const context = useContext(CodePreviewContext);
    if (!context) {
        throw new Error('useCodePreview must be used within a CodePreviewProvider');
    }
    return context;
};