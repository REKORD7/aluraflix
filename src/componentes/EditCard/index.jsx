import styled from "styled-components"
import Form from "../Form"
import Xbutton from "../../assets/X - cancel.png"

const Overlay = styled.div`
    background-color:rgba(0,0,0,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 715px;
    background: #03122F;
    border: 5px solid #6BD1FF;
    border-radius: 15px;
    height: 1500px;
    width: 974px;
    padding: 30px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button {
        position: relative;
        top: -50px;
        right: -120px;
        background-color: transparent;
        border: none;
    }
    form {
        box-sizing: border-box;
    }
`

const Title = styled.h1`
    text-transform: uppercase;
    font-weight: 900;
    font-size: 60px;
    line-height: 70px;
    width: 575px;
    height: 40px;
    color: #2271D1;
    text-align: center;
`

const EditCard = () => {
    return <>
        <Overlay />
        <DialogEstilizado>
            <Title>Editar Card:</Title>
            <button><img src={Xbutton} alt="" /></button>
            <Form borderColor="#6BD1FF" backGroundColor="#03122F" className={"newForm"}></Form>          
        </DialogEstilizado>
        
    </>
}

export default EditCard