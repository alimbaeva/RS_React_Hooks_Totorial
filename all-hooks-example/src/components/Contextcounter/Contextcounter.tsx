import React, { useContext, useState } from 'react';
import { SelectedLanguageLabel } from '../SelectedLanguageLabel/SelectedLanguageLabel';
import { LangContext } from '../../common/LangContext';
import '../NotSoSimpleCounter/NotSoSimpleCounter.css';

export const Contextcounter = function NotSoSimpleCounter() {
  const [count, setCount] = useState<number>(0);
  const lang = useContext(LangContext);

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
