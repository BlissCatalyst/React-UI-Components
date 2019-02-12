import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <h2 className={props.display}>{props.text}</h2>
    );
};