import {createContext, useState} from "react";

type GradientContextType = {
  gradient: string;
  setGradient: (gradient: string) => void;
};

export const GradientContext = createContext<GradientContextType | undefined>(
  undefined,
);

export default function GradientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [gradient, setGradient] = useState(
    "linear-gradient( 177.5deg,  rgba(255,200,42,1) 28.3%, rgba(202,32,132,1) 79.8% )",
  );
  return (
    <GradientContext.Provider value={{gradient, setGradient}}>
      {children}
    </GradientContext.Provider>
  );
}
