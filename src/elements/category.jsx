import styled from 'styled-components'

const StyledCategory = styled.section`
    width: 100%;
    padding: 0.5rem 30px;
    box-sizing: border-box;
    text-align: center;
    font-size: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const StyledTitle = styled.h3`
    background-color: ${props => props.$backgroundColor};
    width: 432px;
    height: 70px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 70px;
`

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    margin: 0 10px;
    padding: 0 20px;
    background-color: transparent;
    gap: 20px;
    

    &::-webkit-scrollbar{
        height: 15px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: blue;
        border-radius: 10px;
        cursor: pointer;
    }

    &::-webkit-scrollbar-thumb:hover{
        background-color: darkblue;
    }
    
    
`

export { StyledCategory, StyledTitle, StyledContainer }