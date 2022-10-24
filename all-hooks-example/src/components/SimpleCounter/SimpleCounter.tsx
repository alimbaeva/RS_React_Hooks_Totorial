import React, { FC, useState } from 'react';
import './SimpleCounter.css';

export const SimpleCounter: FC = function SimpleCounter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="count">
      <h4>
        SimpleCounter: <span>{count}</span>
      </h4>

      <button onClick={() => setCount(count + 1)}>Add + 1</button>
      <button onClick={() => setCount(count - 1)}>Minus -- 1</button>
      <button onClick={() => setCount(count + 2)}>Add + 2</button>
      <button onClick={() => setCount(count - 2)}>Minus -- 2</button>
      <button onClick={() => setCount(count + 3)}>Add + 3</button>
      <button onClick={() => setCount(count - 3)}>Minus -- 3</button>
    </div>
  );
};
