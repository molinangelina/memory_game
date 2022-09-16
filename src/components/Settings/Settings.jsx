import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CATEGORIES, LEVELS, INITIAL_CARDS_COUNT } from './../../constants.js'

import RadioBox from '../RadioBox/RadioBox';
import Counter from '../Counter/Counter';

import styles from './Settings.module.css';

const Settings = ({ initializeGame }) => {
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [level, setLevel] = useState(LEVELS[0]);
    const [deck, setDeck] = useState(INITIAL_CARDS_COUNT);

    const startButton = () => {
        initializeGame({category, level, deck});
    };

    return (
        <div className={`${styles.settings} frosted`}>
            <h2>Settings</h2>
            <h4>Categories:</h4>
            <div className={`${styles.setting}`}>
                {CATEGORIES.map(item => (
                    <RadioBox 
                        key={item} 
                        name={item} 
                        selectedItem={category} 
                        onChange={ e => setCategory(e.target.value) }
                    />
                ))}
            </div>

            <h4>Amount of cards:</h4>
            <div className={`${styles.setting}`}>
                <Counter deck={deck} onClick={setDeck} />
            </div>

            <h4>Levels:</h4>
            <div className={`${styles.setting}`}>
                {LEVELS.map(item => (
                    <RadioBox 
                        key={item} 
                        name={item} 
                        selectedItem={level} 
                        onChange={ e => setLevel(e.target.value) }
                    />
                ))}
            </div>

            <button className={`${styles.button} frosted`} onClick={startButton}>Start</button>

        </div>
    )
};

export default Settings;

Settings.propTypes = {
    initializeGame: PropTypes.func.isRequired,
};