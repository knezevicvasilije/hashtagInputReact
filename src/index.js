import React from "react";
import ReactDOM from "react-dom";
import InputTag from "./components/InputTag";

import "./styles.css";

function App() {
  const [tags, setTags] = React.useState([]);

  const onAddTag = (tag) => {
    setTags([...tags, tag]);
  };

  const onDeleteTag = (tag) => {
    alert(`deleting ${tag}`);
    let remainingTags = tags.filter((t) => {
      return t !== tag;
    });
    setTags([...remainingTags]);
  };
  const showAll = () => {
    console.log(tags);
  };
  return (
    <div>
      <InputTag
        onAddTag={onAddTag}
        onDeleteTag={onDeleteTag}
        defaultTags={tags}
        placeholder="enter tags separated by comma"
      />

      <button onClick={showAll}>button</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
