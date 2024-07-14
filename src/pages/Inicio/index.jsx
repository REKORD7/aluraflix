import { useState, useEffect } from "react";
import categoryDb from '../../data/category.json'
import Banner from '../../componentes/Banner';
import EditCard from '../../componentes/EditCard';
import Category from '../../componentes/Category';
import { useCardContext } from "../../context/CardsContext";
import { BannerProvider } from "../../context/BannerContext";
import Error404 from "../Error404/Error.404"


function Inicio() {
    const { cards, updateCard, error } = useCardContext();

    const [currentCard, setCurrentCard] = useState(null);
    const [editOpen, setEditOpen] = useState(false);
    const [banner, setBanner] = useState(null);

    const categories = categoryDb;

    useEffect(() => {
        setBanner(cards[0]);
    }, [cards]);


    const handleCardEdit = (card) => {
        setCurrentCard(card);
        setEditOpen(true);
    }

    const handleEditClose = () => {
        setEditOpen(false);
    }

    const handleEditSave = (updatedCard) => {
        updateCard(updatedCard);
        setEditOpen(false);
        setBanner(cards[0]);
    }

    return (
        <>
            <BannerProvider>
                {banner && <Banner card={banner} />}
                {error && <Error404/>}
                {
                    categories.map(category => (
                        <Category backgroundColor={category.color}
                            key={category.id}
                            name={category.title}
                            cards={cards?.filter(card => card.category === category.title)} onCardEdit={handleCardEdit}
                        >{category.title} </Category>
                        
                    ))
                }
                <EditCard
                    card={currentCard}
                    isOpen={editOpen}
                    onClose={handleEditClose}
                    onSave={handleEditSave}
                />
            </BannerProvider>
        </>
    )
}

export default Inicio