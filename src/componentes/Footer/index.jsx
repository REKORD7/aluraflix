import styled from 'styled-components'
import Logo from '../Logo'

const FooterStyled = styled.footer`
    background-color: #000000;
    width: 1920px;
    height: 125px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    img{
        width: 168px;
        height: 40px;
    }
`

const TextStyled = styled.p`
    font-size: 16px;
	color: white;
	margin: 0;
`

const Footer = () => {
    return <FooterStyled>
        <Logo/>
        <TextStyled>Desarrollado por Manuel Gómez.</TextStyled>
        <TextStyled>Alura Latam - 2024.</TextStyled>
    </FooterStyled>
}

export default Footer