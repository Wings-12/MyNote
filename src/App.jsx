import { Fragment } from "react";
import { useContext, useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Note } from "./components/Note";
import { SelectionSortButton } from "./components/SelectionSortButton";
import { Footer } from "./components/Footer";
import { OnBlurredFlagContext } from "./components/providers/OnBlurredFlagProvider";
import { IsTextFlagContext } from "./components/providers/IsTextFlagProvider";

export const App = () => {
  const { onBlurredFlag, setOnBlurredFlag } = useContext(OnBlurredFlagContext);
  const { isText, setIsTextFlag } = useContext(IsTextFlagContext);

  const [keyIndex, setKeyIndex] = useState(0);
  const [keyList, setKeyList] = useState([]);

  const initializeList = () => {
    setKeyList((prevList) => [keyIndex, ...prevList]); // わからないところ：1. useStateの使い方。 2. []内で何をやっているのか？
  };

  useEffect(() => initializeList(), []); // コンパイルする毎にaddListされる？　←ていうかこれ問題？コメント打たなければ問題ない？
  // 結論：useEffectがコンパイルする毎に呼ばれるのはなぜか調べる。
  // ホットリロードがセーブする毎に走るので、テキストを打つごとにセーブ処理が走ってホットリロードされるので、useEffectがその度に呼ばれる。

  const setList = (value) => <Note key={value}></Note>;

  const makeNote = () => {
    if (onBlurredFlag === true && isText === true) {
      const new_keyIndex = keyIndex + 1;
      () => {
        return setKeyIndex(new_keyIndex);
      }; // returnできてないから更新できない？
      const new_keyList = [new_keyIndex, ...keyList];
      () => {
        return setKeyList(new_keyList);
      }; // returnできてないから更新できない？

      // これを
      return new_keyList.map(setList);
    }
    return keyList.map(setList);
  };

  const displayStyle = { display: "flex" };

  const noteNumbers = [0, 1, 2, 3];
  const noteDate = ["2000/01/01", "2000/02/02", "2020/03/03", "2020/04/04"];
  const makeNoteList = () => {
    return noteNumbers
      .sort((a, b) => {
        return a < b ? 1 : -1;
      })
      .map((noteNumber) => {
        return <Note number={noteNumber} date={noteDate[noteNumber]}></Note>; // たぶんコンポーネント書き換えるのにuseState使わないと再レンダリングが起きなかったりするので、間違っている。
      });
  };

  const noteList = makeNoteList();

  return (
    <Fragment>
      <Header></Header>
      {/* {makeNote()} */}
      <div style={displayStyle}>{noteList}</div>
      {/* <SelectionSortButton dataToSort={noteList}></SelectionSortButton> */}
      <Footer></Footer>
    </Fragment>
  );
};
