import { Fragment } from "react";
import { useContext, useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Note } from "./components/Note";
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
      () => setKeyIndex(new_keyIndex);
      const new_keyList = [new_keyIndex, ...keyList];
      () => setKeyList(new_keyList);

      return new_keyList.map(setList);
    }
    return keyList.map(setList);
  };

  return (
    <Fragment>
      <Header></Header>
      {/* {makeNote()} */}
      <Note></Note>
      <Footer></Footer>
    </Fragment>
  );
};
