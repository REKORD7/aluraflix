import styled from 'styled-components'

const Styledlabel = styled.label`
    display: block;
    margin: 25px 0px;
    color: white;
`

function Label({ children }) {
    return <Styledlabel>{children}</Styledlabel>
}

export default Label