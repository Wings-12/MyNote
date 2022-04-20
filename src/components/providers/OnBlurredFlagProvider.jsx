import { createContext, useState } from "react";

export const OnBlurredFlagContext = createContext(false);

export const OnBlurredFlagProvider = (props) => {
  const { children } = props;
  const [onBlurredFlag, setOnBlurredFlag] = useState(false);

  return (
    <OnBlurredFlagContext.Provider value={{ onBlurredFlag, setOnBlurredFlag }}>
      {children}
    </OnBlurredFlagContext.Provider>
  );
};
