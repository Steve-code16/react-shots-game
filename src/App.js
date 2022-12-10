import React, { useState } from 'react';
// import { GiGlassShot } from 'react-icons/gi';
// import { CiBeerMugFull } from 'react-icons/ci';
import Board from './components/Board';
import Drink from './components/Drink';

function App() {
  const [phuzaTime, setPhuzaTime] = useState(false);

  return (
    <div className='bg-slate-800 min-h-screen w-full flex justify-center items-center'>
      <div className='w-full'>
        {phuzaTime ? <Drink setPhuzaTime={setPhuzaTime} /> : <Board setPhuzaTime={setPhuzaTime} />}
      </div>
    </div>
  );
}

export default App;
