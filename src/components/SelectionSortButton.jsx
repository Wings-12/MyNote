import SelectionSortButtonScss from "./SelectionSortButton.module.scss";

export const SelectionSortButton = (props) => {
  const sortNotesByDateWithSelectionSort = () => {
    for (var i = 0; i < props.dataToSort.length - 1; i++) {
      //最小値を探すアルゴリズム
      //先頭の値を暫定の最小値として初期設定する
      var min = props.dataToSort[i];
      //先頭の位置を保存する
      var k = i;

      //隣の位置から最後まで、最小値との比較を繰り返す
      for (var j = i + 1; j < props.dataToSort.length; j++) {
        //比較して最小値を更新するif文
        if (min > props.dataToSort[j]) {
          min = props.dataToSort[j];
          k = j;
        }
      }
      //交換するアルゴリズム
      //「先頭の値」と「最小値の値」を交換する
      var tmp = props.dataToSort[i];
      props.dataToSort[i] = props.dataToSort[k];
      props.dataToSort[k] = tmp;
    }
  };
  return (
    <button
      type="button"
      name="選択ソートボタン"
      className={SelectionSortButtonScss.btn}
      onClick={sortNotesByDateWithSelectionSort()}
    />
  );
};
