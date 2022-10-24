import React, { FC, useCallback, useReducer, useRef } from 'react';
import './DifficultState.css';

interface ActionType {
  type: string;
  payload?: number;
}

function wordContReducer(state = 0, action: ActionType) {
  switch (action.type) {
    case 'add': {
      if (action.payload) {
        return state + action.payload;
      }
      return 0;
    }

    case 'reset': {
      return 0;
    }

    default: {
      return state;
    }
  }
}

export const DifficultState: FC = function DifficultState() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [wordCount, dispatch] = useReducer(wordContReducer, 0);

  const processInput = useCallback(() => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;

      if (inputValue) {
        const wordCount = inputValue.split(/ +/).length;

        console.log(`You input ${inputValue}, word count = ${wordCount}`);

        dispatch({ type: 'add', payload: wordCount });
      }

      inputRef.current.value = '';
    }
  }, []);

  const resetCounter = useCallback(() => {
    dispatch({ type: 'reset' });
  }, []);

  console.log('[render]');

  return (
    <div>
      <h4>DifficultState: word count = {wordCount}</h4>

      <input ref={inputRef} />

      <button onClick={processInput}>Add words from input</button>

      <button onClick={resetCounter}>Reset counter</button>
    </div>
  );
};
