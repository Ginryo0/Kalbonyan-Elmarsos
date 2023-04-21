import React from "react";
import MyParagrpah from "./MyParagraph";
function DemoOutput(props) {
  console.log("Demo runnin");
  return <MyParagrpah>{props.show ? "PARAGARPAH!" : ""}</MyParagrpah>;
}

export default React.memo(DemoOutput);
