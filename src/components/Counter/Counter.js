import React from 'react';
import './Counter.css';

const Counter = (props) => {
    return (
        <p>Tries: {props.count}</p>
    );
};

export default Counter;