
import categories from '../../data/category.json'
import Banner from '../../componentes/Banner';
import EditCard from '../../componentes/EditCard';
import Category from '../../componentes/Category';
import { useCardContext } from "../../context/CardsContext";



function Inicio (){
    const {cards} = useCardContext();

    return (
        <>
        <Banner/>
        {
                categories.map(category => (
                <Category backgroundColor={category.color}
                key={category.id}
                name={category.title}
                cards={cards.filter(card => card.category === category.title )}
                >{category.title}</Category>
                
            ))
            }
        {/* <EditCard/> */}
        </>
    )
}

export default Inicio