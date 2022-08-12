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

  // const makeNote = () => {
  //   if (onBlurredFlag === true && isText === true) {
  //     const new_keyIndex = keyIndex + 1;
  //     () => {
  //       return setKeyIndex(new_keyIndex);
  //     }; // returnできてないから更新できない？
  //     const new_keyList = [new_keyIndex, ...keyList];
  //     () => {
  //       return setKeyList(new_keyList);
  //     }; // returnできてないから更新できない？

  //     // これを
  //     return new_keyList.map(setList);
  //   }
  //   return keyList.map(setList);
  // };

  const [counterForIf, setcounterForIf] = useState(0);
  const [counterForNotIf, setcounterForNotIf] = useState(0);

  // バグ修正中
  const makeNote = () => {
    let new_keyList = [...keyList];
    if (onBlurredFlag === true && isText === true) {
      const new_keyIndex = keyIndex + 1;
      () => {
        setKeyIndex(new_keyIndex);
      };
      new_keyList = [new_keyIndex, ...keyList];
      () => {
        setKeyList(new_keyList);
      };

      // 更新後
      const new_counterForIf = counterForIf + 1; // カウントアップしてコンソールに何回処理が呼ばれているか確認しようと思ったが、useStateが更新されないので、確認できなかった。
      () => {
        setcounterForIf(new_counterForIf);
      };
      console.log("更新ありのnew_keyList" + new_counterForIf); // カウントアップしてコンソールに何回処理が呼ばれているか確認しようと思ったが、useStateが更新されないので、確認できなかった。
      console.log(...new_keyList);
      console.log(...keyList);

      // これを
      return new_keyList.map(setList);
    }

    // 更新なし
    const new_counterForNotIf = counterForNotIf + 1;
    () => {
      setcounterForIf(new_counterForNotIf);
    };
    console.log("更新なしのnew_keyList" + counterForNotIf);
    console.log(...new_keyList);
    console.log(...keyList);

    return new_keyList.map(setList);
  };

  const displayStyle = { display: "flex" };

  // makeNoteの処理を後でNote.jsxの中で作って複製するように作る。また、下のreturn文の通り<Note></Note>だけここは書く　理由：以下の箇所でreturnするのは見ない書き方のため、バグっている可能性があるから。
  return (
    <Fragment>
      <Header></Header>
      {/* {makeNote()} */}
      <Note></Note>
      {/* <div style={displayStyle}>{noteList}</div> */}
      {/* <SelectionSortButton dataToSort={noteList}></SelectionSortButton> */}
      <Footer></Footer>
    </Fragment>
  );
};
