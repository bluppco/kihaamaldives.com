// IMPORTING REACT RESPONSIVE CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

// IMPORTING CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "../../constants/cdn"

// IMPORTING JSX ATOMS
import HeadingFourWhiteJSX from "../../atoms/headings/jsx/FourWhite"

const HeroCarousel = ( props ) => {

    const data = Array(2).fill({

        image: "hero-carousel-image-1.jpg",
        title: "Garden Villa with pool"

    })

    return (
        <section className="w-full h-full relative">
            <Carousel showThumbs={ false } showStatus={ false } showArrows={ true } autoPlay={ true } infiniteLoop={ true } stopOnHover={ false } showIndicators={ false }>
                {

                    data.map( ( value, index ) => {
                        return (
                            <div key={ "hero-carousel-image-" + index } className="relative w-full">
                                <div className="w-full h-96 bg-zinc-200">
                                    <img
                                        src={ value.image }
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 flex justify-center w-full py-2 bg-black/20">
                                <HeadingFourWhiteJSX>{ value.title }</HeadingFourWhiteJSX>
                                </div>
                            </div>
                        )
                    })

                }
            </Carousel>
        </section>
    )

}

export default HeroCarousel
