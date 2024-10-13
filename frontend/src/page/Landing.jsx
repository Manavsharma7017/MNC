import { Button } from "@/components/ui/button"
import banner from "../assets/banner.webp"
import { Link } from "react-router-dom"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Landing = () => {

    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <div className="w-screen h-screen">
                <img src={banner} alt="MNC" className="sm:w-screen sm:h-screen p-2 min-h-96 max-w-screen absolute  overflow-hidden" />
                <div className="group relative sm:w-screen sm:h-screen min-h-96 max-w-screen flex flex-row justify-center items-center"> <Link to={"/restaurant"}> <Button className="mt-24 bg-dj hover:bg-manav shadow-md rounded-md"> Go to Restaurant</Button></Link></div>

            </div>
            <Accordion type="multiple" collapsible className="w-full md:px-11">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it safe?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It is safe to use our website to order food as we have a no log policy
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it free?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It is free for all
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>who created this website</AccordionTrigger>
                    <AccordionContent>
                        this website is created by team B1N4RY
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>

            </Accordion>

        </div >
    )
}
export default Landing
