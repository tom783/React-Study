import React from "react";

const Counter = ({ i_f, d_f, num }) => {
  return (
    <div>
      <p>{num}</p>
      <button onClick={i_f}>up</button>
      <button onClick={d_f}>down</button>
    </div>
  );
};

Counter.defaultProps = {
  num: 0
};

export default Counter;
