import styled from 'styled-components'
import Logo from '../Logo'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";


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
    .nav{
        display: flex;
        gap: 15px;
        padding-right: 20px;
        .buttonLink{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: none;
            text-decoration: none;
            width: 180px;
            height: 54px;
            border-radius: 15px;
            color: white;
            border: 3px solid white;
        }
        .active{
            color: #2271D1;
            border-color: #2271D1;
            box-shadow: inset 0px 0px 10px 3px rgba(34,113,209,0.75);
            
        }
    }
    
    .iconNav{
        display: none;
    }

    @media screen and (max-width: 600px) {
        img{
            display: none;
        }
        .nav{
            display: none;
        }
        .iconNav{
            display: flex;
            justify-content: space-evenly;
            width: 100%;
            .buttonLink{
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                background: none;
                text-decoration: none;
                color: white;
                font-size: 70px;
            }
            .active{
                color: #2271D1;                
            }
        }
    }
`

const Header = () => {
    return <HeaderStyled>
        <Logo />
        <nav className="nav">
            <NavLink to="/" className={({isActive})=>isActive ? "buttonLink active" : "buttonLink"}>Home</NavLink>
            <NavLink to="/newvideo" className={({isActive})=>isActive ? "buttonLink active" : "buttonLink"}>New Video</NavLink>
        </nav>
        <nav className="iconNav">
            <NavLink to="/" className={({isActive})=>isActive ? "buttonLink active" : "buttonLink"}><FaHome/></NavLink>
            <NavLink to="/newvideo" className={({isActive})=>isActive ? "buttonLink active" : "buttonLink"}><IoMdAddCircleOutline/></NavLink>
        </nav>
    </HeaderStyled>
}

export default Header