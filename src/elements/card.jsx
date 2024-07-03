import styled from 'styled-components'


const StyledCard = styled.div`
    width: 430px;
    height: 320px;
    margin: 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

const CardTitle = styled.figure`
    width: 430px;
    height: 320px; 
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border: 4px solid var(--primary-color);
    box-shadow: 0px 0px 8px 3px var(--primary-color);
    transition: box-shadow 0.3s ease;
    border-radius: 20px;
    background-color: black;
`

const CardImage = styled.img`
    aspect-ratio: auto;
    width: 100%;
    height: 100%;
    max-height: 271px;
    box-shadow: 0 -10px 15px 0 var(--primary-color);
    border-radius: 20px 20px 0 0;

`

const CardIcons = styled.figcaption`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1rem;
    margin-top: 4px;
    height: 3.688rem;
    margin: 0;
    padding: 0;
    border-radius: 0 0 20px 20px;
    border-top: 4px solid var(--primary-color);
    box-shadow: 0 -5px 13px 0px var(--primary-color);

`

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: 6.839rem;

`

const  Icon = styled.div`
    font-size: 1.5rem;
    cursor: pointer;
    background-color: transparent;
`

const IconText = styled.span`
    margin-left: 5px;
    background-color: transparent;

`


export {StyledCard, CardTitle, CardImage, CardIcons, IconsContainer, Icon, IconText}