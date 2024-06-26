import styled from 'styled-components'
import teams from './teams.json'

const StyledTitle = styled.h3`
    background-color: ${props => props.$backgroundColor};
    width: 432px;
    height: 70px;
    color: white;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 70px;
`

const Team = () =>{
    return <>
        <section className='team'>
            {
                teams.map(team => <StyledTitle $backgroundColor={team.color}>{team.title}</StyledTitle>)
            }
        </section>
    </>
}

export default Team