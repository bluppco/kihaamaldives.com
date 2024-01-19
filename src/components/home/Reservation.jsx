import { useState } from "react"

// IMPORTS JSX ATOMS
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
import ContainerJSX from "@/layouts/Container"

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
            <ContainerJSX>
                <section className="md:max-w-5xl md:mx-auto flex flex-col gap-4 md:flex-row justify-between">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                        <p className="font-josefin text-sm font-semibold uppercase text-white">Arrival</p>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={ cn( "w-full md:w-[240px] pl-3 text-left font-normal", !arrivalDate && "text-muted-foreground" ) }
                                >
                                    {

                                        arrivalDate ? ( format(arrivalDate, "PPP") ) : ( <span className="text-gray-600">Pick arrival date</span> )

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
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                        <p className="font-josefin text-sm font-semibold uppercase text-white">Departure</p>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={ cn( "w-full md:w-[240px] pl-3 text-left font-normal", !departureDate && "text-muted-foreground" ) }
                                >
                                    {

                                        departureDate ? ( format(departureDate, "PPP") ) : ( <span className="text-gray-600">Pick departure date</span> )

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
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
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
                            <div className="text-gray-600 bg-white w-10 h-8 flex items-center justify-center text-center border border-zinc-200">{ quantity }</div>
                            <div className="text-white text-lg cursor-pointer select-none" onClick={ () => increment() }>
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
            </ContainerJSX>
        </section>
    )

}

export default Reservation
