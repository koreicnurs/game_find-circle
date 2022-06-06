import React from 'react';

const Buttons = (props) => {
    return (
        <button className='btn btn-info' onClick={props.reset}>
            Reset
        </button>
    );
};

export default Buttons;