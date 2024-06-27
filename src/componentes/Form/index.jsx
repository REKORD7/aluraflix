import styled from 'styled-components'
import OptionList from '../OptionList'
import Button from '../Button'

const StyledForm = styled.form`
    font-family: "Source Sans 3", sans-serif;
    font-weight: 600; 
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 20px;
    margin-bottom: 35px;
    .buttons{
        display: flex;
        gap: 20px;
    }
`

const Label = styled.label`
    display: block;
    margin: 25px 0px;
`

const Input = styled.input`
    width: 95%;
    height: 62px;
    padding: 0 10px;
    background-color: transparent;
    border: 2px #505050 solid;
    border-radius: 10px;
    cursor: pointer;
`

const TextBox = styled.textarea`
    width: 100%;
    height: 220px;
    background-color: transparent;
    border: 2px #505050 solid;
    border-radius: 10px;
    cursor: pointer;
    grid-row: 1;
`

function Form() {
    return <StyledForm>
        <div className='title'>
            <Label htmlFor=''>Título</Label>
            <Input type='text' placeholder='ingrese el título'></Input>
        </div>
        <div className='category'>
            <Label>Categoria</Label>
            <OptionList></OptionList>
        </div>
        <div className='image'>
            <Label htmlFor=''>Imagen</Label>
            <Input type='text' placeholder='el enlace es obligatorio'></Input>
        </div>
        <div>
            <Label htmlFor=''>Video</Label>
            <Input type='text' placeholder='ingrese el enlace del video'></Input>
        </div>
        <div className='description'>
            <Label htmlFor=''>Descripción</Label>
            <TextBox placeholder='¿de qué se trata este vídeo'></TextBox>
        </div>
        <div/>
        <div className='buttons'>
            <Button className='buttonSave'>Guardar</Button>
            <Button className='buttonClear'>Limpiar</Button>
        </div>
    </StyledForm>
}

export default Form