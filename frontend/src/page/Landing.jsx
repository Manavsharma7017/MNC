import { Button } from "@/components/ui/button";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import banner from "../assets/banner.webp";
import { Link } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Landing = () => {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <div className="flex flex-col items-center w-full h-1/2 py-4">
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-4xl" // Adjust for larger screens
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="flex sm:h-[400px] h-[300px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="flex w-full sm:w-1/2 lg:w-1/3">
                            <div className="p-2">
                                <Card>
                                    <CardContent className="flex  items-center justify-center p-4">
                                        <img src={banner} alt="MNC" className="w-full h-full " />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="text-black" />
                <CarouselNext className="text-black" />
            </Carousel>

            <Link to="/restaurant">
                <Button className="bg-dj hover:bg-manav shadow-md rounded-md mt-4 px-6">Go to Restaurant</Button>
            </Link>

            <Accordion type="multiple" collapsible className="w-full md:max-w-2xl mt-4">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it safe?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It is safe to use our website to order food as we have a no log policy.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it free?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It is free for all.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Who created this website?</AccordionTrigger>
                    <AccordionContent>
                        This website is created by team B1N4RY.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Landing;
