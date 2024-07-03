import styled from 'styled-components'
import Logo from '../Logo'
import Button from '../Button'
import { Link } from 'react-router-dom'

const HeaderStyled = styled.header`
    background-color: #000000;
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
                        
    img{
        padding-left: 20px;
        height: 40px;
    }
    nav {
        display: flex;
        gap: 15px;
        padding-right: 20px;
    }
`

const Header = () => {
    return <HeaderStyled>
        <Logo/>
        <nav>
            <Link to="/"><Button className='buttonHome'>Home</Button></Link>
            <Link to="/newvideo"><Button className='buttonNewVideo'>New Video</Button></Link>
        </nav>
    </HeaderStyled>
}

export default Header