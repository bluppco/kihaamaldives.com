const ContainerJSX = ( props ) => {

    return(
        <section className="container mx-auto px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md xl:max-w-[1220px] mac:max-w-[1340px] mac:mac-w-screen-xl 2xl:max-w-screen-2xl flex flex-col gap-8">
            { props.children }
        </section>

    )

}

export default ContainerJSX
