import React from 'react';

const Buttons = (props) => {
    return (
        <button onClick={props.reset}>
            Reset
        </button>
    );
};

export default Buttons;