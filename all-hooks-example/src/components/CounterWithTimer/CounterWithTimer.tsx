import React, { FC, useEffect, useState } from 'react';
import './CounterWithTimer.css';

export const CounterWithTimer: FC = function CounterWithTimer() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let i = 1;

    const timer = setInterval(() => {
      console.log(`[Effect interval ${i}]: ${count}`);
      i++;
    }, 2000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, [count]);

  useEffect(() => {
    function onResize() {
      console.log('Size changed? current count = ', count);
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [count]);

  console.log('Render with count = ', count);

  return (
    <div className="count">
      <h4>
        CounterWithTimer: <span>{count}</span>
      </h4>

      <button onClick={() => setCount(count + 1)}>Add +</button>
    </div>
  );
};
