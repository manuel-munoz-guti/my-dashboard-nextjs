
'use client'

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne, initApp } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
    value: number;
}

export interface CounterResponse {
    count: number;
}

const getApiCounter = async():Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then( resp => resp.json() );

    return data;
}

export const CartCounter = ({ value = 0 }: Props) => {

    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getApiCounter()
            .then( ({ count }) => dispatch(initApp(count)));
    }, [dispatch])
    
    const handleIncrease = () => dispatch(addOne());

    const handleDecrease = () => dispatch(substractOne());

    return (
        <>
            <span className="text-9xl">{count}</span>
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
