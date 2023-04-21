import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./Demo/DemoOutput";
import DemoList from "./components/UI/Button/DemoList";

import "./App.css";

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);
  // console.log("App Runn");

  // const toggle = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prevState) => !prevState);
  //   }
  // }, [allowToggle]);

  // const allow = () => {
  //   setAllowToggle(true);
  // };
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  // const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      {/* <DemoOutput show={false} />
      <Button onClick={allow}>Allow</Button>
      <Button onClick={toggle}>Toggle</Button> */}
    </div>
  );
}

export default App;
