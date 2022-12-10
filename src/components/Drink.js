import React, { useEffect, useState } from 'react';
import { GiGlassShot } from 'react-icons/gi';
import { FiRotateCcw } from 'react-icons/fi';

export default function Drink({ setPhuzaTime }) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <>
            <div className='grid place-content-center p-5'>
                <FiRotateCcw className='text-4xl text-white' onClick={() => { setPhuzaTime(false); }} />
            </div>
            <div className='w-full grid place-content-center' style={{ height: "85vh" }}>
                <GiGlassShot className='text-6xl text-purple-500 transition-all duration-1000' style={{ transform: `scale(${animate ? 5 : 1})` }} />
            </div>
            <h1 className='text-white text-center'>PHUZA SDAGWA!</h1>
        </>
    );
}
