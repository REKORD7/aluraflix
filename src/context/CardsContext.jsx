import { createContext, useState, useContext, useEffect } from "react";

const Context = createContext();

export const useCardContext = () => useContext(Context);

export const CardsProvider = ({ children }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/rekord7/videos-api/videos')
        .then(response => response.json())
        .then(data => { setCards(data) })
    }, []);

    const addCard = (card) => {
        setCards((previusCards) => [...previusCards, { ...card, id: previusCards.length + 1 }]);
    };

    const deleteCard = (cardId) => {
        setCards((previusCards) => previusCards.filter((card) => card.id !== cardId));
    };

    const updateCard = (updatedCard) => {
        setCards((previusCards) => previusCards.map((card) => (card.id === updatedCard.id ? updatedCard : card)));
    };

    return (
        <Context.Provider value={{ cards, addCard, deleteCard, updateCard }}>
            {children}
        </Context.Provider>
    );
};

