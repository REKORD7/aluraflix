import OptionList from './OptionList'
import Button from '../Button'
import Label from './Label'
import Input from './Input'
import TextBox from './TexBox'
import styled from 'styled-components'
import ImageVideo from '../../assets/video.png'

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:8px;
    width: 100%;
    max-width: 1080px;
`
const ImageContainer = styled.div`
    width: 500px;
    height: 350px;
    display: flex;
    justify-content: center;
`
const ButtonsContainer = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 550px;
`



function Form(props) {
    return <StyledForm className={props.className}>
        <div>
            <Label>Título</Label>
            <Input type='text' placeholder='ingrese el título' borderColor={props.borderColor}></Input>
        </div>
        <div>
            <Label>Categoria</Label>
            <OptionList borderColor={props.borderColor} backGroundColor={props.backGroundColor}></OptionList>
        </div>
        <div>
            <Label>Imagen</Label>
            <Input type='text' placeholder='el enlace es obligatorio' borderColor={props.borderColor}></Input>
        </div>
        <div>
            <Label>Video</Label>
            <Input type='text' placeholder='ingrese el enlace del video' borderColor={props.borderColor}></Input>
        </div>
        <div >
            <Label>Descripción</Label>
            <TextBox placeholder='¿de qué se trata este vídeo?' borderColor={props.borderColor}></TextBox>
        </div>
        <ImageContainer>
            <img src={ImageVideo} alt="imagen de video" />
        </ImageContainer>
        <ButtonsContainer>
            <Button className='buttonSave'>Guardar</Button>
            <Button className='buttonClear'>Limpiar</Button>
        </ButtonsContainer>
    </StyledForm>
}

export default Form