"use client";

import GradientProvider from "@/context/gradientContext";
import ThemeProvider from "@/context/themeContext";
import LanguageProvider from "@/context/languageContext";
import FontSizeProvider from "@/context/fontSizeContext";
import {BackgroundProvider} from "@/context/backgroundContext";
import {CodePreviewProvider} from "@/context/codePreviewContext";

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <GradientProvider>
      <ThemeProvider>
        <LanguageProvider>
          <FontSizeProvider>
            <BackgroundProvider>
              <CodePreviewProvider>{children}</CodePreviewProvider>
            </BackgroundProvider>
          </FontSizeProvider>
        </LanguageProvider>
      </ThemeProvider>
    </GradientProvider>
  );
}
