
'use client'

import { useState } from "react";


interface Props {
    value: number;
}

export const CartCounter = ({ value = 0 }: Props) => {

    const [counter, setCounter] = useState(value);

    const handleIncrease = () => setCounter(counter + 1);

    const handleDecrease = () => setCounter(counter - 1);
    return (
        <>
            <span className="text-9xl">{counter}</span>
            <div className="flex">
                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={handleIncrease}
                >
                    +1
                </button>
                <button
                    onClick={handleDecrease}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div>
        </>
    )
}
