import styled from 'styled-components'
import Logo from '../Logo'

const HeaderStyled = styled.header`
    width: 1920px;
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
        button{
            background: none;
            width: 180px;
            height: 54px;
            border-radius: 15px;
            color: white;
            border-color: white;
        } 
        :active{
            color: #2271D1;
            border-color: #2271D1;
            box-shadow: inset 0px 0px 10px 3px rgba(34,113,209,0.75);
        }

    }
`

const Header = () => {
    return <HeaderStyled>
        <Logo/>
        <div>
            <button className='buttonHome'>Home</button>
            <button className='buttonNewVideo'>New Video</button>
        </div>
    </HeaderStyled>
}

export default Header