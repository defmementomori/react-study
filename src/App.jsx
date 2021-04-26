import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa", "iiiiiii"]);

  return (
    <>
      <div className="input-area">
        <input id="add-text" type="text" placeholder="type todo" />
        <button id="add-button">追加</button>
      </div>
      <div className="incomplete-area">
        <p>完了</p>
      </div>
      <div className="complete-area">
        <p>未完了</p>
        <div className="list-row">
          <li>aaa</li>
          <button id="done-button">完了</button>
          <button id="delete-button">削除</button>
        </div>
      </div>
    </>
  );
};
