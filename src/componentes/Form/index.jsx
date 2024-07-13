import { useRef, useState, useEffect } from "react";
import category from '../../data/category.json'
import { StyledForm, ImageContainer, Label, Input, TextBox, ButtonsContainer, Select, Error } from '../../elements/forms'
import ImageVideo from '../../assets/video.png'
import Button from '../Button'
import { useCardContext } from "../../context/CardsContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { validateForm } from "../../hooks/useForm";


function Form(props) {
    const form = useRef(null);
    const inputTitle = useRef(null);
    const optionList = useRef(null);
    const inputImage = useRef(null);
    const inputVideo = useRef(null);
    const inputTextBox = useRef(null);
    const [errors, setErrors] = useState({});
    const { addCard } = useCardContext();
    const EmptyFormData = {
        title: '',
        category: '',
        photo: '',
        link: '',
        description: '',
    };

    let InitialFormData = {};
    if (props.card != null) {
        InitialFormData = props.card;
    } else {
        InitialFormData = EmptyFormData;
    }

    const [formData, setFormData] = useState(InitialFormData);

    const navigateTo = useNavigate();

    const sendForm = ev => {
        ev.preventDefault();
        const formToSend = {
            title: inputTitle.current.value,
            category: optionList.current.value,
            photo: inputImage.current.value,
            link: inputVideo.current.value,
            description: inputTextBox.current.value
        }

        let err = validateForm(formToSend);
        if (err !== null) {
            setErrors(err)
            form.current?.scrollIntoView();
            return null;
        } else {
            setErrors({});
        }

        if (props.card == null) {
            swal({
                title: "Crear Nuevo",
                text: "¿Está seguro de crear la nueva tarjeta?",
                icon: "warning",
                buttons: ["No", "Sí"]
            }).then(respuesta => {
                if (respuesta) {
                    swal({
                        title: "La tarjeta se ha creado con éxito",
                        text: "Sera redireccionado en unos segundos",
                        icon: "success",
                        buttons: false,
                        timer: "2500"
                    }).then(respuesta => {
                        if (!respuesta) {
                            addCard(formToSend);
                            navigateTo("/");
                        }
                    })
                    //console.log(formToSend);
                }
            })
        } else {
            const NewForm = {
                id: props.card.id,
                title: inputTitle.current.value,
                category: optionList.current.value,
                photo: inputImage.current.value,
                link: inputVideo.current.value,
                description: inputTextBox.current.value
            }
            swal({
                title: "Editar",
                text: "¿Está seguro de guardar los cambios en la tarjeta?",
                icon: "warning",
                buttons: ["No", "Si"]
            }).then(respuesta => {
                if (respuesta) {
                    swal({
                        title: "Cambios guardados con éxito",
                        text: "",
                        icon: "success",
                        buttons: false,
                        timer: "1000"
                    }).then(respuesta => {
                        if (!respuesta) {
                            props.save(NewForm);
                            
                        }
                    })
                }
            })
        }
    }

    const handleReset = ev => {
        ev.preventDefault();
        setFormData(EmptyFormData);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return <StyledForm ref={form} onSubmit={sendForm} onReset={handleReset}>
        <div>
            <Label>Título</Label>
            <Input type='text' value={formData.title} ref={inputTitle} placeholder='ingrese el título' bordercolor={props.borderColor} name="title" onChange={handleChange}></Input>
            {errors.title && <Error>{errors.title}</Error>}
        </div>
        <div>
            <Label>Categoria</Label>
            {/* <OptionList ref={optionList} borderColor={props.borderColor} backGroundColor={props.backGroundColor}></OptionList> */}
            <Select value={formData.category} ref={optionList} bordercolor={props.borderColor} backgroundcolor={props.backGroundColor} name="category" onChange={handleChange}>
                {/* <option >seleccione una categoría</option> */}
                {
                    category.map(category => <option key={category.id} value={category.title} >{category.title}</option>)
                }
            </Select>
        </div>
        <div>
            <Label>Imagen</Label>
            <Input type='text' value={formData.photo} ref={inputImage} placeholder='el enlace es obligatorio' bordercolor={props.borderColor} name="photo" onChange={handleChange}></Input>
            {errors.photo && <Error>{errors.photo}</Error>}
        </div>
        <div>
            <Label>Video</Label>
            <Input type='text' value={formData.link} ref={inputVideo} placeholder='ingrese el enlace del video' bordercolor={props.borderColor} name="link" onChange={handleChange}></Input>
            {errors.link && <Error>{errors.link}</Error>}
        </div>
        <div >
            <Label>Descripción</Label>
            <TextBox value={formData.description} ref={inputTextBox} placeholder='¿de qué se trata este vídeo?' bordercolor={props.borderColor} name="description" onChange={handleChange}></TextBox>
            {errors.description && <Error>{errors.description}</Error>}
        </div>
        <ImageContainer>
            <img src={ImageVideo} alt="imagen de video" />
        </ImageContainer>

        <ButtonsContainer>
            <Button type='submit'>Guardar</Button>
            <Button type='reset' >Limpiar</Button>
        </ButtonsContainer>

    </StyledForm>
}

export default Form