import styled from 'styled-components'

const StyledButton = styled.button`
    background: none;
    width: 180px;
    height: 54px;
    border-radius: 15px;
    color: white;
    border-color: white; 
    &:active{
        color: #2271D1;
        border-color: #2271D1;
        box-shadow: inset 0px 0px 10px 3px rgba(34,113,209,0.75);
    }
`

function Button({ children }) {
    return <StyledButton>{children}</StyledButton>
}

export default Button