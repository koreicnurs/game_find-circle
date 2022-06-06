import './App.css';
import Box from "./components/Box/Box";
import {useState} from "react";
import React from "react";
import GameArea from "./components/GameArea/GameArea";

const App = () => {
    const [boxes, setBoxes] = useState(GameArea);
    const [count, setCount] = useState(0);

    const clickBox = (id) => {
        const boxCopy = boxes.map(box => {
            if (box.id === id && box.isItem === true) {
                stopGame()
                return {
                    ...boxes,
                    box: 'item'
                }
            } else if (box.id === id && box.isItem === false) {
                counter()
                return {
                    ...boxes,
                    box: 'miss',
                }
            } else {
                return box
            }
        })
        setBoxes(boxCopy)
    }
    const counter = () => {
        setCount(count + 1)
    }

    const stopGame = () => {
        alert('U have found item')
    }

    const boxesComp = boxes.map(box => (
        <Box
            name={box.box}
            eachBox={() => clickBox(box.id)}
        />
    ))

    const reset = () => {
        setBoxes(GameArea())
        setCount(0)
    }

    return (
        <>
            <button onClick={reset}>Reset</button>
            <div className='boxes'>
                {boxesComp}
            </div>
            <p>{count}</p>
        </>

    )
};

export default App;
