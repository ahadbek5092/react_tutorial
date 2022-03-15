import React from "react";

function MemoComp({ name }) {
  console.log("memo component");
  return <div>MemoComp {name}</div>;
}

export default React.memo(MemoComp);
