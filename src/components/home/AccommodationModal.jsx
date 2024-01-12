import { useEffect, useState } from "react"

const AcommodationModal = ( props ) => {

    const {

        CDN_LINK,
        displayImage,
        images,
        hideModal,
        IMAGE_QUALITY,
        open,

    } = props

    const [ images_array, updateImagesArray ] = useState([])
    const [ displayIndex, updateDisplayIndex ] = useState( null )

    useEffect( () => {

        let temporary_images_array = []
        images.map( ( value ) => {

            const image_type = value.name
            value.images.map( ( image ) => {

                const temp = {

                    image: image,
                    image_type: image_type

                }
                if( image === displayImage ){

                    updateDisplayIndex( temporary_images_array.length )

                }
                temporary_images_array.push( temp )

            })

        })
        updateImagesArray( temporary_images_array )


    }, [ images, displayImage ])

    const decrementImage = () => {
        if( displayIndex > 0 )
            updateDisplayIndex( displayIndex - 1 )

    }

    const incrementImage = () => {

        if( displayIndex + 1 < images_array.length )
            updateDisplayIndex( displayIndex + 1 )

    }
    // FOR ARROW MOVEMENT
    // useEffect(() => {

    //     const handleKeyDown = (event)  => {

    //         console.log( event.keyCode )
    //         if( event.keyCode === 39 )
    //             incrementImage()
    //         else if( event.keyCode === 37 )
    //             decrementImage()

    //     }
    //     document.addEventListener('keydown', handleKeyDown);

    //     // Don't forget to clean up
    //     return function cleanup() {

    //         console.log("clearning this")
    //         document.removeEventListener('keydown', handleKeyDown)

    //     }

    // }, [])

    if( open )
        return (
            <div className="fixed bg-black/70 w-full h-screen top-0 left-0 z-50 flex justify-center items-center" onClick={ () => hideModal() }>
                <div className="w-full md:w-2/3 group overflow-hidden relative" onClick={ ( event ) => event.stopPropagation() }>
                    <div className="absolute right-0 top-0 cursor-pointer" onClick={ () => hideModal() }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 md:w-8 aspect-square text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="flex gap-2 md:gap-4">
                        <div className="w-6 md:w-10 flex items-center px-1 md:px-2 cursor-pointer" onClick={ ( event ) => decrementImage( event ) }>
                            <div className="rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 md:w-8 aspect-square text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className="grow">
                            <img
                                src={ images_array[ displayIndex ]?.image }
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-6 md:w-10 flex items-center px-1 md:px-2 cursor-pointer" onClick={ ( event ) => incrementImage( event ) }>
                            <div className="rotate-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 md:w-8 aspect-square text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

}

export default AcommodationModal
