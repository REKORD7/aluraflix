import { createContext, useState, useContext, useEffect } from "react";
import { v4 as uuid } from 'uuid'

const CardsContext = createContext();

export const useCardContext = () => useContext(CardsContext);

export const CardsProvider = ({ children }) => {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/rekord7/videos-api/videos')
            .then(response => response.json())
            .then(data => setCards(data))
            .catch((error) => setError(error))
    }, []);

    const addCard = (card) => {
        setCards((previusCards) => [...previusCards, { ...card, id: uuid() }]);
    };

    const deleteCard = (cardId) => {
        setCards((previusCards) => previusCards.filter((card) => card.id !== cardId));
    };

    const updateCard = (updatedCard) => {
        setCards((previusCards) => previusCards.map((card) => (card.id === updatedCard.id ? updatedCard : card)));
    };

    return (
        <CardsContext.Provider value={{ cards, error, addCard, deleteCard, updateCard }}>
            {children}
        </CardsContext.Provider>
    );
};

