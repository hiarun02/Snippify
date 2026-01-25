import {createContext, useState} from "react";

type BackgroundContextType = {
  isBackgroundHidden: boolean;
  setIsBackgroundHidden: (isBackgroundHidden: boolean) => void;
};

export const BackgroundContext = createContext<
  BackgroundContextType | undefined
>(undefined);

export const BackgroundProvider = ({children}: {children: React.ReactNode}) => {
  const [isBackgroundHidden, setIsBackgroundHidden] = useState(false);

  return (
    <BackgroundContext.Provider
      value={{isBackgroundHidden, setIsBackgroundHidden}}
    >
      {children}
    </BackgroundContext.Provider>
  );
};
