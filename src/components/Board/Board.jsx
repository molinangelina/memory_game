import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Loader from './../Loader';
import Card from './../Card';
import Result from './../Result';

import usePictures from '../../hooks/usePictures';
import useGameLogic from '../../hooks/useGameLogic';

import styles from './Board.module.css';

const Board = ({ gameOptions, restartGame }) => {
    const [lag, setLag] = useState(true)
    const pics = usePictures(gameOptions);
    const { cards, onCardClick, won } = useGameLogic(pics, gameOptions.level);

    useEffect(() => {
        if (pics.length > 0) setLag(false)
    }, [pics]);

    return (
        <div>
            {won && <Result restartGame={restartGame} />}
            {lag ?( 
                <Loader /> 
            ) : (
                <div className={`${styles.board}`}>

                {cards.map(card => <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />)}
                </div>
            )}
        </div>
    );
};

export default Board;

Board.propTypes = {
    gameOptions: PropTypes.shape({
        level: PropTypes.string.isRequired,
        deck: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    }),
    restartGame: PropTypes.func.isRequired,
}
