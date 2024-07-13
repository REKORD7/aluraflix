import { StyledFigure, StyledTitle, StyledSubtitle, StyledText } from '../../elements/banner'
import { useBannerContext } from "../../context/BannerContext";

const Banner = () => {
    const { banner, colorBanner} = useBannerContext();


    return (
        <StyledFigure id='banner'>
            <div className='bannerData'>
                <StyledTitle style={{'--primary-color':colorBanner}}>{banner.category}</StyledTitle>
                <StyledSubtitle>{banner.title}</StyledSubtitle>
                <StyledText>{banner.description}</StyledText>
            </div>
            <div className='bannerVideo'>
                <iframe width="560" height="315" src={banner.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </StyledFigure>
    )
}

export default Banner