import styled from 'styled-components'

const StyledTextBox = styled.textarea`
    width: 500px;
    height: 220px;
    background-color: transparent;
    border: 2px solid;
    border-color: ${props=>props.borderColor};
    border-radius: 10px;
    cursor: pointer;
    grid-row: 1;
    padding: 12px;    
    margin-right: 20px;
`

function TextBox({ placeholder, borderColor }) {
    return <StyledTextBox placeholder={placeholder} borderColor={borderColor}></StyledTextBox>
}

export default TextBox