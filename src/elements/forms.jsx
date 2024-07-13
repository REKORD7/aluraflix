import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:8px;
    width: 100%;
    max-width: 1080px;
`

const Label = styled.label`
    display: block;
    margin: 20px 0px;
    color: white;
`

const Input = styled.input`
    width: 500px;
    height: 62px;
    padding: 0 10px;
    background-color: transparent;
    color: white;
    border: 2px solid;
    border-color: ${props=>props.bordercolor};
    border-radius: 10px;
    cursor: pointer;
    @media screen and (max-width: 860px) {
        width: 400px;
    }
    @media screen and (max-width: 860px) {
        width: 300px;
    }
`
const Select = styled.select`
    width: 524px;
    height: 66px;
    padding: 0 10px;
    background-color: transparent;
    color: white;
    border: 2px solid;
    border-color: ${props => props.bordercolor};
    border-radius: 10px;
    cursor: pointer;
    option{
        background-color: ${props => props.backgroundcolor};
    }
    @media screen and (max-width: 860px) {
        width: 424px;
    }
    @media screen and (max-width: 860px) {
        width: 324px;
    }
`

const TextBox = styled.textarea`
    width: 500px;
    height: 220px;
    background-color: transparent;
    color: white;
    line-height: 24px;
    border: 2px solid;
    border-color: ${props=>props.bordercolor};
    border-radius: 10px;
    cursor: pointer;
    grid-row: 1;
    padding: 12px;    
    margin-right: 20px;
    @media screen and (max-width: 860px) {
        width: 400px;
    }
    @media screen and (max-width: 860px) {
        width: 300px;
    }
`

const ImageContainer = styled.div`
    width: 500px;
    height: 350px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 860px) {
        width: 400px;
        height: 250px;
    }
    @media screen and (max-width: 860px) {
        width: 300px;
        height: 150px;
    }

`

const ButtonsContainer = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 550px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`

const Error = styled.p`
    background-color: black;
    border-radius: 15px;
    margin: 0;
    padding-left: 10px;
    color: red;
`

export {StyledForm, ImageContainer, ButtonsContainer, Label, Input, TextBox, Select, Error}