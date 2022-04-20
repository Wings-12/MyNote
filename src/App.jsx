import { Fragment } from "react";
import { useContext } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Note } from "./components/Note";
import { OnBlurredFlagContext } from "./components/providers/OnBlurredFlagProvider";
import { IsTextFlagContext } from "./components/providers/IsTextFlagProvider";
import { TextBoxValueContext } from "./components/providers/TextBoxValueProvider";

export const App = () => {
  const { onBlurredFlag, setOnBlurredFlag } = useContext(OnBlurredFlagContext);
  const { isText, setIsTextFlag } = useContext(IsTextFlagContext);
  const { textBoxValue, setTextBoxValue } = useContext(TextBoxValueContext);

  const noteList = [];

  noteList.push(<Note></Note>);

  const defaultNote = noteList[0];

  const copyDefaultNote = () => {
    const tempNote = defaultNote;
    noteList.push(tempNote);
    return noteList.slice(-1)[0];
  };

  return (
    <Fragment>
      <Header></Header>
      <Footer></Footer>
      {defaultNote}
      {(() => {
        if (onBlurredFlag === true && isText === true) {
          return copyDefaultNote();
        }
      })()}
    </Fragment>
  );
};
