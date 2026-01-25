import { fontSizeContext } from "@/context/fontSizeContext";
import { useContext } from "react";

export const useFontSize = () => {
    const context = useContext(fontSizeContext);
    if (!context) {
        throw new Error("useFontSize must be used within a FontSizeProvider");
    }
    return context;
}