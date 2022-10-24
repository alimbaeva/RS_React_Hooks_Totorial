import React, { useState } from 'react';
import { SelectedLanguageLabel } from '../SelectedLanguageLabel/SelectedLanguageLabel';
import './NotSoSimpleCounter.css';

interface NotSoSimpleCounterProps {
  lang: 'en' | 'ru';
}

export const NotSoSimpleCounter = function NotSoSimpleCounter({ lang }: NotSoSimpleCounterProps) {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="NotSoSimpleCounter">
      <h4>
        NotSoSimpleCounter: <span>{count}</span>
      </h4>

      <button onClick={() => setCount(count + 1)}>Add +</button>

      <SelectedLanguageLabel lang={lang} />
    </div>
  );
};
