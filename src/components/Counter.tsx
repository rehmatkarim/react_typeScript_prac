import React, { useState } from "react";

type countType = {
  count: number;
};

const Counter: React.VoidFunctionComponent<countType> = ({ count }) => {
  const [value, setValue] = useState(count);
  return (
    <div>
        {value>=10 && alert('number is too large')}
      <p>{value}</p>
      <button onClick={(e) => setValue(value + 1)}>Increment</button>
      <button onClick={(e) => setValue(value - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
