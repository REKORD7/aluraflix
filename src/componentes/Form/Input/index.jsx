import styled from 'styled-components'

const StyledInput = styled.input`
    width: 500px;
    height: 62px;
    padding: 0 10px;
    background-color: transparent;
    border: 2px solid;
    border-color: ${props=>props.borderColor};
    border-radius: 10px;
    cursor: pointer;
`

function Input({ type, placeholder, borderColor}) {
    return <StyledInput type={type} placeholder={placeholder} borderColor={borderColor}></StyledInput>
}

export default Input