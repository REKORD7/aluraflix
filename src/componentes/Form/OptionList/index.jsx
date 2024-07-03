import category from '../../../data/category.json'
import styled from 'styled-components'

const Select = styled.select`
    width: 524px;
    height: 66px;
    padding: 0 10px;
    background-color: transparent;
    color: #707070;
    border: 2px solid;
    border-color: ${props => props.borderColor};
    border-radius: 10px;
    cursor: pointer;
    option{
        background-color: ${props => props.backGroundColor};
    }
`


function OptionList(props) {
    const { borderColor, backGroundColor } = props;

    return <Select value={category.value} borderColor={borderColor} backGroundColor={backGroundColor}>
        <option value="" defaultValue="" >seleccione una categoría</option>
        {
            category.map(category => <option key={category.id} value={category.title} >{category.title}</option>)
        }
    </Select>

}

export default OptionList