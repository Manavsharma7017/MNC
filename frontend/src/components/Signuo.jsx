import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { useState } from "react"
const Signup = () => {
    const [formdata, setformdata] = useState({
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        address: ""
    })
    const [otp, setopt] = useState(0)
    const inputchabge = (e) => {
        const { name, value } = e.target;
        setformdata((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }
    return <><Card>
        <CardHeader>
            <CardTitle>signup</CardTitle>
            <CardDescription>Create your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="space-y-2"><Input name="username" placeholder="enter your email" onChange={inputchabge}></Input>
            </div>
        </CardContent> <CardContent className="space-y-2">
            <div className="space-y-2"><InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} onChange={(e) => {
                setopt(e)
            }}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                </InputOTPGroup>
            </InputOTP>
            </div>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
            <Button className="bg-dj hover:bg-manav">Get OTP</Button>
            <Button className="bg-dj hover:bg-manav">Resend OTP</Button>
        </CardFooter>
    </Card>
    </>
}
export default Signup