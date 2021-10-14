import React, { useState } from "react";
import "./styles/style.scss";

export const BaseApp = () => {
    const [counter, setCounter] = useState<number>(0);
    return (
        <div className="container">
            <div>
                <h1>Hello World!</h1>
                <h2>{counter}</h2>
                <div>
                    <button onClick={() => setCounter(counter + 1)}>Cool Counter! 😎👊</button>
                    <button onClick={() => setCounter(0)}>Reset 😥</button>
                </div>
            </div>
        </div>
    );
};
