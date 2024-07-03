import {StyledCard, CardTitle, CardImage, CardIcons, IconsContainer, Icon, IconText} from "../../elements/card"
import { MdOutlineDeleteForever } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";


const Card = ({datos, primaryColor, onClick, onDelete, onEdit}) =>{
    const {title, photo} = datos;

    

    return (
        <StyledCard style={{'--primary-color':primaryColor}}>
            <CardTitle>
                <CardImage src={photo} alt={title}  />
                <CardIcons className="icons_container">
                    <IconsContainer>
                        <Icon><MdOutlineDeleteForever className="icon"/></Icon>
                        <IconText className="icon_text">BORRAR</IconText>
                    </IconsContainer>
                    <IconsContainer>
                        <Icon><RiEdit2Line className="icon"/></Icon>
                        <IconText className="icon_text">EDITAR</IconText>
                    </IconsContainer>
                </CardIcons>
            </CardTitle>
        </StyledCard>
    );
};

export default Card