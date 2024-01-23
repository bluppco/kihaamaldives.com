// IMPORTS REACT RESPONSIVE CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

// IMPORTS CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "../../constants/cdn"

const HeroCarousel = ( props ) => {

    const { data } = props

    const hero_carousel_images = data.images.sort( (a,b) => a.order - b.order )

    return (
        <section className="w-full h-[400px] md:h-full mt-16 group">
            <Carousel showThumbs={ false } showStatus={ false } showArrows={ true } autoPlay={ true } infiniteLoop={ true }
                renderArrowPrev={( onClickHandler, hasPrev, label ) =>
                hasPrev && (
                        <button
                            type="button"
                            onClick={ onClickHandler }
                            title={ label }
                            className="absolute top-0 left-1 z-10 flex items-center h-full mt-10 md:mt-0"
                        >
                            <ChevronLeftIcon className="text-white size-8 md:size-12 md:hidden md:group-hover:block"/>
                        </button>
                )}
                renderArrowNext={( onClickHandler, hasNext, label ) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={ onClickHandler }
                            title={ label }
                            className="absolute top-0 right-1 z-10 flex items-center h-full mt-10 md:mt-0"
                        >
                            <ChevronRightIcon className="text-white size-8 md:size-12 md:hidden md:group-hover:block"/>
                        </button>
                )}
            >
                {

                    hero_carousel_images.map( ( value, index ) => {
                        return (
                            <div key={ "hero-carousel-image-" + index } className="relative w-full">
                                <div className="w-full h-[400px] md:h-screen bg-zinc-200">
                                    <img
                                        src={ CDN_LINK + value.file + "?quality=" + IMAGE_QUALITY }
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
