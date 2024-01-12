const NewsletterForm = ( props ) => {

    return(
        <section className="flex justify-center md:justify-start w-full">
            <section className="border rounded border-slate-300 shadow-md p-5 relative w-full space-y-4 bg-gray-200">
                <div className="text-slate-700 font-montserrat font-semibold">Sign-up for Exclusive Offers</div>
                <div className="space-y-3">
                    <input
                        type="text"
                        className="rounded text-slate-700 w-full text-xs h-10 border border-slate-300 px-4"
                        name="email"
                        placeholder="Email address"
                    />
                    <button className="uppercase rounded text-slate-50 w-full text-sm h-10 bg-kmr_green tracking-widest font-montserrat font-medium" onClick={ () => triggerFormPOST() }>
                        Subscribe
                    </button>
                </div>
            </section>
        </section>
    )

}

export default NewsletterForm
