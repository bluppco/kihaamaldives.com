import { endpointFetch } from "../../functions/endpoint"

export const homeAPI = async ( environment ) => {

    const endpoint = endpointFetch( environment )

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( endpoint + "/home" )
    const data_json = await network_data.json()

    const { home, accommodations, experiences, meta_tags } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        jewel_of_the_oceans : "",
        award_winning_resort : "",
        unspoilt : "",
        accommodation : "",
        image_banner_one : "",
        experiences : "",
        image_banner_two : "",
        instagram_feed : "",
        make_reservation : ""

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "jewel-of-the-oceans" )
            home_data.jewel_of_the_oceans = data
        else if ( data.slug === "award-winning-resort" )
            home_data.award_winning_resort = data
        else if ( data.slug === "unspoilt" )
            home_data.unspoilt = data
        else if ( data.slug === "accommodation" )
            home_data.accommodation = data
        else if ( data.slug === "image-banner-one" )
            home_data.image_banner_one = data
        else if( data.slug === "experiences" )
            home_data.experiences = data
        else if ( data.slug === "image-banner-two" )
            home_data.image_banner_two = data
        else if ( data.slug === "instagram-feed" )
            home_data.instagram_feed = data
        else if ( data.slug === "make-reservation" )
            home_data.make_reservation = data

    })

    return { home_data, accommodations, experiences, meta_tags }

}
