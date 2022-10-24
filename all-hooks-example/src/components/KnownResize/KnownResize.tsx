import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import './KnownResize.css';

export const KnownResize: FC = function KnownResize() {
  const [count, setCount] = useState<number>(1);
  const [width, setWidth] = useState<number>(0);

  const onResize = useCallback(() => {
    console.log('Size changed, current count = ', count);

    setWidth(document.body.getBoundingClientRect().width);
  }, [count]);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  const factorial = useMemo(() => {
    console.log('[factorial calculation]');
    let result = 1;

    for (let i = 1; i <= count; i++) {
      result *= i;
    }

    return result;
  }, [count]);

  console.log('[render]: ', width);

  return (
    <div className="KnownResize">
      <h4>
        KnownResize: <span>{count}</span>
      </h4>

      <button onClick={() => setCount(count + 1)}>Add +</button>
      <h4>
        {count}! = {factorial}
      </h4>
      <h4>
        Width Window:
        <span>{width}</span>
      </h4>
    </div>
  );
};
