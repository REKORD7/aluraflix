import { useState, useEffect } from "react";
import Card from "../Card";
import { StyledCategory, StyledTitle, StyledContainer } from "../../elements/category"
import { useCardContext } from "../../context/CardsContext";

const Category = ({ backgroundColor, cards, name }) => {


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
                        />
                    ))
                }
            </StyledContainer>
        </StyledCategory>
    </>
}

export default Category