import React, { createContext, useRef, ReactNode } from 'react';

type CodePreviewContextType = {
    setPreviewRef: (node: HTMLDivElement | null) => void;
    getPreviewRef: () => HTMLDivElement | null;
};

export const CodePreviewContext = createContext<CodePreviewContextType | null>(null);

export function CodePreviewProvider({ children }: { children: ReactNode }) {
    const previewRef = useRef<HTMLDivElement | null>(null);

    const value = {
        setPreviewRef: (node: HTMLDivElement | null) => {
            previewRef.current = node;
        },
        getPreviewRef: () => previewRef.current,
    };

    return (
        <CodePreviewContext.Provider value={value}>
            {children}
        </CodePreviewContext.Provider>
    );
}
