import {createContext, useState} from "react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export default function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = useState("");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
