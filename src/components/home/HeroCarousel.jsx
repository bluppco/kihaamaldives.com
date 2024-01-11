// IMPORTING REACT RESPONSIVE CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

// IMPORTING CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "../../constants/cdn"

const HeroCarousel = ( props ) => {

    const data = Array(2).fill({

        image: "hero-carousel-image-1.jpg"

    })

    return (
        <section className="w-full h-full mb-40">
            <Carousel showThumbs={ false } showStatus={ false } showArrows={ true } autoPlay={ true } infiniteLoop={ true } stopOnHover={ false }>
                {

                    data.map( ( value, index ) => {
                        return (
                            <div key={ "hero-carousel-image-" + index } className="relative w-full">
                                <div className="w-full h-screen bg-zinc-200">
                                    <img
                                        src={ value.image }
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
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
