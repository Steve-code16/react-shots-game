import React from 'react';

export default function BoardOptions({ boardType, gridType }) {
    const options = [{ value: 9, text: "3x3" }, { value: 16, text: "4x4" }];

    return (
        <div className='p-5 flex justify-between gap-2'>
            {options.map(({ value, text }, index) => {
                const selectedGrid = gridType === value;
                return <button key={index} className='bg-blue-500 w-full py-5 rounded-md text-white disabled:bg-blue-900' disabled={selectedGrid} onClick={() => boardType(value)}>{text}</button>;
            })}
        </div>
    );
}
