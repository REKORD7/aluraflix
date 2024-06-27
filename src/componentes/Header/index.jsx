import styled from 'styled-components'
import Logo from '../Logo'
import Button from '../Button'

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
    div {
        display: flex;
        gap: 15px;
        padding-right: 20px;
    }
`

const Header = () => {
    return <HeaderStyled>
        <Logo/>
        <div>
            <Button className='buttonHome'>Home</Button>
            <Button className='buttonNewVideo'>New Video</Button>
        </div>
    </HeaderStyled>
}

export default Header