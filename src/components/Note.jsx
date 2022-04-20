import NoteModuleScss from "./Note.module.scss";
import { useContext } from "react";
import { OnBlurredFlagContext } from "./providers/OnBlurredFlagProvider";
import { IsTextFlagContext } from "./providers/IsTextFlagProvider";
import { TextBoxValueContext } from "./providers/TextBoxValueProvider";

export const Note = () => {
  const { onBlurredFlag, setOnBlurredFlag } = useContext(OnBlurredFlagContext);
  const { isText, setIsTextFlag } = useContext(IsTextFlagContext);
  const { textBoxValue, setTextBoxValue } = useContext(TextBoxValueContext);

  const checkIsText = (text) => {
    if (text.target.value != null) {
      setIsTextFlag(true);
    } else {
      setIsTextFlag(false);
    }
  };

  const saveTextValue = (text) => {
    setTextBoxValue(text.target.value);
  };

  return (
    <div className={NoteModuleScss.below}>
      <input
        type="text"
        placeholder="タイトルを入力"
        defaultValue={textBoxValue}
        className={NoteModuleScss.header}
        onBlur={() => setOnBlurredFlag(true)}
        onChange={(text) => {
          checkIsText(text);
          saveTextValue(text);
        }}
      />
      <p></p>
      <textarea
        rows="4"
        cols="25"
        className={NoteModuleScss.body}
        onBlur={() => setOnBlurredFlag(true)}
      />
    </div>
  );
};
