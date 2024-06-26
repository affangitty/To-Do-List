import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.Abc} onKeyDown={props.AB} type="text" value={props.inputTex} />
      <button onClick={() => props.BC(props.inputTex)}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
