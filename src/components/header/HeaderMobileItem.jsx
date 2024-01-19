const HeaderMobileItem = ( props ) => {

    const { href } = props

    return(
        <li className="text-lg uppercase font-montserrat text-kmr_green">
            <a href={ href }>
                { props.children }
            </a>
        </li>
    )

}

export default HeaderMobileItem
