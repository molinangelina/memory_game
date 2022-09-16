import React from 'react';
import PropTypes from 'prop-types';

import styles from './Result.module.css';

const Result = ({ restartGame }) => (
    <div className={`${styles.container} frosted`}>
        <p>You Won!</p>
        <button className={`${styles.button} frosted`} onClick={restartGame}>
            Exit Game
        </button>
    </div>
);

export default Result;


Result.propTypes = {
    restartGame: PropTypes.func.isRequired,
};