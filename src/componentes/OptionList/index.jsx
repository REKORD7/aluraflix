import category from '../../data/category.json'
import styled from 'styled-components'

const Select = styled.select`
    width: 90%;
    height: 62px;
    padding: 0 10px;
    background-color: transparent;
    color: #707070;
    border: 2px #505050 solid;
    border-radius: 10px;
    cursor: pointer;
    option{
        background-color: #262626;
    }
`


const OptionList = () => {
    return <Select value={category.value}>
        <option value="" defaultValue="" >seleccione una categoría</option>
        {
            category.map( category  => <option key={category.id} value={category.title}>{category.title}</option>)
       }
    </Select>
    
}

export default OptionList