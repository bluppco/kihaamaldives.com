import { useState } from "react"
import { CDN_LINK, IMAGE_QUALITY } from "../../constants/cdn"

// IMPORT JSX COMPONENTS
import AccommodationModal from "./AccommodationModal"

const AccommodationImages = ( props ) => {

    const [ selectedIndex, updateIndex ] = useState(0)
    const { data } = props
    const [ isModalOpen, updateModalOpen ] = useState( false )
    const [ displayImage, updateDisplayImage ] = useState( "" )
    const openImageModal = ( image ) => {

        updateDisplayImage( image )
        updateModalOpen( true )

    }
    const closeImageModal = () => {

        updateDisplayImage( "")
        updateModalOpen( false )

    }

    return (
        <>
            <section className="grid grid-cols-5 gap-[1px] py-[1px]">
                {

                    data.map( ( value, index ) => {

                        return(
                            <div className="w-full aspect-[4/3] bg-zinc-200 overflow-hidden" key={ "accommodation-images-" + index } onClick={ () => openImageModal( image ) }>
                                <img
                                    src={ value.image }
                                    alt=""
                                    className="w-full h-full object-cover hover:scale-125 overflow-hidden transition-all duration-700"
                                />
                            </div>
                        )

                    })

                }
            </section>
            {/*
            <section>
                <AccommodationModal open={ isModalOpen } hideModal={ () => closeImageModal() } images={ data } displayImage={ displayImage } CDN_LINK={ CDN_LINK } IMAGE_QUALITY={ IMAGE_QUALITY } />
            </section>
            */}
        </>

    )

}
export default AccommodationImages
