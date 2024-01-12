import { useState } from "react"

// IMPORTING JSX ATOMS
import YellowButtonJSX from "../../atoms/buttons/jsx/Yellow"

const Reservation = ( props ) => {

    const [ quantity, updateQuantity ] = useState( 1 )

    const increment = () => {

        let update_quantity = quantity
        if( quantity < 11 ){

            update_quantity++

        }
        updateQuantity( update_quantity )

    }
    const decrement = () => {

        let update_quantity = quantity
        if( quantity > 1 ){

            update_quantity--

        }
        updateQuantity( update_quantity )

    }

    return(
        <section className="bg-kmr_green py-4">
            <section className="max-w-5xl mx-auto flex gap-4 justify-between">
                <div className="flex gap-4 items-center">
                    <p className="font-josefin text-sm font-semibold uppercase text-white">Arrival</p>
                    <input
                        type="text"
                        className="text-slate-700 text-xs h-8 w-40 border border-slate-300 px-4"
                        name=""
                        placeholder=""
                    />
                </div>
                <div className="flex gap-4 items-center">
                    <p className="font-josefin text-sm font-semibold uppercase text-white">Departure</p>
                    <input
                        type="text"
                        className="text-slate-700 text-xs h-8 w-40 border border-slate-300 px-4"
                        name=""
                        placeholder=""
                    />
                </div>
                <div className="flex gap-4 items-center">
                    <p className="font-josefin text-sm font-semibold uppercase text-white">Guests</p>
                    <div className="flex gap-2 items-center">
                        <div className="text-white text-lg cursor-pointer mr select-none" onClick={ () => decrement() }>
                            <div className="size-7">
                                <img
                                    src="/icons/decrement.svg"
                                    alt=""
                                    className="size-7"
                                />
                            </div>
                        </div>
                        <div className="text-slate-700 bg-white w-10 h-8 flex items-center justify-center text-center border border-zinc-200">{ quantity }</div>
                        <div className="text-white text-lg cursor-pointer pl-2 select-none" onClick={ () => increment() }>
                            <div className="size-7">
                                <img
                                    src="/icons/increment.svg"
                                    alt=""
                                    className="size-7"
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                <YellowButtonJSX>Book Now</YellowButtonJSX>
            </section>
        </section>
    )

}

export default Reservation
