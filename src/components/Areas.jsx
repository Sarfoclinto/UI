import React from "react";

function Areas({ name, src, disabled }) {
    const style = {
      color: disabled ? "lightgray" : "rgb(90, 63, 122)",
    };
  return (
    <button disabled={disabled} className="select-btn" style={style} >
      <img src={`src/assets/${src}.png`} alt="" />
      <p>{name}</p>
    </button>
  );
}

export default Areas;
