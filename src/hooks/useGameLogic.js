/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

import { getFormedData, getPairedPics, addUniqueIds, shuffleCards } from "./../utils";

const MAX_VISIBLE_CARDS = 2
const LEVELS = {
    easy: 1500,
    medium: 1000,
    hard: 500,
    pro: 200,
};

const useGameLogic = (pics, gameTiming) => {
    const [score, setScore] = useState(0);
    const [won, setWon] = useState(false);
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);

    const makeCards = () => {
        const list = getFormedData(pics);
        const dup = getPairedPics(list);
        const id = addUniqueIds(dup);
        const random = shuffleCards(id);
        setCards(random);
    };

    const flipCard = (clickedCardId) => {
        const flippedCards = cards.map(card => {
            if (card.uniqueId === clickedCardId) {
                card.isShown = true
            }

            if (card.isShown) setVisibleCards(oldState => [...oldState, card.uniqueId])

            return card;

        });

        setCards(flippedCards);

    };

    const onCardClick = clickedCardId => {
        if (visibleCards.length < MAX_VISIBLE_CARDS) {
            flipCard(clickedCardId);
        }
    };

    const updateScore = () => {
        setScore(oldScore => oldScore + 1);
    };

    const checkMatch = () => {
        const visible = cards.filter(card => visibleCards.indexOf(card.uniqueId) !== -1)

        const matched = visible[0].id === visible[1].id;

        console.log({ visible });
        const updatedCards = cards.map(card => {
            if (visibleCards.indexOf(card.uniqueId) !== -1) {
                card.isShown = false;
                card.isFound = matched; 
            }

            return card;
        });

        setTimeout(() => {
            setCards(updatedCards);
            setVisibleCards([]);
            if (matched) updateScore()
        }, LEVELS[gameTiming]);
    };

    useEffect(() => {
        if (pics.length > 0) makeCards();
    }, [pics]);

    useEffect(() => {
        if (visibleCards.length >= MAX_VISIBLE_CARDS) {
            checkMatch()
        }
    }, [visibleCards]);

    useEffect(() => {
        if (pics.length && score === pics.length) {
            setWon(true);
        }
    }, [score])

    return { cards, onCardClick, won };

};

export default useGameLogic;
