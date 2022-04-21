import { Fragment } from "react";
import { useContext } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Note } from "./components/Note";
import { OnBlurredFlagContext } from "./components/providers/OnBlurredFlagProvider";
import { IsTextFlagContext } from "./components/providers/IsTextFlagProvider";

export const App = () => {
  const { onBlurredFlag, setOnBlurredFlag } = useContext(OnBlurredFlagContext);
  const { isText, setIsTextFlag } = useContext(IsTextFlagContext);
  const noteList = [];
  let count = -1;

  return (
    <Fragment>
      <Header></Header>
      <Footer></Footer>
      {(() => {
        noteList.unshift(<Note key={count++}></Note>);
        if (onBlurredFlag === true && isText === true) {
          noteList.unshift(<Note key={count++}></Note>);
        }

        return noteList;
      })()}
    </Fragment>
  );
};
