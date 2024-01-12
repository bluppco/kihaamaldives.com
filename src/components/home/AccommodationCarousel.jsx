// IMPORTING REACT RESPONSIVE CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

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
            <Carousel showThumbs={ false } showStatus={ false } showArrows={ true } autoPlay={ true } infiniteLoop={ true } showIndicators={ false }
                renderArrowPrev={( onClickHandler, hasPrev, label ) =>
                hasPrev && (
                        <button
                            type="button"
                            onClick={ onClickHandler }
                            title={ label }
                            className="absolute top-0 left-1 z-10 flex items-center h-full"
                        >
                            <ChevronLeftIcon className="text-white size-12"/>
                        </button>
                )}
                renderArrowNext={( onClickHandler, hasNext, label ) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={ onClickHandler }
                            title={ label }
                            className="absolute top-0 right-1 z-10 flex items-center h-full"
                        >
                            <ChevronRightIcon className="text-white size-12"/>
                        </button>
                )}
            >
                {

                    data.map( ( value, index ) => {
                        return (
                            <div key={ "hero-carousel-image-" + index } className="relative w-full">
                                <div className="w-full aspect-[3/2] bg-zinc-200">
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
