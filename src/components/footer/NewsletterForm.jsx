// IMPORTING JSX ATOMS

import GrayButtonJSX from "../../atoms/buttons/jsx/Gray"

const NewsletterForm = ( props ) => {

    return(
        <section className="pt-4 space-y-2">
            <div className="flex items-center">
                <p className="text-white text-sm font-montserrat">Email Address</p><sup className="text-red-500">*</sup>
            </div>
            <div className="flex gap-2 items-center">
                <input
                    type="text"
                    className="h-8 w-40 border border-zinc-400 px-2 text-sm text-black"
                    name="email"
                />
                <GrayButtonJSX>Subscribe</GrayButtonJSX>
            </div>
        </section>
    )

}

export default NewsletterForm
