import { createContext, useState } from "react";

type FontSizeContextType = {
    fontSize: number;
    setFontSize: (fontSize: number) => void;
}

export const fontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export default function FontSizeProvider({ children }: { children: React.ReactNode }) {
    const [fontSize, setFontSize] = useState(14);
    return <fontSizeContext.Provider value={{ fontSize, setFontSize }}>{children}</fontSizeContext.Provider>;
};