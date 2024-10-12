import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../components/ui/hover-card"

const About = () => {
    return (<HoverCard>
        <HoverCardTrigger>About</HoverCardTrigger>
        <HoverCardContent>
            MNC is an online food delivery platform. we help Restaurant to build an business in there locial area
        </HoverCardContent>
    </HoverCard>
    )
}
export default About