import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  console.log(inputText);
  document.getElementById("add-text").value = "";
  createImcompleteList(inputText);
};

const deleteButton = (pushedButton) => {
  pushedButton.remove();
};

const createImcompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  const li = document.createElement("li");
  li.innerText = text;

  document.getElementById("list-imcomplete").appendChild(div);

  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    deleteButton(compButton.parentNode);
    // 完了リストに追加する
    const addTarget = compButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    console.log(text);
    addTarget.textContent = null;
    console.log(addTarget);
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      createImcompleteList(backButton.parentNode.firstElementChild.innerText);
      deleteButton(backButton.parentNode);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);
    document.getElementById("list-complete").appendChild(addTarget);
    // document.getElementById("list-complete").appendChild(compButton.parentNode);
  });
  console.log(compButton);

  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    deleteButton(delButton.parentNode);
    // const deleteTarget = delButton.parentNode;
    // document.getElementById("list-imcomplete").removeChild(deleteTarget);
  });

  console.log(delButton);

  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(delButton);
  console.log(div);
};

// document
//   .getElementById("add-button")
//   .addEventListener("click", () => onClickAdd());

console.log("testa");
