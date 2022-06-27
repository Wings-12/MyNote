import NoteModuleScss from "./Note.module.scss";
import { useContext, useEffect, useState } from "react";
import { OnBlurredFlagContext } from "./providers/OnBlurredFlagProvider";
import { IsTextFlagContext } from "./providers/IsTextFlagProvider";
import db from "../firebase";
import { collection } from "firebase/firestore";

export const Note = (props) => {
  const { onBlurredFlag, setOnBlurredFlag } = useContext(OnBlurredFlagContext);
  const { isText, setIsTextFlag } = useContext(IsTextFlagContext);

  const checkIsText = (text) => {
    if (text.target.value != "") {
      setIsTextFlag(true);
    } else {
      setIsTextFlag(false);
    }
  };

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const postData = collection(db, )
  // });

  return (
    <div className={NoteModuleScss.below}>
      <input
        type="text"
        placeholder="タイトルを入力"
        className={NoteModuleScss.header}
        onFocus={() => setOnBlurredFlag(false)}
        onBlur={() => setOnBlurredFlag(true)}
        onChange={(text) => {
          checkIsText(text);
        }}
      />
      <p></p>
      <textarea
        rows="4"
        cols="25"
        className={NoteModuleScss.body}
        onFocus={() => setOnBlurredFlag(false)}
        onBlur={() => setOnBlurredFlag(true)}
      />
    </div>
  );
};
