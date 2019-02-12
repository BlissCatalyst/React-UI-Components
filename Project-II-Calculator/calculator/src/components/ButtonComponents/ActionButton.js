import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={props.zeroClearStyle}>{props.text}</button>
    );
};