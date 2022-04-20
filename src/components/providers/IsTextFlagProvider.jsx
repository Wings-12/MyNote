import { createContext, useState } from "react";

export const IsTextFlagContext = createContext(false);

export const IsTextFlagProvider = (props) => {
  const { children } = props;
  const [isText, setIsTextFlag] = useState(false);

  return (
    <IsTextFlagContext.Provider value={{ isText, setIsTextFlag }}>
      {children}
    </IsTextFlagContext.Provider>
  );
};
