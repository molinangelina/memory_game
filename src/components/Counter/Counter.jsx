import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const count = 2;

const Counter = ({ deck, onClick }) => {
    const decrease = e => {
        e.preventDefault();
        const number = deck - count
        if (number >= 4) onClick(number);
    };
    
    const increase = e => {
        e.preventDefault();
        const number = deck + count
        if (number <= 100) onClick(number);
    };

    return (
        <div className="quantity">
            <button className="minus" onClick={decrease}>-</button>
            <span className="quantity">{deck}</span>
            <button className="plus" onClick={increase}>+</button>
        </div>
    )
};

export default Counter;

Counter.propTypes = {
    deck: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}
