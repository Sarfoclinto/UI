function Stage({ title, number, isactive, SetIsActive }) {
  const style = {
    color: isactive ? "rgb(52, 32, 86)" : "lightgray",
  };
  const btnStyle = {
    backgroundColor: isactive ? "rgb(52, 32, 86)" : "lightgray",
  };
  return (
    <div className="stage">
      <button style={btnStyle} onClick={SetIsActive((prev) => !prev)}>
        {number}
      </button>
      <h4 style={style}>{title}</h4>
      <hr width="70px" />
    </div>
  );
}

export default Stage;
