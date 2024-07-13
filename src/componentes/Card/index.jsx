import {StyledCard, CardTitle, CardImage, CardIcons, IconsContainer, Icon, IconText} from "../../elements/card"
import { MdOutlineDeleteForever } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { useCardContext } from "../../context/CardsContext";
import swal from "sweetalert";
import { useBannerContext } from "../../context/BannerContext";

const Card = ({datos, primaryColor, onEdit}) =>{
    const {id, title, photo} = datos;
    const { deleteCard } = useCardContext();
    const { updateBanner, setColorBanner } = useBannerContext();
    

    const handleDelete = ev =>{
        swal({
            title: "Eliminar",
            text: "Está seguro de eliminar esta tarjeta",
            icon: "warning",
            buttons: ["No", "Sí"]
        }).then(respuesta => {
            if(respuesta){
                swal({
                    title: "Archivo borrado",
                    text: "Precione el boton cerrar para continuar",
                    icon: "success",
                    button: "Cerrar"
                })
                deleteCard(id);
            }
        })
    }

    const handleEdit = ev =>{
        onEdit(datos);
    }

    const handleClick = ev =>{
        setColorBanner(primaryColor);
        updateBanner(datos);
        console.log(datos)
        const bannerElement = document.getElementById('banner');
        if (bannerElement) {
            bannerElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    

    return (
        <StyledCard style={{'--primary-color':primaryColor}}>
            <CardTitle>
                <CardImage src={photo} alt={title}  onClick={handleClick}/>
                <CardIcons className="icons_container">
                    <IconsContainer onClick={handleDelete}>
                        <Icon><MdOutlineDeleteForever className="icon"/></Icon>
                        <IconText className="icon_text">BORRAR</IconText>
                    </IconsContainer>
                    <IconsContainer onClick={handleEdit}>
                        <Icon><RiEdit2Line className="icon"/></Icon>
                        <IconText className="icon_text">EDITAR</IconText>
                    </IconsContainer>
                </CardIcons>
            </CardTitle>
        </StyledCard>
    );
};

export default Card