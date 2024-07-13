import { useEffect } from 'react';
import {Overlay, DialogEstilizado, Title} from '../../elements/editCard'
import Form from "../Form"
import Xbutton from "../../assets/X - cancel.png"



const EditCard = ({ card, isOpen, onClose, onSave }) => {

    useEffect(() => {
        {}
    }, [isOpen]);
    
    if (!isOpen) return null;

    return <>
        <Overlay />
        <DialogEstilizado>
            <button className="button-x" onClick={onClose}><img src={Xbutton} alt="" /></button>
            <Title>Editar Card:</Title>
            <Form card={card} isOpen={isOpen} save={onSave} borderColor="#6BD1FF" backGroundColor="#03122F" ></Form>
        </DialogEstilizado>

    </>
}

export default EditCard