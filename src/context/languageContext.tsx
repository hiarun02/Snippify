import { createContext, useState } from "react";

type LanguageContextType = {
    language: string;
    setLanguage: (language: string) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState("javascript");
    return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};