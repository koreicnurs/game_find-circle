import './App.css';
import {useState} from "react";
import React from "react";
import CreateObjArray from "./components/CreateObjArray/CreateObjArray";
import Counter from "./components/Counter/Counter";
import GameArea from "./components/GameArea/GameArea";
import Buttons from "./components/Buttons/Buttons";

const App = () => {
    const [boxes, setBoxes] = useState(CreateObjArray);
    const [count, setCount] = useState(0);

    const clickBox = (id) => {
        const boxCopy = boxes.map(box => {
            if (box.id === id && box.isItem === true) {
                stopGame();
                console.log(box);
                return {
                    ...boxes,
                    box: 'item',
                }
            } else if (box.id === id && box.isItem === false) {
                counter();
                console.log(box);
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
        alert(`U have found item after ${count} tries. \nPut Reset to starting again`
        );
    };

    const reset = () => {
        setBoxes(CreateObjArray());
        setCount(0);
    };

    return (
        <>
            <div className='boxes'>
                <GameArea
                    boxes={boxes}
                    clickBox={clickBox}
                />
            </div>
            <Counter
                count={count}
            />
            <Buttons
                reset={reset}
            />
        </>

    );
};

export default App;
