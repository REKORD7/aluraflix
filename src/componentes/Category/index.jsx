import Card from "../Card";
import { StyledCategory, StyledTitle, StyledContainer } from "../../elements/category"

const Category = ({ backgroundColor, cards, name, onCardEdit }) => {

    return <>
        <StyledCategory className='category'>
            <StyledTitle $backgroundColor={backgroundColor}>{name}</StyledTitle>
            <StyledContainer>
                {
                    cards.map((card) => (
                        <Card
                            datos={card}
                            key={card.id}
                            primaryColor={backgroundColor}
                            onEdit={() => onCardEdit(card)}
                        />
                    ))
                }
            </StyledContainer>
        </StyledCategory>
    </>
}

export default Category