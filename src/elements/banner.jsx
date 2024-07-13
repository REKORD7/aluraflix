import styled from 'styled-components'
import banner from '../assets/banner.png'

const StyledFigure = styled.figure`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${banner});
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 832px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
    padding: 0px 40px;
    position: relative;
    gap: 25px;
    .bannerData{
        width: 50%;
    }
    .bannerVideo{
        border-radius:40px;
        overflow: hidden;
    }

    @media screen and (max-width: 1060px) {
        flex-direction: column;
        justify-content: flex-start;
        .bannerData{
            width: 80%;
        }
        .bannerVideo{
            width: 448px;
            height: 252px;            
        }
    }
    
`

const StyledTitle = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    font-size: 48px;
    height: 90px;
    width: auto;
    border-radius: 15px;
    text-align: center;

    @media screen and (max-width: 1220px) {
        font-size: 36px;
    }
`

const StyledSubtitle = styled.h2`
    font-size: 46px;
    line-height: 54px;
    display: inline;
    
    @media screen and (max-width: 1220px) {
        font-size: 34px;
        line-height: 48px;
    }
`

const StyledText = styled.p`
    font-size: 18px;
    text-align: justify;
    line-height: 1.5em;
`

export { StyledFigure, StyledTitle, StyledSubtitle, StyledText }