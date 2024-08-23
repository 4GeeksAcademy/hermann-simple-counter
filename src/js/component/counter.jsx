import React, {useState, useEffect}from 'react';

export const Tempo = () => {
    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect (() => {
        const intervalId = setInterval(() => {
            setCounter((prev) => prev + 1);
        }, 1000);
        
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const displayNumber = String(counter).padStart(6, '0').split('');

    const handleStart = () => {
        setCounter(0);
    };

    return (
        <div className="container">
            <div className="counter">
            {displayNumber.map((digit, index) => (
                <div key={index}>
                    {digit}
                </div>
            ))}
            </div>
            <button type="button" class="btn btn-outline-success">Start</button>
            <button type="button" class="btn btn-outline-danger" onClick={handleStart}>Reset</button>
        </div>
    );
}