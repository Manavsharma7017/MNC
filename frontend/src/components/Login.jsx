import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"


import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { useState } from "react"
const Login = () => {
    const [formdata, setformdata] = useState({
        username: "",
        passward: ""
    })
    const inputchabge = (e) => {
        const { name, value } = e.target;
        setformdata((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }

    return <><Card>
        <CardHeader>
            <CardTitle>login</CardTitle>
            <CardDescription>login to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="space-y-2"><Input name="username" placeholder="enter your email" onChange={inputchabge}></Input>
                { }
            </div>
        </CardContent> <CardContent className="space-y-2">
            <div className="space-y-2"><Input name="passward" placeholder="enter your passward" onChange={inputchabge}></Input></div>
        </CardContent>
        <CardFooter>
            <Button className="bg-dj hover:bg-manav">login</Button>
        </CardFooter>
    </Card>
    </>
}
export default Login