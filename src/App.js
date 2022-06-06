import './App.css';
import Box from "./components/Box/Box";
import {useState} from "react";
import React from "react";
import GameArea from "./components/GameArea/GameArea";

const App = () => {
    const [boxes, setBoxes] = useState(GameArea);

    const clickBox = (id) => {
        const boxCopy = boxes.map(box => {
            if (box.id === id && box.isItem === true) {
                return {
                    ...boxes,
                    box: 'item'
                }
            } else if (box.id === id && box.isItem === false) {
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


    const boxesComp = boxes.map(box => (
        <Box
            name={box.box}
            eachBox={() => clickBox(box.id)}
        />
    ))


    return (
        <>
            <div className='boxes'>
                {boxesComp}
            </div>
        </>

    )
};

export default App;
