import React from 'react';
import Box from "../Box/Box";

const GameArea = (props) => {
    return props.boxes.map(box => (
            <Box
                key={box.id}
                name={box.box}
                eachBox={() => props.clickBox(box.id)}
            />
        ));
};

export default GameArea;