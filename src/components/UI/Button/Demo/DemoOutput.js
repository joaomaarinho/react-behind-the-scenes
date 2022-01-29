import React from "react";

function DemoOutput(props) {
  console.log("demooutput running");
  return <p>{props.show ? "This is new" : ""}</p>;
}

export default React.memo(DemoOutput);
