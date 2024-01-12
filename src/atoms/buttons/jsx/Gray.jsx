const GrayButtonJSX = ( props ) => {

    const { href, aria_label } = props

    return(
        <div>
            <a href={ href } aria-label={ aria_label }>
                <button className="h-8 px-4 text-xs hover:text-white text-black bg-gray-300 hover:bg-gray-500 border border-gray-400 uppercase font-medium tracking-wide transition-all duration-300">
                    { props.children }
                </button>
            </a>
        </div>

    )

}

export default GrayButtonJSX
