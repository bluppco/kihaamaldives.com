const YellowButtonJSX = ( props ) => {

    const { href, aria_label } = props

    return(
        <div className="w-fit overflow-hidden relative group">
            <a href={ href } aria-label={ aria_label }>
                <button className={`text-white bg-yellow-500 h-10 px-6 flex justify-center items-center border border-white w-full after:w-0 after:h-full after:bg-kmr_green after:text-white after:absolute after:left-0 after:top-0 after:z-30 hover:after:w-full after:transition-[width] after:duration-300 after:border after:border-white`}>
                    <div className="z-40 relative duration-200 text-sm tracking-wider uppercase">
                        { props.children }
                    </div>
                </button>
            </a>
        </div>

    )

}

export default YellowButtonJSX
