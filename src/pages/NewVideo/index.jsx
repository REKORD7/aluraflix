import styled from 'styled-components'
import Form from '../../componentes/Form'

const NewVideoSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 70px;
`

const Title = styled.h1`
    font-weight: 900;
    font-size: 60px;
    line-height: 70px;
    text-transform: uppercase;
`

const Parrafo = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
`

const SubTitle = styled.h3`
    display: flex;
    align-items:center;
    width: 100%;
    max-width: 1080px;;
    height: 90px;
    font-weight: 500;
    font-size: 36px;
    line-height: 24px;
    border-bottom: 1px #505050 dashed;
    border-top: 1px #505050 dashed;
    
`



function NewVideo() {
    return (
        <>
            <NewVideoSection>
                <Title>Nuevo Video</Title>
                <Parrafo>Complete el formulario para crear una nueva tarjeta de video</Parrafo>
                <SubTitle>Crear Tarjeta</SubTitle>
                <Form borderColor="#505050" backGroundColor="#262626" styles={"NewVideo"}/>
            </NewVideoSection>
        </>
    )
}

export default NewVideo