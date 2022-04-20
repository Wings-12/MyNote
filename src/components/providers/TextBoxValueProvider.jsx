import { createContext, useState } from "react";

export const TextBoxValueContext = createContext("");

export const TextBoxValueProvider = (props) => {
  const { children } = props;
  const [textBoxValue, setTextBoxValue] = useState("");

  return (
    <TextBoxValueContext.Provider value={{ textBoxValue, setTextBoxValue }}>
      {children}
    </TextBoxValueContext.Provider>
  );
};
