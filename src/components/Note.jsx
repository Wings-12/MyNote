import NoteModuleScss from "./Note.module.scss";
import { useContext } from "react";
import { OnBlurredFlagContext } from "./providers/OnBlurredFlagProvider";
import { IsTextFlagContext } from "./providers/IsTextFlagProvider";

export const Note = (props) => {
  const { onBlurredFlag, setOnBlurredFlag } = useContext(OnBlurredFlagContext);
  const { isText, setIsTextFlag } = useContext(IsTextFlagContext);

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
