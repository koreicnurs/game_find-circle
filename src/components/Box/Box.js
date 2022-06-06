import React from 'react';
import './Box.css'

const Box = (props) => {

    return (
        <div onClick={props.eachBox} className={`${props.name}`}>

        </div>
    );
};

export default Box;