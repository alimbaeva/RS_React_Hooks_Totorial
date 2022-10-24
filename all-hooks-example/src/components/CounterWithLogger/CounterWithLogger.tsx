import React, { FC, useState, useEffect } from 'react';
import './CounterWithLogger.css';

export const CounterWithLogger: FC = function CounterWithLogger() {
  const [count, setCount] = useState<number>(0);
  const [animal, setAnimal] = useState<string>('dog');

  useEffect(() => {
    console.log('effect with count = ', count);

    document.title = `${count} clicks`;
  }, [count]);

  useEffect(() => {
    console.log('effect with animal = ', animal);
  }, [animal]);

  console.log('render with count = ', count);

  return (
    <div className="CounterWithLogger">
      <h4>
        CounterWithLogger: <span>{count}</span>
      </h4>
      <button onClick={() => setCount(count + 1)}>Add +</button>
      <div style={{ marginTop: 24 }}>
        <span className="span">My favorite animal:</span>
        &nbsp;
        <select
          onChange={(event) => {
            setAnimal(event.target.value);
          }}
          value={animal}
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="parrot">Parrot</option>
        </select>
      </div>
    </div>
  );
};
