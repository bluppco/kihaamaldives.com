import { useState } from "react"

// IMPORTING JSX ATOMS
import YellowButtonJSX from "../../atoms/buttons/jsx/Yellow"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {

    Popover,
    PopoverContent,
    PopoverTrigger,

} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "@radix-ui/react-icons"

const Reservation = ( props ) => {

    // IMPORTANT
    // IT SHOULD BE GUESTS AND NOT QUANLITY
    const [ quantity, updateQuantity ] = useState( 1 )
    const [ arrivalDate, setArrivalDate ] = useState()
    const [ departureDate, setDepartureDate ] = useState()
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
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={ cn( "w-[240px] pl-3 text-left font-normal", !arrivalDate && "text-muted-foreground" ) }
                            >
                                {

                                    arrivalDate ? ( format(arrivalDate, "PPP") ) : ( <span>Pick arrival date</span> )

                                }
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={ arrivalDate }
                                onSelect={ setArrivalDate }
                                disabled={ (date) => date < new Date() }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="font-josefin text-sm font-semibold uppercase text-white">Departure</p>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={ cn( "w-[240px] pl-3 text-left font-normal", !departureDate && "text-muted-foreground" ) }
                            >
                                {

                                    departureDate ? ( format(departureDate, "PPP") ) : ( <span>Pick departure date</span> )

                                }
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={ departureDate }
                                onSelect={ setDepartureDate }
                                disabled={ (date) => date < new Date() || date < new Date( arrivalDate ) }
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
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
