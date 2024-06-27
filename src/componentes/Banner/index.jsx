import styled from 'styled-components'
import data from './banner.json'
import banner from '../../assets/banner.png'

const StyledFigure = styled.figure`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${banner});
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 832px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
    padding: 0px 40px;
    position: relative;
    .bannerData{
        width: 50%;
    }
    .bannerVideo{
        border-radius:40px;
        overflow: hidden;
    }
`

const StyledTitle = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #6BD1FF;
    font-size: 48px;
    height: 90px;
    width: 300px;
    border-radius: 15px;
`

const StyledSubtitle = styled.h2`
    font-size: 46px;
    line-height: 54px;
    display: inline;
`

const StyledText = styled.p`
    font-size: 18px;
    text-align: justify;
`

const Banner = () => {
    return (
        <>
            {data.map(data => <StyledFigure>
                <div className='bannerData'>
                    <StyledTitle>{data.titulo}</StyledTitle>
                    <StyledSubtitle>{data.subtitulo}</StyledSubtitle>
                    <StyledText>{data.parrafo}</StyledText>
                </div>
                <div className='bannerVideo'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ov7vA5HFe6w?si=NktlYn1u5g1vjmbH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

            </StyledFigure>
            )}
        </>
    )
}

export default Banner