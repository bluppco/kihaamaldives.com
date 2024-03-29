import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

// IMPORTS COMPONENTS
import HeaderMobileItem from "./HeaderMobileItem"

const HeaderMobile = ( props ) => {

    const { env } = props

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className={` ${ env === "staging" ? "mt-16" : "" } md:hidden bg-white px-6 py-4 fixed z-20 w-full border-b border-b-zinc-200`}>
            <div className="flex justify-between items-center z-20">
                <a href="/">
                    <div className="w-20 aspect-[5/2]">
                        <img
                            src="/logo/kmr_logo.png"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                </a>
                <div onClick={ () => updateOpen( !isOpen ) }>
                    {

                        isOpen &&
                        <img
                            src="/icons/close.svg"
                            className="w-6 aspect-square"
                        />

                    }
                    {

                        !isOpen &&
                        <img
                            src="/icons/menu.svg"
                            className="w-6 aspect-square"
                        />

                    }
                </div>
            </div>
            <AnimatePresence initial={false}>
                {

                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate={ isOpen ? "open" : "collapsed" }
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "100vh" },
                            collapsed: { opacity: 0, height: "0px" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="grow"
                    >
                        <div className="flex flex-col gap-1 items-center justify-center h-full z-10">
                            <ul className="flex flex-col justify-center items-center gap-8">
                                <HeaderMobileItem href="/accommodation">Classic</HeaderMobileItem>
                                <HeaderMobileItem href="/luxury-collection">Luxury</HeaderMobileItem>
                                <HeaderMobileItem href="/hanifaru-bay">Hanifaru Bay</HeaderMobileItem>
                                <HeaderMobileItem href="/wine-and-dine">Taste of culture</HeaderMobileItem>
                                <HeaderMobileItem href="/horse-riding">Horses in Maldives</HeaderMobileItem>
                                <HeaderMobileItem href="/about">More</HeaderMobileItem>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
