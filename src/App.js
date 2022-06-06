import './App.css';
import Box from "./components/Box/Box";
import {useState} from "react";
import React from "react";
import CreateObjArray from "./components/CreateObjArray/CreateObjArray";
import Counter from "./components/Counter/Counter";
import GameArea from "./components/GameArea/GameArea";

const App = () => {
    const [boxes, setBoxes] = useState(CreateObjArray);
    const [count, setCount] = useState(0);

    const clickBox = (id) => {
        const boxCopy = boxes.map(box => {
            if (box.id === id && box.isItem === true) {
                stopGame();
                return {
                    ...boxes,
                    box: 'item',
                }
            } else if (box.id === id && box.isItem === false) {
                counter();
                return {
                    ...boxes,
                    box: 'miss',
                }
            } else {
                return box;
            }
        })
        setBoxes(boxCopy);
    };

    const counter = () => {
        setCount(count + 1);
    };

    const stopGame = () => {
        alert('U have found item');
    };

    const reset = () => {
        setBoxes(CreateObjArray());
        setCount(0);
    };

    return (
        <>
            <button onClick={reset}>Reset</button>
            <div className='boxes'>
                <GameArea
                    boxes={boxes}
                    clickBox={clickBox}
                />
            </div>
            <Counter count={count}/>
        </>

    );
};

export default App;
