import React, { FC, useCallback, useEffect, useRef } from 'react';
import './KnownWidthOnDeman.css';

export const KnownWidthOnDeman: FC = function KnownWidthOnDeman() {
  const widthRef = useRef(0);

  const onResize = useCallback(() => {
    console.log('[On resize]');
    widthRef.current = document.body.getBoundingClientRect().width;
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  const logWidth = useCallback(() => {
    console.log('current width is', widthRef.current);
  }, []);

  console.log('[render]');

  return (
    <div>
      <h4>KnownWidthOnDeman</h4>

      <button onClick={logWidth}>Log width</button>
    </div>
  );
};
