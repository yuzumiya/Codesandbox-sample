import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // 分割代入　Destructuring assignmentで格納する配列
  const [imcompleteTodos, setImcompleteTodos] = useState([""]);

  // 完了のtoDo
  const [completeTodos, setCompleteTodos] = useState(["CCC", "DDD"]);

  //6/15 onClick用　imput.valueが配列に格納される挙動を関数にする。

  //6/19 imput.value関係も変化する値なのでuseStateを使う！
  const [todoText, setTodoText] = useState("");

  // 6/21 onChangeの中身 引数はeとかeventにすることが多い
  const onChangeTodoText = (event) => {
    // event = document.getElementById("inputTodo").value;
    setTodoText(event.target.value);
  };

  //クリック時の処理
  const onClickAdd = () => {
    // この時todoTextには入力値が入っている。
    console.log(imcompleteTodos);

    // テキストをincompleteTodosに加える＝新しい配列を作り、ふたつを結合する。
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);

    // テキストをtodoTextの配列から消す
    setTodoText("");
  };

  // ここからreturn!!
  return (
    //  return の中身は１つの要素なので<></>で囲む
    <>
      <div className="input_area">
        {/* onchangeに変更する内容を当てる */}
        <input
          // id="inputTodo"
          placeholder="todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="imcomplete_area" id="imcomplete_list">
        <p className="title">To Do List</p>
        <div>
          <ul>
            {/* 入れたいのはここ */}

            {imcompleteTodos.map((todo) => {
              return (
                <li>
                  {/* map関数などを利用してレンダリングするときはkeyをつけて何個めの要素なのかを区別する */}
                  <div className="list-row">
                    <p>{todo}</p>
                    <button class="complete_btn">完了</button>
                    <button class="delete_btn">削除</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="complete_area">
        <p className="title">Imcomplete List</p>
        <div>
          <ul>
            {completeTodos.map((todo) => {
              return (
                <li>
                  <div key="todo" className="list-row">
                    <p>{todo}</p>
                    <button class="return_btn">戻す</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </> //一つの囲い
  ); //retuen
}; //app
