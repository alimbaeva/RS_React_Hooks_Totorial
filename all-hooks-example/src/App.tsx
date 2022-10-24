import React from 'react';
// import { SimpleCounter } from './components/SimpleCounter/SimpleCounter';
// import { CounterWithLogger } from './components/CounterWithLogger/CounterWithLogger';
// import { CounterWithTimer } from './components/CounterWithTimer/CounterWithTimer';
// import { KnownResize } from './components/KnownResize/KnownResize';
// import { NotSoSimpleCounter } from './components/NotSoSimpleCounter/NotSoSimpleCounter';
// import { Contextcounter } from './components/Contextcounter/Contextcounter';
import { LangContext } from './common/LangContext';
// import { KnownWidthOnDeman } from './components/KnownWidthOnDeman/KnownWidthOnDeman';
import { DifficultState } from './components/DifficultState/DifficultState';

import './app.css';

function App() {
  return (
    <LangContext.Provider value="en">
      <div className="App">
        {/* useState - hook */}
        {/* <SimpleCounter /> */}

        {/* useEffect - hook */}
        {/* <CounterWithLogger /> */}

        {/* useEffect - hook clear */}
        {/* <CounterWithTimer /> */}

        {/* useCallback, useMemo - hook */}
        {/* <KnownResize /> */}

        {/* useContext - hook */}
        {/* <NotSoSimpleCounter lang={'en'} /> */}
        {/* <LangContext.Provider value="en">
          <Contextcounter />
        </LangContext.Provider> */}
        {/* <Contextcounter /> */}

        {/* useRef - hook */}
        {/* <KnownWidthOnDeman /> */}
        <DifficultState />
      </div>
    </LangContext.Provider>
  );
}

export default App;
